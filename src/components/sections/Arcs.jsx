import ArcCard from "../ui/ArcCard";
import SectionHeading from "../ui/SectionHeading";
import { arcs } from "../../data";

export default function Arcs() {
  return (
    <section id="arcs">
      <SectionHeading color="text-pink" note="Follow the red string. It all connects.">
        The story so far
      </SectionHeading>
      <div className="relative mt-10 pl-12 flex flex-col gap-12">
        <div className="string" aria-hidden="true" />
        {arcs.map((arc) => (
          <ArcCard key={arc.arc} arc={arc} />
        ))}
      </div>
    </section>
  );
}