import Image from "next/image";
import Hello from "@/components/tools/Hello";

export default function Home() {
  return (
    <div className="mt-20">
      <Hello />
      <h1>Next.js Image Optimization</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        pariatur minima animi. Omnis commodi sapiente exercitationem iste quos
        dolor aspernatur consequuntur, laudantium culpa deserunt quo fugit non
        est eveniet eos!
      </h2>

      <div className="mt-4 relative w-[800px] h-[400px] border-2 border-teal-300 overflow-hidden">
        <Image
          placeholder="blur"
          layout="fill"
          priority={false}
          quality={75}
          src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg"
          blurDataURL="data:image/webp;base64,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"
          alt="Will devin replace Programmers?"
          className="object-cover"
        />
      </div>
    </div>
  );
}
