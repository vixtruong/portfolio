import WorkCard from "./WorkCard";

const experiences = [
  {
    title: ".NET Backend Developer Intern",
    time: "Jul 2025 - Oct 2025",
    desc: "Developed and maintained backend systems for real-time web applications. Implemented key business logic and high-performance RESTful APIs. Built background services for scheduled tasks and data processing. Integrated Redis and SignalR/WebSocket for caching and live updates. Managed and tracked development tasks using Trello.",
    img: "/companies/sr_group.png",
    link: "https://saigonrivergroup.com",
  },
  {
    title: "IT Application Developer Intern",
    time: "Oct 2025 - Present",
    desc: "Maintained and enhanced .NET backend services following Clean Architecture. Supported mobile app development with React Native and Redux, integrating RESTful APIs and improving data flow. Assisted with deployment and server basics (IIS/Nginx, VPS, HTTPS/SSL). Collaborated in a team environment, following assigned tasks and delivery timelines.",
    img: "/companies/hanwha_life.png",
    link: "https://www.hanwhalife.com.vn",
  },
];

export default function WorkSection() {
  return (
    <section id="experience" className="py-16 md:px-[10%]">
      <h2 className="text-3xl font-bold text-center mb-10">Work Experience</h2>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {experiences.map((p, i) => {
          const isLastOdd =
            i === experiences.length - 1 && experiences.length % 2 !== 0;

          return (
            <div
              key={`${p.title}-${i}`}
              className={
                isLastOdd
                  ? "md:col-span-2 flex justify-center h-full"
                  : "h-full"
              }
            >
              <div
                className={
                  isLastOdd ? "md:w-1/2 w-full h-full" : "w-full h-full"
                }
              >
                <WorkCard {...p} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
