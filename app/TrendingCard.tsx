import Image from "next/image";

const images = [
    "/small/1.png",
    "/small/2.png",
    "/small/3.png",
    "/small/4.png",
    "/small/5.png",
    "/small/6.png",
    "/small/7.png",
    "/small/8.png",
]

export default function TrendingCard() {
  return (
    <div className="flex gap-4">
      {images.map((image, index) => (
        <Image src={image} alt="trending" width={900} height={100} className="hover:scale-150 transition-all duration-300"/>
      ))}
    </div>
  );
}
