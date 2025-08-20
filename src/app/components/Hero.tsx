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
      <h2 className="text-xl">
        Hello! I am{" "}
        <span className="text-blue-400 font-semibold">Truong Le Duc Vi</span>
      </h2>
      <h1 className="text-4xl font-bold my-2">
        Building <span className="text-blue-400">frontend</span> and{" "}
        <span className="text-blue-400">backend</span> with passion
      </h1>

      <p className="max-w-2xl text-gray-300">
        I am currently a{" "}
        <span className="text-blue-400">.NET Backend Developer Intern</span> at
        SR GROUP and a final-year Software Engineering student aspiring to
        become a Full-Stack Developer. I have strong skills in C#, ASP.NET Core,
        RESTful APIs, and SQL databases, alongside a growing interest in
        front-end technologies. Passionate about building scalable and
        maintainable web applications, eager to apply and expand my skills in a
        dynamic environment. Goal-oriented towards becoming a Senior Developer
        by contributing to meaningful projects and mastering microservices and
        cloud computing.
      </p>
    </section>
  );
}
