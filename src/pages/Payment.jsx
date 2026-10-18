import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "/api/v1";

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const bookingId =
        location.state?.bookingId ||
        new URLSearchParams(location.search).get("bookingId");

    const booking = location.state?.booking;

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    useEffect(() => {
        const loadRazorpay = () => {
            if (window.Razorpay) return Promise.resolve(true);

            return new Promise((resolve) => {
                const script = document.createElement("script");
                script.src = "https://checkout.razorpay.com/v1/checkout.js";
                script.onload = () => resolve(true);
                script.onerror = () => resolve(false);
                document.body.appendChild(script);
            });
        };

        loadRazorpay();
    }, []);

    const showMessage = (text, type = "error") => {
        setMessage(text);
        setMessageType(type);
    };

    const handlePayment = async () => {
        if (!bookingId) {
            showMessage("Booking ID missing. Please open payment from your booking.");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            // Step 1: Create Razorpay order
            const orderResponse = await axios.post(
                `${API_URL}/payment/create-order`,
                { bookingId },
                { withCredentials: true }
            );

            const orderData = orderResponse.data;

            if (!window.Razorpay) {
                throw new Error("Razorpay checkout failed to load. Refresh and try again.");
            }

            if (!orderData.orderId || !orderData.keyId) {
                throw new Error("Order details are incomplete. Please check the backend response.");
            }

            // Step 2: Open Razorpay checkout
            const options = {
                key: orderData.keyId,
                amount: orderData.amount,
                currency: orderData.currency || "INR",
                name: "Apple Tree Hotel",
                description: "Hotel Room Booking",
                order_id: orderData.orderId,

                handler: async function (response) {
                    try {
                        // Step 3: Verify payment on the backend
                        const verifyResponse = await axios.post(
                            `${API_URL}/payment/verify-payment`,
                            {
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                            },
                            { withCredentials: true }
                        );

                        showMessage(
                            verifyResponse.data.message ||
                            "Payment verified successfully!",
                            "success"
                        );
                    } catch (error) {
                        showMessage(
                            error.response?.data?.message ||
                            "Payment verification failed. Contact support before retrying."
                        );
                    } finally {
                        setLoading(false);
                    }
                },

                modal: {
                    ondismiss: () => {
                        setLoading(false);
                        showMessage("Payment window closed. You can try again.");
                    },
                },

                theme: {
                    color: "#174c3c",
                },
            };

            const razorpay = new window.Razorpay(options);

            razorpay.on("payment.failed", function (response) {
                setLoading(false);
                showMessage(
                    response.error?.description || "Payment failed. Please try again."
                );
            });

            razorpay.open();
        } catch (error) {
            setLoading(false);
            showMessage(
                error.response?.data?.message ||
                error.message ||
                "Unable to start payment. Please try again."
            );
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <div style={styles.icon}>🔒</div>

                <h1 style={styles.title}>Secure Payment</h1>
                <p style={styles.subtitle}>
                    Complete your hotel booking payment securely.
                </p>

                <div style={styles.details}>
                    <div style={styles.row}>
                        <span style={styles.label}>Booking ID</span>
                        <span style={styles.value}>
                            {bookingId || "Not available"}
                        </span>
                    </div>

                    <div style={styles.row}>
                        <span style={styles.label}>Room</span>
                        <span style={styles.value}>
                            {booking?.room?.roomtype ||
                                booking?.room?.roomnumber ||
                                booking?.roomtype ||
                                "Booking details"}
                        </span>
                    </div>

                    <div style={styles.row}>
                        <span style={styles.label}>Check-in</span>
                        <span style={styles.value}>
                            {booking?.checkin
                                ? new Date(booking.checkin).toLocaleDateString()
                                : "—"}
                        </span>
                    </div>

                    <div style={styles.row}>
                        <span style={styles.label}>Check-out</span>
                        <span style={styles.value}>
                            {booking?.checkout
                                ? new Date(booking.checkout).toLocaleDateString()
                                : "—"}
                        </span>
                    </div>
                </div>

                <div style={styles.total}>
                    <span>Total Amount</span>
                    <strong>
                        {booking?.totalprice != null
                            ? `₹${Number(booking.totalprice).toLocaleString("en-IN")}`
                            : "Amount confirmed by server"}
                    </strong>
                </div>

                {message && (
                    <div
                        role="alert"
                        style={{
                            ...styles.message,
                            ...(messageType === "success"
                                ? styles.success
                                : styles.error),
                        }}
                    >
                        {message}
                    </div>
                )}

                <button
                    type="button"
                    onClick={handlePayment}
                    disabled={loading || !bookingId}
                    style={{
                        ...styles.button,
                        opacity: loading || !bookingId ? 0.6 : 1,
                        cursor: loading || !bookingId ? "not-allowed" : "pointer",
                    }}
                >
                    {loading ? "Processing..." : "Pay Securely"}
                </button>

                <p style={styles.note}>
                    <span>🔐</span> Secure checkout powered by Razorpay
                </p>

                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    style={styles.backButton}
                >
                    ← Back
                </button>
            </div>
        </div>
    );
};

const styles = {
    page: {
        minHeight: "100vh",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px 16px",
        background: "linear-gradient(135deg, #eef5f0, #f7f5ee)",
        fontFamily: "Arial, sans-serif",
    },
    card: {
        width: "100%",
        maxWidth: "460px",
        boxSizing: "border-box",
        background: "#ffffff",
        padding: "32px 24px",
        borderRadius: "18px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
    },
    icon: {
        width: "58px",
        height: "58px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 16px",
        borderRadius: "50%",
        background: "#e8f3ec",
        fontSize: "27px",
    },
    title: {
        margin: "0 0 8px",
        textAlign: "center",
        color: "#174c3c",
        fontSize: "28px",
    },
    subtitle: {
        textAlign: "center",
        color: "#6b7280",
        fontSize: "14px",
        lineHeight: 1.6,
        marginBottom: "28px",
    },
    details: {
        background: "#f8faf9",
        border: "1px solid #e5ebe7",
        borderRadius: "12px",
        padding: "16px",
    },
    row: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "12px",
        padding: "10px 0",
        borderBottom: "1px solid #e5ebe7",
    },
    label: {
        color: "#6b7280",
        fontSize: "14px",
    },
    value: {
        color: "#1f2937",
        fontSize: "14px",
        fontWeight: 600,
        textAlign: "right",
        overflowWrap: "anywhere",
        maxWidth: "60%",
    },
    total: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
        padding: "22px 0",
        color: "#174c3c",
        fontSize: "16px",
    },
    message: {
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "16px",
        fontSize: "14px",
        lineHeight: 1.5,
    },
    success: {
        background: "#e8f7ed",
        color: "#176534",
    },
    error: {
        background: "#fff0f0",
        color: "#a32121",
    },
    button: {
        width: "100%",
        border: "none",
        borderRadius: "10px",
        padding: "15px",
        background: "#174c3c",
        color: "#ffffff",
        fontSize: "16px",
        fontWeight: 700,
    },
    note: {
        textAlign: "center",
        color: "#6b7280",
        fontSize: "12px",
        marginTop: "18px",
    },
    backButton: {
        display: "block",
        margin: "16px auto 0",
        border: "none",
        background: "transparent",
        color: "#174c3c",
        fontSize: "14px",
        cursor: "pointer",
    },
};

export default Payment;