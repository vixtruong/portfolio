export default function AboutSection() {
  return (
    <div id="about" className="text-gray-300 space-y-6">
      <h2 className="text-3xl font-bold text-white">About Me</h2>

      <p>
        I’m a{" "}
        <span className="text-blue-400 font-semibold">
          final-year Software Engineering student
        </span>{" "}
        with a strong focus on{" "}
        <span className="text-blue-400">.NET backend development</span>. I enjoy
        building scalable and maintainable systems using{" "}
        <span className="text-blue-400">C# / ASP.NET Core</span>, applying{" "}
        <span className="text-blue-400">Clean Architecture</span>, and working
        with <span className="text-blue-400">RESTful APIs</span> and{" "}
        <span className="text-blue-400">SQL databases</span>.
      </p>

      <p>
        I previously interned at{" "}
        <span className="text-blue-400 font-semibold">SR GROUP</span> as a{" "}
        <span className="text-blue-400 font-semibold">
          .NET Backend Developer Intern
        </span>
        , where I implemented high-performance APIs, built{" "}
        <span className="text-blue-400">background services</span> for scheduled
        processing, integrated <span className="text-blue-400">Redis</span> for
        caching/messaging, and delivered real-time updates using{" "}
        <span className="text-blue-400">SignalR & WebSocket</span>.
      </p>

      <p>
        Currently, I’m interning at{" "}
        <span className="text-blue-400 font-semibold">
          Hanwha Life Viet Nam
        </span>{" "}
        as an{" "}
        <span className="text-blue-400 font-semibold">
          IT Application Developer Intern
        </span>
        , maintaining .NET services with Clean Architecture and supporting
        mobile development using{" "}
        <span className="text-blue-400">React Native</span> +{" "}
        <span className="text-blue-400">Redux</span>. I’m also learning more
        about deployment basics such as{" "}
        <span className="text-blue-400">IIS, Nginx, VPS, and HTTPS/SSL</span>.
      </p>

      <a
        href="/cv/CV_TruongLeDucVi.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl shadow-md transition"
      >
        My CV
      </a>
    </div>
  );
}
