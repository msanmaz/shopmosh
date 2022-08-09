import PlaceholderImage from "./PlaceholderImage"
import clsx from "clsx"
import Image from "next/image"
import React from "react"


const Thumbnail = ({
  thumbnail,
  images,
  size = "small",
}) => {
  const initialImage = thumbnail || images
  return (
    <div
      className={clsx("relative aspect-[29/34]", {
        "w-[180px]": size === "small",
        "w-[290px]": size === "medium",
        "w-[440px]": size === "large",
        "w-full": size === "full",
      })}
    >
      <ImageOrPlaceholder images={initialImage} size={size} />
    </div>
  )
}

const ImageOrPlaceholder = ({
  images,
  size,
})  => {
  console.log(images)
  return images ? (
    <Image
      src={images}
      alt="Thumbnail"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      className="absolute inset-0"
      draggable={false}
    />
  ) : (
    <div className="w-full h-full absolute inset-0 bg-gray-100 flex items-center justify-center">
      <PlaceholderImage size={size === "small" ? 16 : 24} />
    </div>
  )
}

export default Thumbnail
