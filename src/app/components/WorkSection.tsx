import WorkCard from "./WorkCard";

const projects = [
  {
    title: "CIB on the Mobile",
    desc: "Banking experience redesign",
    img: "/p1.png",
  },
  { title: "CIB on the Mobile", desc: "Mobile banking flow", img: "/p2.png" },
  { title: "CIB on the Mobile", desc: "App UX optimization", img: "/p3.png" },
  { title: "CIB on the Mobile", desc: "UI revamp project", img: "/p4.png" },
];

export default function WorkSection() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Work Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <WorkCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
