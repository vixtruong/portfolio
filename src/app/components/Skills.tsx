import Image from "next/image";

type Skill = { name: string; icon?: string };

const languages: Skill[] = [
  {
    name: "C#",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "Java",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
];

const frontendSkills: Skill[] = [
  {
    name: "ReactJS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Angular",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
  },
  { name: "WinForms" },
  {
    name: "Redux / Redux Toolkit",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  { name: "Axios" },
  { name: "React Router" },
  {
    name: "HTML5",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
];

const backendSkills: Skill[] = [
  {
    name: "ASP.NET Core MVC",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg",
  },
  {
    name: "ASP.NET Core Web API",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg",
  },
  { name: "RESTful API" },
  { name: "Entity Framework Core" },
  { name: "Dapper" },
  { name: "LINQ" },
  { name: "ADO.NET" },
  { name: "EF Migrations" },
  { name: "Clean Architecture" },
  { name: "Microservices" },
  { name: "JWT" },
  { name: "Ocelot (API Gateway)" },
  { name: "Dependency Injection (DI)" },
  { name: "Background Services / Jobs" },
  { name: "WebSocket" },
  { name: "SignalR" },
  {
    name: "Redis",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
  },
];

const dbSkills: Skill[] = [
  {
    name: "SQL Server",
    icon: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
  },
  {
    name: "MySQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
  },
];

const cloudDevOps: Skill[] = [
  {
    name: "Microsoft Azure",
    icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
  },
  { name: "Azure App Services" },
  { name: "Azure SQL Database" },
  { name: "Azure Blob Storage" },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
  { name: "IIS" },
  {
    name: "Nginx",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
  },
];

const tools: Skill[] = [
  { name: "Visual Studio" },
  {
    name: "VS Code",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
  },
  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "Git",
    icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    name: "GitHub",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  {
    name: "GitLab",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg",
  },
];

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/90 hover:bg-blue-500 rounded-full text-white text-sm transition">
      {skill.icon ? (
        <Image
          src={skill.icon}
          alt={skill.name}
          width={16}
          height={16}
          className="object-contain"
        />
      ) : (
        <span className="w-2 h-2 rounded-full bg-white/80" />
      )}
      {skill.name}
    </span>
  );
}

function SkillGroup({ title, items }: { title: string; items: Skill[] }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <SkillPill key={s.name} skill={s} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <div id="skills" className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Skills</h2>

      <div className="text-gray-300 space-y-5">
        <SkillGroup title="Programming Languages" items={languages} />
        <SkillGroup title="Frontend" items={frontendSkills} />
        <SkillGroup title="Backend" items={backendSkills} />
        <SkillGroup title="Databases" items={dbSkills} />
        <SkillGroup title="Cloud & DevOps" items={cloudDevOps} />
        <SkillGroup title="Tools & Platforms" items={tools} />
      </div>
    </div>
  );
}
