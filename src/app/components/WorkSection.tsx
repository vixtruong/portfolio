import WorkCard from "./WorkCard";

const projects = [
  {
    title: ".NET Backend Developer Intern",
    desc: "Developed and maintained backend systems for real-time web applications. Implemented key business logic and multiple high-performance RESTful APIs. Built background services for scheduled tasks and data processing. Integrated Redis and SignalR/WebSocket for caching and live updates. Managed and tracked development tasks using Trello.",
    img: "/companies/sr_group.png",
    link: "https://saigonrivergroup.com",
    time: "Jun 2025 - Present",
  },
];

export default function WorkSection() {
  return (
    <section id="experiences" className="py-16 px-[10%]">
      <h2 className="text-3xl font-bold text-center mb-10">Work Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => {
          const isLastOdd =
            i === projects.length - 1 && projects.length % 2 !== 0;
          return (
            <div
              key={i}
              className={isLastOdd ? "md:col-span-2 flex justify-center" : ""}
            >
              <div className={isLastOdd ? "md:w-1/2 w-full" : "w-full"}>
                <WorkCard {...p} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
