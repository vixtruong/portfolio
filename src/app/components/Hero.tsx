import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      {/* <Image
        src="/avatar.png"
        alt="avatar"
        className="w-32 h-32 rounded-full mb-6"
      /> */}
      <h2 className="text-xl">
        Hello! I am <span className="text-indigo-400">Truong Le Duc Vi</span>
      </h2>
      <h1 className="text-4xl font-bold my-2">
        Judges a book by its <span className="text-purple-400">cover...</span>
      </h1>
      <p className="max-w-xl text-gray-300">
        I{"'"}m a Software Engineer at{" "}
        <a href="https://facebook.com" className="text-blue-400">
          Facebook
        </a>
        . I design delightful digital products balancing user needs and business
        goals.
      </p>
    </section>
  );
}
