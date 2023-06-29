'use client'

import { Tab } from '@headlessui/react'

export interface ImagesCarouselProps {
  images: string[]
  productName: string
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const ImagesCarousel = ({ images, productName }: ImagesCarouselProps) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map(image => (
            <Tab
              key={image}
              className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">{productName}</span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <img src={image} alt="" className="h-full w-full object-cover object-center" />
                  </span>
                  <span
                    className={classNames(
                      selected ? 'ring-indigo-500' : 'ring-transparent',
                      'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
        {images.map(image => (
          <Tab.Panel key={image}>
            <img
              src={image}
              alt={productName}
              className="mx-auto h-[400px] w-[400px] object-cover object-center sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
