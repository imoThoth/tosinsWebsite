import SectionHeading from "../ui/SectionHeading";
import Shelf from "../ui/Shelf";
import { shelves } from "../../data";

export default function Shelves() {
  // Each shelf starts its colour pattern where the previous one stopped.
  let offset = 0;

  return (
    <section>
      <SectionHeading color="text-lime" note="Every spine is something I've used in production.">
        The stack, shelved
      </SectionHeading>
      <div className="mt-10 flex flex-col gap-10">
        {shelves.map((shelf) => {
          const start = offset;
          offset += shelf.items.length;
          return <Shelf key={shelf.label} {...shelf} offset={start} />;
        })}
      </div>
    </section>
  );
}