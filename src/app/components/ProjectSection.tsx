import ProjectCard from "@/app/components/ProjectCard";

const projects = [
  {
    title: "TechGear (E-commerce Platform)",
    desc: "Cross-platform e-commerce app for computer components built with Flutter (frontend) and ASP.NET Core Web API (backend) using microservices. Features: login, product browsing, cart, checkout, order tracking, admin management, loyalty points, and real-time chat via WebSocket.",
    img: "/projects/techgear.png",
    link: "https://vixtruong.github.io/tech-gear-web",
    time: "03/2025 – 06/2025",
  },
  {
    title: "Restaurant Order System",
    desc: "Real-time platform for managing orders between customers, waiters, and kitchen staff. Features: role-based access, live order updates, table-based ordering, kitchen tracking, and billing with microservices architecture.",
    img: "/projects/restaurant.png",
    link: "https://github.com/vixtruong/restaurant-frontend",
    time: "03/2025 – 05/2025",
  },
  {
    title: "DentalCare (Clinic Management System)",
    desc: "Web-based platform to manage appointments, patient records, treatment history, and billing. Features: online booking, reminders, smart reports, MoMo payment integration, role-based access for staff and admin.",
    img: "/projects/dentalcare.png",
    link: "https://github.com/vixtruong/dentalcare-netcore-mvc",
    time: "09/2024 – 12/2024",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-16 md:px-[10%]">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
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
                <ProjectCard {...p} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
