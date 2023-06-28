import Image from "next/image"

export default function Home() {
	return (
		<div className='flex-1'>
			<main className='p-12'>
				<div className='grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
					<div className='flex flex-col items-center rounded bg-white p-6'>
						<Image src='/images/processador.jpg' alt='foto' width={80} height={80} />
						<h1 className='mt-3'>produto</h1>
						<p className='my-3'>R$ 1231232</p>
						<button className='bg-green-600 py-2 px-7 rounded-lg text-white text-sm'>
							Comprar
						</button>
					</div>
					<div className='flex flex-col items-center rounded bg-white p-6'>
						<Image src='/images/processador.jpg' alt='foto' width={80} height={80} />
						<h1 className='mt-3'>produto</h1>
						<p className='my-3'>R$ 1231232</p>
						<button className='bg-green-600 py-2 px-7 rounded-lg text-white text-sm'>
							Comprar
						</button>
					</div>
					<div className='flex flex-col items-center rounded bg-white p-6'>
						<Image src='/images/processador.jpg' alt='foto' width={80} height={80} />
						<h1 className='mt-3'>produto</h1>
						<p className='my-3'>R$ 1231232</p>
						<button className='bg-green-600 py-2 px-7 rounded-lg text-white text-sm'>
							Comprar
						</button>
					</div>
					<div className='flex flex-col items-center rounded bg-white p-6'>
						<Image src='/images/processador.jpg' alt='foto' width={80} height={80} />
						<h1 className='mt-3'>produto</h1>
						<p className='my-3'>R$ 1231232</p>
						<button className='bg-green-600 py-2 px-7 rounded-lg text-white text-sm'>
							Comprar
						</button>
					</div>
				</div>
			</main>
		</div>
	)
}
