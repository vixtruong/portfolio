import Image from "next/image";
import Link from "next/link";

type WorkCardProps = {
  title: string;
  desc: string;
  img: string;
  link: string;
  time: string;
};

export default function WorkCard({
  title,
  desc,
  img,
  link,
  time,
}: WorkCardProps) {
  return (
    <div className="h-full bg-gradient-to-r from-blue-800 to-indigo-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col">
      {/* Logo wrapper: fixed height so cards match */}
      <div className="mb-4 h-20 relative flex items-center">
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </div>

      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-300/80 mb-2">{time}</p>

      {/* Make content area grow so footer stays aligned */}
      <p className="text-gray-200/90 line-clamp-3 flex-1">{desc}</p>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-blue-200 underline hover:text-blue-100 transition"
      >
        Company website
      </Link>
    </div>
  );
}
