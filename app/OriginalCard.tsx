import Image from "next/image";

const images = [
    "/large/1.png",
    "/large/2.png",
    "/large/3.png",
    "/large/4.png",
    "/large/5.png",
    "/large/6.png",
    "/large/7.png",
    "/large/8.png",
]

export default function OriginalCard() {
  return (
    <div className="flex gap-4 w-full">
      {images.map((image, index) => (
        <Image src={image} alt="original" width={1900} height={100} className="hover:scale-150 transition-all duration-300"/>
      ))}
    </div>
  );
}
