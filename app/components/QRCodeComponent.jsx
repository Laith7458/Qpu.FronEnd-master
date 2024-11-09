"use client";
import React, {useEffect, useRef, useState} from 'react';
import QRCode from 'react-qr-code';
import {toPng} from 'html-to-image';
import axiosInstance from "@/app/shared/axiosinstance";

const QRCodeComponent = () => {
    const qrRef = useRef(null);
    const [userId, setUserId] = useState('')
    useEffect(
        () => {
            const getMyInfo = () => {
                axiosInstance.get("student/my-info").then((response) => {
                        console.log(response);
                        setUserId(response.data.id);

                    }
                ).catch((error) => {
                        console.log(error);
                    }
                )
            }
            getMyInfo();
        }, []
    )

    const handleDownload = () => {
        if (qrRef.current === null) {
            return;
        }

        toPng(qrRef.current)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'qr-code.png';
                link.click();
            })
            .catch((err) => {
                console.error('خطأ في التنزيل', err);
            });
    };

    return (
        <div className='flex flex-col justify-center items-center pt-24 gap-16'>


            <div
                className='bg-white p-4 rounded-xl  w-fit '
                ref={qrRef}

            >
                <QRCode value={userId}  size={200}/>
            </div>


            <button type="button" onClick={handleDownload}
                    className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Download
            </button>
        </div>
    );
};

export default QRCodeComponent;

// style={{
//     display: 'inline-block',
//     padding: '20px',  
//     backgroundColor: 'white', 
//     borderRadius: '10px', 
//   }}