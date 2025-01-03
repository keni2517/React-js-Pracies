import React, { useState } from 'react'

import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useFormik } from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object({
    Password: Yup.string()
        .min(2, 'Too Short!')
        .max(8, 'Too Long!')
        .required('Password is Required'),
    Email: Yup.string().email('Invalid email').required('Email is Required'),
});

// function showAlert() {
//     toast.success('Login Succesfully', {
//         position: "bottom-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//         transition: Bounce,
//     });
// }

// function show_Error() {
//     toast.error('Please fill correct details', {
//         position: "bottom-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//         transition: Bounce,
//     });
// }

// function show_Error_Alert() {
//     toast.error('Please fill all fields', {
//         position: "bottom-right",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//         transition: Bounce,
//     });
// }

const Login = () => {

    const navigate = useNavigate()

    const { values, handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues: {
            Email: '',
            Password: ''
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {

            const crudUsers = JSON.parse(localStorage.getItem("users"));
            const loginuser = crudUsers.find(loginuser => loginuser.Email === values.Email && loginuser.Password === values.Password)

            if (loginuser) {
                // showAlert()
                alert("successfully registered");
                navigate('/home');
            }

            if (!loginuser) {
                //   show_Error()
                alert("fill cureedrypt");
            }
        },
    });


    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const getEmail = localStorage.getItem("Email");
    // const getPassword = localStorage.getItem("Password");


    // function onLoginFun(e) {
    //     e.preventDefault();
    //     const crudUsers = JSON.parse(localStorage.getItem("users"));
    //     const loginuser = crudUsers.find(loginuser => loginuser.email === email && loginuser.password === password)
    //     if (!email && !password) {
    //         show_Error_Alert();
    //     }

    //     if (loginuser) {
    //         // showAlert()
    //         alert("successfully registered");

    //         navigate('/home');
    //     }

    //     if (!loginuser) {
    //         //   show_Error()
    //         alert("fill cureedrypt");
    //     }


    //     // else if (email !== getEmail && password !== getPassword) {
    //     //   show_Error();
    //     // } 
    //     // else {
    //     //   showAlert();
    //     // }
    // }

    return (
        <div>
            <section>
                <ToastContainer />
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Login</h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Don&apos;t have an account?{' '}
                                <a
                                    href="#"
                                    title=""
                                    className="font-semibold text-black transition-all duration-200 hover:underline"
                                >
                                    Create a free account
                                </a>
                            </p>
                            <form onSubmit={handleSubmit} action="#" method="POST" className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Email address{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="email"
                                                placeholder="Email"
                                                name='Email'
                                                value={values.Email}
                                                onChange={handleChange}
                                            ></input>
                                            {errors.Email && touched.Email ? <p style={{ color: "red" }}>{errors.Email}</p> : null}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="" className="text-base font-medium text-gray-900">
                                                {' '}
                                                Password{' '}
                                            </label>
                                            <a
                                                href="#"
                                                title=""
                                                className="text-sm font-semibold text-black hover:underline"
                                            >
                                                {' '}
                                                Forgot password?{' '}
                                            </a>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="password"
                                                placeholder="Password"
                                                value={values.Password}
                                                name='Password'
                                                onChange={handleChange}
                                            ></input>
                                            {errors.Password && touched.Password ? <p style={{ color: "red" }}>{errors.Password}</p> : null}
                                        </div>
                                    </div>
                                    <div>
                                        <button

                                            type="submit"
                                            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        >
                                            Login <ArrowRight className="ml-2" size={16} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-3 space-y-3">
                                <button
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                >
                                    <span className="mr-2 inline-block">
                                        <svg
                                            className="h-6 w-6 text-rose-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                        </svg>
                                    </span>
                                    Sign in with Google
                                </button>
                                <button
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                >
                                    <span className="mr-2 inline-block">
                                        <svg
                                            className="h-6 w-6 text-[#2563EB]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </span>
                                    Sign in with Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-full">
                        <img
                            className="mx-auto h-full w-full rounded-md object-cover"
                            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login