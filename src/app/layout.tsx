"use client"
import { Inter } from "next/font/google"
import Footer from "@/components/Footer"
import { AppProvider } from "../context/AppContext"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`text-slate-950 ${inter.className}`}>
				<div className='h-screen flex flex-col'>
					<AppProvider>{children}</AppProvider>
					<Footer />
				</div>
			</body>
		</html>
	)
}
