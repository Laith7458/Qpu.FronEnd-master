"use client"
import Form from 'next/form'
import {useState} from "react";

import axiosInstance from "@/app/shared/axiosinstance";

export default function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function login() {
        axiosInstance.post("auth/student-login", {
            "id": {
                "value": username,
            },
            "password": password
        }).then((response) => {
            console.log(response)
            localStorage.setItem("token", response.data.token)
            console.log(localStorage.getItem("token"))
        }).then((error) => {
            console.log(error)
        })

    }

    return (
        <div className='relative top-[15%]'>
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                    <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        Sign in to your account
                    </h1>
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1> */}
                            <Form className="space-y-6 md:space-y-8" action="#">
                                <div>
                                    <label for="text"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> User
                                        Name</label>
                                    <input type="text" name="text" id="text"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="" required="" value={username}
                                           onChange={(e) => setUsername(e.target.value)}/>
                                </div>
                                <div>
                                    <label for="password"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <button type="button"
                                        onClick={login}
                                        className="w-1/2 relative right-[-25%]  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send
                                </button>

                            </Form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}