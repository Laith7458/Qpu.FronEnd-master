
"use client"
import Form from 'next/form'
import {useState} from "react";

import axiosInstance from "@/app/shared/axiosinstance";
export default function Trips() {


    function GetTrips() {
        axiosInstance.get("trip?page=1&size=11").then((response) => {
            console.log(response)

        }).then((error) => {
            console.log(error)
        })

    }
    GetTrips()

    return (
        <div className='relative top-[15%]'>


        </div>
    )
}