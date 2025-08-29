'use client'

import { v4 as uuidv4 } from 'uuid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ImageWrapper } from '@/components/atoms/Images'
import styles from './styles.module.scss'

export interface Image {
  image: string
  imageDescription: string
}

interface GalleryProps {
  images: Image[]
  hasImages?: boolean
}

export const Gallery = ({ images, hasImages }: GalleryProps) => {
  const ariaLabel = 'Galeria de imagens'

  const id = uuidv4()
  if (!hasImages) return null
  return (
    <section className={styles.gallery} aria-label={ariaLabel}>
      <Swiper
        style={
          {
            '--swiper-pagination-color': '#177F9C',
          } as React.CSSProperties
        }
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          834: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        key={id}
      >
        {images.map((image) => (
          <SwiperSlide
            key={uuidv4()}
            className={styles.gallery__imageContainer}
          >
            <ImageWrapper
              imageDescription={image.imageDescription}
              image={image.image}
              className={styles.gallery__image}
              width={582}
              height={388}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}