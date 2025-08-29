import Image from 'next/image'

interface ImageProps {
  imageDescription: string
  className?: string
  image: string
  width?: number
  height?: number
}
export const ImageWrapper = ({
  image,
  className,
  imageDescription,
  width,
  height,
}: ImageProps) => {
  return (
    <Image
      src={image}
      alt={imageDescription}
      width={width}
      height={height}
      className={className}
    />
  )
}