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
    <div className="h-full bg-gradient-to-r from-blue-800 to-indigo-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        {/* Fixed logo box so every card has same header height */}
        <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-white/10">
          <Image
            src={img}
            alt={title}
            fill
            className="object-contain p-1"
            sizes="64px"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-semibold mb-1 truncate">{title}</h3>
          <p className="text-sm text-gray-300/80">{time}</p>
        </div>
      </div>

      {/* Make body stretch so footer aligns */}
      <p className="text-gray-200/90 line-clamp-3 flex-1">{desc}</p>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-blue-200 underline hover:text-blue-100 transition"
      >
        View project
      </Link>
    </div>
  );
}
