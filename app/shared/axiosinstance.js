// lib/axiosInstance.js
"use client";
import axios from 'axios';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: "https://mmo2zebussystem-c5c63f16b7b0.herokuapp.com/",
    timeout: 30000, // Set timeout as needed
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Add token or any custom headers here
        const token = localStorage.getItem('token'); // Example for client-side token retrieval
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        // Handle request error here
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => response, // Just return the response if no error
    (error) => {
        // Handle errors globally
        if (error.response?.status === 401) {
            // Optional: Log out user or refresh token if unauthorized

        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
