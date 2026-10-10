import Redact from "../ui/Redact";
import Reveal from "../ui/Reveal";
import StatCard from "../ui/StatCard";
import { stats } from "../../data";

// The profile text stays here rather than in data.js because the <Redact> bars are woven through it.
export default function Profile() {
  return (
    <section className="grid gap-8 md:grid-cols-[1.5fr_1fr] items-start">
      <Reveal className="panel bg-paper text-line p-6 sm:p-8 font-file relative min-w-0">
        <span className="stamp text-string absolute -top-4 right-4 bg-paper text-sm rotate-3">Declassified</span>
        <h2 className="text-sm uppercase tracking-[.2em]">Subject profile</h2>
        <p className="mt-4 text-lg leading-relaxed">
          Backend-focused software engineer with 4+ years' experience building scalable Java/Spring microservices across{" "}
          <Redact>government</Redact>, <Redact>aviation</Redact>, <Redact>healthcare</Redact> and{" "}
          <Redact>financial services</Redact>. Strong background in Spring Boot, AWS, event-driven architecture and
          CI/CD automation. Known to operate in regulated, high-stakes environments, including the{" "}
          <Redact>UK Home Office</Redact>, <Redact>NHS-integrated healthcare platforms</Redact> and an{" "}
          <Redact>investment bank options trading desk</Redact>.
        </p>
        <p className="mt-4 text-sm">Hover or tap the black bars. The truth is under there.</p>
      </Reveal>

      <div className="grid grid-cols-2 gap-5">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}