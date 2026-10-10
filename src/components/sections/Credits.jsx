import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { credits } from "../../data";

export default function Credits() {
  return (
    <section>
      <SectionHeading color="text-yellow">Credits</SectionHeading>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
        {credits.map((credit) => (
          <Reveal as="li" key={credit.what} className="panel bg-paper text-line p-5">
            <div className="font-file text-sm uppercase tracking-widest">{credit.from}</div>
            <div className="text-xl font-extrabold">{credit.what}</div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}