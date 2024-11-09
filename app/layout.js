import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import icons from "../app/image/2303160_bus_public_road_transport_travel_icon.png";
import AnimatedBackground from "./components/AnimatedBackground";
import DynamicLink from "./components/DynamicLink"; // استدعاء المكون الجديد

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AnimatedBackground>
        <nav className="relative bg-white bg-opacity-50 border-gray-200 dark:bg-gray-900 dark:bg-opacity-0">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            
            <DynamicLink />
          </div>
        </nav>

        {children}
      </AnimatedBackground>
    </html>
  );
}
