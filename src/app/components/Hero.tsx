import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={256}
        height={256}
        quality={90}
        className="rounded-full mb-6"
      />
      <h2 className="text-xl text-gray-200">
        Hello! I am{" "}
        <span className="text-blue-400 font-semibold">Truong Le Duc Vi</span>
      </h2>
      <h1 className="text-4xl font-bold my-2 text-white">
        Building <span className="text-blue-400">frontend</span> &{" "}
        <span className="text-blue-400">backend</span> with passion
      </h1>
      <p className="max-w-2xl text-gray-300 mt-4">
        A motivated developer crafting scalable web applications and eager to
        grow as a Full-Stack Engineer.
      </p>
    </section>
  );
}
