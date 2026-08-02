'use client'

import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export function ZoomImage({ image, alt = '' }) {
  return (
    <div className="overflow-hidden rounded-xl bg-gray-50 ring-1 ring-gray-900/10 ring-inset dark:bg-gray-900 dark:ring-white/10">
      <Zoom zoomMargin={16}>
        <Image src={image} alt={alt} className="h-auto w-full" sizes="(min-width: 1024px) 18rem, 45vw" />
      </Zoom>
    </div>
  )
}
