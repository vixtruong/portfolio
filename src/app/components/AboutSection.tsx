export default function AboutSection() {
  return (
    <div id="about" className="text-gray-300 space-y-6">
      <h2 className="text-3xl font-bold text-white">About Me</h2>

      <p>
        I am a{" "}
        <span className="text-blue-400 font-semibold">
          final-year Software Engineering student
        </span>{" "}
        with a strong foundation in building scalable and maintainable backend
        systems using <span className="text-blue-400">C# & ASP.NET Core</span>.
        My academic training and hands-on project experience have allowed me to
        work with{" "}
        <span className="text-blue-400">
          RESTful APIs, Entity Framework, and SQL databases
        </span>
        , while I am actively expanding my frontend skills with modern
        frameworks such as{" "}
        <span className="text-blue-400">React, Next.js, and Angular</span> to
        become a well-rounded{" "}
        <span className="text-blue-400 font-semibold">
          Full-Stack Developer
        </span>
        .
      </p>

      <p>
        Currently, I am interning as a{" "}
        <span className="text-blue-400 font-semibold">
          .NET Backend Developer
        </span>{" "}
        at SR GROUP, where I contribute to developing high-performance web
        applications. My responsibilities include designing and implementing
        RESTful APIs, building background services for scheduled tasks,
        integrating caching strategies with{" "}
        <span className="text-blue-400">Redis</span>, and adding real-time
        features using{" "}
        <span className="text-blue-400">SignalR & WebSocket</span>. I also
        collaborate closely with team members to optimize database queries,
        ensure data consistency, and improve application scalability.
      </p>

      <p>
        My long-term goal is to grow into a{" "}
        <span className="text-blue-400 font-semibold">Senior Developer</span>{" "}
        who can design and deliver{" "}
        <span className="text-blue-400">microservices-based architectures</span>{" "}
        and leverage{" "}
        <span className="text-blue-400">
          cloud computing platforms like Microsoft Azure
        </span>{" "}
        to build reliable, distributed, and impactful applications. I am
        passionate about continuous learning, keeping up with new technologies,
        and contributing to meaningful projects that create real value for
        businesses and users.
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
