import Image from "next/image";
import Link from "next/link";

type WorkCardProps = {
  title: string;
  desc: string;
  img: string;
  link: string;
  time: string; // thêm thời gian
};

export default function WorkCard({
  title,
  desc,
  img,
  link,
  time,
}: WorkCardProps) {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
      <div className="mb-4">
        <Image
          src={img}
          alt={title}
          width={100}
          height={100}
          className="rounded-lg object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-400 mb-2">{time}</p>
      <p className="text-gray-300 line-clamp-3">{desc}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-blue-300 underline hover:text-blue-200 transition"
      >
        Company website
      </Link>
    </div>
  );
}
