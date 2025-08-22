const frontendSkills = [
  "HTML",
  "CSS",
  "Angular",
  "ReactJS",
  "Next.js",
  "Flutter",
  "WinForms",
  "Bootstrap",
  "Tailwind CSS",
];

const backendSkills = [
  "ASP.NET Core MVC",
  "ASP.NET Core Web API",
  "RESTful API",
  "Entity Framework",
  "Dapper",
  "LINQ",
  "Microservices",
  "JWT",
  "Ocelot",
  "Dependency Injection (DI)",
  "WebSocket",
  "SignalR",
  "Redis",
];

const devOpsSkills = [
  "Microsoft Azure",
  "Azure App Services",
  "Azure SQL Database",
  "Azure Blob Storage",
];

const dbSkills = ["SQL Server", "MySQL", "PostgreSQL"];

const tools = [
  "Visual Studio",
  "Visual Studio Code",
  "Postman",
  "Git",
  "GitHub",
  "GitLab",
];

export default function SkillsSection() {
  return (
    <div id="skills" className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Skills</h2>

      <div className="text-gray-300 space-y-4">
        {/* Programming Languages */}
        <div>
          <h4 className="text-white font-semibold mb-2">
            Programming Languages
          </h4>
          <div className="flex flex-wrap gap-2">
            {["C#", "JavaScript"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-500 rounded-full text-white text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div>
          <h4 className="text-white font-semibold mb-2">Frontend</h4>
          <div className="flex flex-wrap gap-2">
            {frontendSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-500 rounded-full text-white text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h4 className="text-white font-semibold mb-2">Backend</h4>
          <div className="flex flex-wrap gap-2">
            {backendSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-500 rounded-full text-white text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div>
          <h4 className="text-white font-semibold mb-2">Databases</h4>
          <div className="flex flex-wrap gap-2">
            {dbSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-500 rounded-full text-white text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div>
          <h4 className="text-white font-semibold mb-2">Cloud & DevOps</h4>
          <div className="flex flex-wrap gap-2">
            {devOpsSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-500 rounded-full text-white text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h4 className="text-white font-semibold mb-2">Tools & Platforms</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-500 rounded-full text-white text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
