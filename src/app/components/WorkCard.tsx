import Image from "next/image";

type WorkCardProps = {
  title: string;
  desc: string;
  img: string;
};

export default function WorkCard({ title, desc, img }: WorkCardProps) {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
      {/* <Image src={img} alt={title} className="mb-4 rounded-lg" /> */}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-300">{desc}</p>
      <button className="mt-4 text-sm text-purple-300 underline">
        Learn more
      </button>
    </div>
  );
}
