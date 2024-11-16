import Image from "next/image";
import OriginalCard from "./OriginalCard";
import TrendingCard from "./TrendingCard";

export default function Home() {
  return (
    <div className="w-full">
      <section className="w-full">
        <Image src="/main/main.png" alt="main" width={0} height={0} sizes="100vw" className="w-full h-auto min-w-full" />
      </section>
      <section className="mt-8 overflow-x-scroll">
        <h2 className="text-white font-bold text-xl">NETFLIX ORIGINALS</h2>
        <section>
          <OriginalCard />
        </section>
      </section>
      <section className="mt-8 overflow-x-scroll">
      <h2 className="text-white font-bold text-xl">Trending now</h2>
        <TrendingCard />
      </section>
    </div>
  );
}
