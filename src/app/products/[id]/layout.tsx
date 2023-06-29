"use client"

import ProductProvider from "@/context/ProductContext"

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
	return <ProductProvider>{children}</ProductProvider>
}

export default ProductLayout
