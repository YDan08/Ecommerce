"use client"
import { useContador } from "@/context/ProductContext"
import { MinusIcon, PlusIcon } from "lucide-react"

interface ContadorProps {
	estoque: number
}

export const Contador = ({ estoque }: ContadorProps) => {
	const { quantidade, handleDecrement, handleIncrement } = useContador()
	return (
		<div className='border-t border-gray-200 mt-8 mb-5 pt-4'>
			<h2 className='mb-3'>Quantidade</h2>
			{estoque > 0 ? (
				<>
					<div className='mb-3 flex items-center text-center'>
						<button
							className='bg-indigo-50 hover:bg-indigo-200 transition-colors ease-in-out duration-150 rounded-md py-1 px-2 text-indigo-800 disabled:opacity-25'
							onClick={handleDecrement}
							disabled={quantidade <= 1}
						>
							<MinusIcon width={16} />
						</button>
						<p className='mx-5'>{quantidade}</p>
						<button
							className='bg-indigo-50 transition-colors ease-in-out duration-150 hover:bg-indigo-200 rounded-md py-1 px-2 text-indigo-800 disabled:opacity-25'
							onClick={handleIncrement}
							disabled={estoque <= quantidade}
						>
							<PlusIcon width={16} />
						</button>
					</div>
					<h2 className='text-[#007600] font-medium'>Em estoque</h2>
				</>
			) : (
				<h2 className='text-red-800'>Produto indisponivel</h2>
			)}
		</div>
	)
}
