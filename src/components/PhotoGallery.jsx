'use client'

import { PhotoProvider, PhotoView } from 'react-photo-view'

export function PhotoGallery({ children }) {
  return (
    <PhotoProvider maskOpacity={0.92} bannerVisible={false}>
      {children}
    </PhotoProvider>
  )
}

export function Zoomable({ image, className = '', children }) {
  const src = typeof image === 'string' ? image : image?.src
  return (
    <PhotoView src={src}>
      <div className={`cursor-zoom-in ${className}`}>{children}</div>
    </PhotoView>
  )
}
