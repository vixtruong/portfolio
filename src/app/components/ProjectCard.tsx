import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  desc: string;
  img: string;
  link: string;
  time: string;
};

export default function ProjectCard({
  title,
  desc,
  img,
  link,
  time,
}: ProjectCardProps) {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={img}
          alt={title}
          width={100}
          height={100}
          className="rounded-lg object-contain"
        />
        <div>
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-400 mb-2">{time}</p>
        </div>
      </div>
      <p className="text-gray-300 line-clamp-3">{desc}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-blue-300 underline hover:text-blue-200 transition"
      >
        View project
      </Link>
    </div>
  );
}
