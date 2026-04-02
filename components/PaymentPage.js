"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation"


const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()
    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })

    const [currentuser, setcurrentUser] = useState([])
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast('Payment has been made', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        router.push(`/${username}`)
    }, [])


    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }


    const pay = async (amount) => {
        //Get order Id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentuser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce} />
            <ToastContainer />

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full bg-red-50 relative'>
                <img className='object-cover w-full h-48 md:h-[350px] contrast-125 brightness-110 saturate-110' src={currentuser.coverpic} alt="" />
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                    <img
                        className="border border-gray-600 rounded-xl contrast-125 brightness-110 saturate-110 w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
                        src={currentuser.profilepic}
                        alt=""/>
                </div>
            </div>
            <div className="info flex justify-center items-center py-26 text-white flex-col gap-2">
                <div className='font-bold text-4xl'>

                    @{username}
                </div>

                <div className='text-slate-400'>
                    Lets help {username} get a chai!

                </div>
                <div className='text-slate-400'>
                    {payments.length} Payments . ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
                </div>

                <div className="payments flex flex-col md:flex-row gap-3 w-[80%] mt-11">
                    <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        {/* Show list of all the supporters as a leaderboard */}
                        <h2 className='text-2xl font-bold my-5'>Top 10 Supporters</h2>
                        <ul className='mx-5 text-lg'>
                            {payments.length == 0 && <li>No Payments Yet</li>}
                            {payments.map((p, i) => {


                                return <li key={i} className='my-4 flex gap-2 items-center'>
                                    <img width={33} src="/avatar.gif" alt="user avatar" />
                                    <span>
                                        {p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"
                                    </span>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="makepayments w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className="flex gap-2 flex-col">
                            {/* input for name and message */}
                            <div>
                                <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full rounded-lg bg-slate-800 p-3' placeholder='Enter Name' />
                            </div>
                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full rounded-lg bg-slate-800 p-3' placeholder='Enter Message' />

                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full rounded-lg bg-slate-800 p-3' placeholder='Enter Amount' />
                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 disabled:bg-slate-600 disabled:from-purple-300" disabled={paymentform.name?.length <= 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}>Pay</button>                        </div>
                        {/* or choose from these amounts */}
                        <div className="flex flex-col md:flex-row gap-2 mt-5">
                            <button className='bg-slate-800 rounded-lg p-3 cursor-pointer' onClick={() => pay(50000)}>Pay ₹500</button>
                            <button className='bg-slate-800 rounded-lg p-3 cursor-pointer' onClick={() => pay(100000)}>Pay ₹1000</button>
                            <button className='bg-slate-800 rounded-lg p-3 cursor-pointer' onClick={() => pay(200000)}>Pay ₹2000</button>
                            <button className='bg-slate-800 rounded-lg p-3 cursor-pointer' onClick={() => pay(500000)}>Pay ₹5000</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
