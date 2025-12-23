import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 mt-10">
      <Image
        src="/avatar.png"
        alt="Truong Le Duc Vi"
        width={256}
        height={256}
        quality={90}
        priority
        className="rounded-full mb-6"
      />

      <h2 className="text-xl text-gray-200">
        Hi, I’m{" "}
        <span className="text-blue-400 font-semibold">Truong Le Duc Vi</span>
      </h2>

      <h1 className="text-4xl md:text-5xl font-bold my-2 text-white leading-tight">
        Fresher <span className="text-blue-400">Full-Stack</span> Developer
        <br />
        <span className="text-gray-200 text-2xl md:text-3xl font-semibold">
          focused on <span className="text-blue-400">.NET Backend</span>
        </span>
      </h1>

      <p className="max-w-2xl text-gray-300 mt-4 leading-relaxed">
        I build scalable, maintainable backend systems with{" "}
        <span className="text-blue-300 font-medium">C# / ASP.NET Core</span>,{" "}
        <span className="text-blue-300 font-medium">RESTful APIs</span>, and{" "}
        <span className="text-blue-300 font-medium">Clean Architecture</span>. I
        also work with{" "}
        <span className="text-blue-300 font-medium">
          microservices (Ocelot), background services, Redis, and
          SignalR/WebSocket
        </span>{" "}
        for real-time features—plus enough frontend (Angular/React/Next.js,
        Flutter) to collaborate end-to-end.
      </p>
    </section>
  );
}
