"use client"
import NavBar from "@/components/NavBar"

export const RootTemplate = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<NavBar />
			{children}
		</>
	)
}

export default RootTemplate
