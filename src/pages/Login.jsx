import React from 'react'

const Login = () => {
    return (
        <div className='max-w-md mx-auto mt-20 p-4 border rounded shadow'>
            <h2 className='text-xl mb-4'>Login</h2>
            <form className='flex flex-col space-y-3'>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                        Password
                    </label>
                    <input
                        type='password'
                        id='password'
                        className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                    />
                </div>
                <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded'
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
