"use client"
import { ProductContext } from "@/context/ProductContext"
import { MinusIcon, PlusIcon } from "lucide-react"
import { useContext } from "react"

interface ContadorProps {
	estoque: number
}

export const Contador = ({ estoque }: ContadorProps) => {
	const { quantidade, handleDecrement, handleIncrement } = useContext(ProductContext)
	return (
		<div className='border-t border-zinc-400 mt-8 mb-5 pt-4'>
			<h2 className='mb-3'>Quantidade</h2>
			{estoque > 0 ? (
				<>
					<div className='mb-3 flex items-center text-center'>
						<button
							className='bg-gray-400 rounded-full p-1'
							onClick={handleDecrement}
							disabled={quantidade < 2 ? true : false}
						>
							<MinusIcon />
						</button>
						<p className='mx-5'>{quantidade}</p>
						<button
							className='bg-gray-400 rounded-full p-1'
							onClick={handleIncrement}
							disabled={estoque <= quantidade}
						>
							<PlusIcon />
						</button>
					</div>
					<h2 className='text-green-800'>Estoque: {estoque}</h2>
				</>
			) : (
				<h2 className='text-red-800'>Estoque: {estoque}</h2>
			)}
		</div>
	)
}
