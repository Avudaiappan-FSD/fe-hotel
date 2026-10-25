import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import paymentServices from "../services/paymentServices";

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Details passed from Room.jsx
    const booking = location.state?.booking;
    const room = location.state?.room || booking?.room;

    const roomId =
        location.state?.roomId ||
        (typeof room === "string" ? room : room?._id) ||
        null;

    const checkin =
        location.state?.checkin || booking?.checkin || "";

    const checkout =
        location.state?.checkout || booking?.checkout || "";

    const numberofguests =
        location.state?.numberofguests ??
        booking?.numberofguests ??
        "";

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("error");
    const [razorpayLoaded, setRazorpayLoaded] = useState(
        typeof window !== "undefined" && Boolean(window.Razorpay)
    );

    useEffect(() => {
        if (window.Razorpay) {
            setRazorpayLoaded(true);
            return;
        }

        const existingScript = document.querySelector(
            'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
        );

        const script = existingScript || document.createElement("script");

        const handleLoad = () => setRazorpayLoaded(true);
        const handleError = () => setRazorpayLoaded(false);

        script.addEventListener("load", handleLoad);
        script.addEventListener("error", handleError);

        if (!existingScript) {
            script.src =
                "https://checkout.razorpay.com/v1/checkout.js";
            script.async = true;
            document.body.appendChild(script);
        }

        return () => {
            script.removeEventListener("load", handleLoad);
            script.removeEventListener("error", handleError);
        };
    }, []);

    const showMessage = (text, type = "error") => {
        setMessage(text);
        setMessageType(type);
    };

    const handlePayment = async () => {
        if (loading) return;

        if (!roomId || !checkin || !checkout || !numberofguests) {
            showMessage(
                "Room details are missing. Go back and select your room, dates and guests."
            );
            return;
        }

        if (!razorpayLoaded || !window.Razorpay) {
            showMessage(
                "Razorpay is not loaded. Refresh the page and try again."
            );
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            // Step 1: Create Razorpay order.
            // This request must NOT create a Booking record.
            const orderResponse = await paymentServices.createOrder(
                {
                    roomId,
                    checkin,
                    checkout,
                    numberofguests: Number(numberofguests),
                },
                {
                    withCredentials: true,
                }
            );

            const orderData = orderResponse.data;

            if (
                !orderData.orderId ||
                !orderData.keyId ||
                !orderData.amount
            ) {
                throw new Error(
                    "Incomplete payment order details received from the server."
                );
            }

            // Step 2: Open Razorpay checkout.
            const options = {
                key: orderData.keyId,
                amount: orderData.amount,
                currency: orderData.currency || "INR",
                name: "Apple Tree Hotel",
                description: "Hotel Room Booking",
                order_id: orderData.orderId,

                handler: async (response) => {
                    try {
                        // Step 3: Verify payment on the backend.
                        const verifyResponse = await paymentServices.verifyPayment(
                            {
                                razorpay_order_id:
                                    response.razorpay_order_id,
                                razorpay_payment_id:
                                    response.razorpay_payment_id,
                                razorpay_signature:
                                    response.razorpay_signature,
                            },
                            {
                                withCredentials: true,
                            }
                        );

                        const result = verifyResponse.data;

                        if (result.success && result.booking) {
                            showMessage(
                                "Payment verified and booking confirmed!",
                                "success"
                            );

                            // Navigate only after backend confirmation.
                            // Update this route if your app uses a different
                            // My Bookings route.
                            navigate("/mybooking", {
                                replace: true,
                                state: {
                                    booking: result.booking,
                                },
                            });
                        } else {
                            showMessage(
                                result.message ||
                                "The server has not confirmed the booking. Check payment and booking status before retrying."
                            );
                        }
                    } catch (error) {
                        showMessage(
                            error.response?.data?.message ||
                            "Payment verification could not be completed. Check payment status before retrying."
                        );
                    } finally {
                        setLoading(false);
                    }
                },

                modal: {
                    ondismiss: () => {
                        setLoading(false);
                        showMessage(
                            "Payment window closed. Your booking is not confirmed."
                        );
                    },
                },

                theme: {
                    color: "#174c3c",
                },
            };

            const razorpay = new window.Razorpay(options);

            razorpay.on("payment.failed", (response) => {
                setLoading(false);

                showMessage(
                    response.error?.description ||
                    "Payment failed. Please try again."
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

    const roomName =
        room?.roomtype ||
        room?.roomType ||
        room?.roomnumber ||
        booking?.roomnumber ||
        "Selected room";

    const displayDate = (date) => {
        if (!date) return "—";

        const parsedDate = new Date(date);

        if (Number.isNaN(parsedDate.getTime())) return "—";

        return parsedDate.toLocaleDateString("en-IN");
    };

    const canPay =
        Boolean(roomId && checkin && checkout && numberofguests);

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <div style={styles.icon}>🔒</div>

                <h1 style={styles.title}>Secure Payment</h1>

                <p style={styles.subtitle}>
                    Complete your hotel booking payment securely.
                    Your booking will be confirmed only after the
                    server verifies your payment.
                </p>

                <div style={styles.details}>
                    <div style={styles.row}>
                        <span style={styles.label}>Room</span>
                        <span style={styles.value}>{roomName}</span>
                    </div>

                    <div style={styles.row}>
                        <span style={styles.label}>Check-in</span>
                        <span style={styles.value}>
                            {displayDate(checkin)}
                        </span>
                    </div>

                    <div style={styles.row}>
                        <span style={styles.label}>Check-out</span>
                        <span style={styles.value}>
                            {displayDate(checkout)}
                        </span>
                    </div>

                    <div style={styles.row}>
                        <span style={styles.label}>Guests</span>
                        <span style={styles.value}>
                            {numberofguests || "—"}
                        </span>
                    </div>
                </div>

                <div style={styles.total}>
                    <span>Total Amount</span>
                    <strong>
                        {booking?.totalprice != null
                            ? `₹${Number(
                                booking.totalprice
                            ).toLocaleString("en-IN")}`
                            : "Calculated securely by server"}
                    </strong>
                </div>

                {message && (
                    <div
                        role="alert"
                        aria-live="polite"
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

                {!canPay && (
                    <p style={styles.warning}>
                        Booking details are incomplete. Please go back
                        and select your room and dates again.
                    </p>
                )}

                <button
                    type="button"
                    onClick={handlePayment}
                    disabled={loading || !canPay || !razorpayLoaded}
                    style={{
                        ...styles.button,
                        opacity:
                            loading || !canPay || !razorpayLoaded
                                ? 0.6
                                : 1,
                        cursor:
                            loading || !canPay || !razorpayLoaded
                                ? "not-allowed"
                                : "pointer",
                    }}
                >
                    {loading
                        ? "Processing..."
                        : !razorpayLoaded
                            ? "Loading Secure Checkout..."
                            : "Pay Securely"}
                </button>

                <p style={styles.note}>
                    🔐 Secure checkout powered by Razorpay
                </p>

                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    disabled={loading}
                    style={{
                        ...styles.backButton,
                        opacity: loading ? 0.5 : 1,
                    }}
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
    warning: {
        background: "#fff8e6",
        color: "#8a5b00",
        padding: "12px",
        borderRadius: "8px",
        fontSize: "13px",
        lineHeight: 1.5,
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