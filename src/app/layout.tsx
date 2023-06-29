"use client"
import "./globals.css"
import Footer from "@/components/Footer"
import { AppProvider } from "../context/AppContext"

export const metadata = {
	title: "Ecommerce",
	description: "Projeto de marketplace",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className='bg-slate-100 text-slate-950'>
				<div className='h-screen flex flex-col'>
					<AppProvider>{children}</AppProvider>
					<Footer />
				</div>
			</body>
		</html>
	)
}
