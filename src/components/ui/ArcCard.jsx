import Reveal from "./Reveal";

// One job on the red string. Takes a single entry from `arcs` in data.js.
export default function ArcCard({ arc }) {
  return (
    <Reveal as="article" className="relative">
      <span className="pin" aria-hidden="true" />
      <div className={`panel ${arc.color} text-line p-6 sm:p-8 min-w-0`}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <span className="font-display text-4xl">{arc.arc}</span>
          <span className="font-file text-sm">{arc.when}</span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight mt-1">{arc.title}</h3>
        <p className="font-semibold">{arc.sub}</p>
        <p className="mt-4 max-w-3xl">{arc.intro}</p>

        {arc.groups.map((group, i) => (
          <div key={i}>
            {group.name && (
              <h4 className="mt-5 font-file uppercase tracking-widest text-sm border-b-2 border-line inline-block">
                {group.name}
              </h4>
            )}
            <ul className="mt-3 flex flex-col gap-2 max-w-3xl">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-display" aria-hidden="true">➤</span>
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-5 flex flex-wrap gap-2">
          {arc.tags.map((tag) => (
            <span key={tag} className="bg-line text-paper text-sm font-semibold px-2.5 py-1">{tag}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}