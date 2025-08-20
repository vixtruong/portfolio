import Image from "next/image";
import Link from "next/link";

type WorkCardProps = {
  title: string;
  desc: string;
  img: string;
  link: string;
  time: string; // thêm thời gian
};

export default function ProjectCard({
  title,
  desc,
  img,
  link,
  time,
}: WorkCardProps) {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
      <div className="mb-4 flex items-center gap-4">
        <Image
          src={img}
          alt={title}
          width={64}
          height={64}
          className="rounded-lg object-contain"
        />
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-400">{time}</p>
        </div>
      </div>

      <p className="text-gray-300 line-clamp-3">{desc}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-purple-300 underline hover:text-purple-200 transition"
      >
        View project
      </Link>
    </div>
  );
}
