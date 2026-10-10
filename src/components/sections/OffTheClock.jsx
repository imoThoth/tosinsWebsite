import Equaliser from "../ui/Equaliser";
import InterestCard from "../ui/InterestCard";
import SectionHeading from "../ui/SectionHeading";
import { interests } from "../../data";

// Each card's artwork is passed in as children, so adding a fifth interest
// is one more <InterestCard> here plus one more entry in data.js.
export default function OffTheClock() {
  return (
    <section>
      <SectionHeading color="text-cyan" note="Draft note: the dashed slots are waiting for your real picks.">
        Off the clock
      </SectionHeading>

      <div className="mt-10 grid gap-7 sm:grid-cols-2">
        <InterestCard {...interests.anime} color="bg-pink text-line" halftone>
          <div className="font-display text-7xl float inline-block" aria-hidden="true">ドン!</div>
        </InterestCard>

        <InterestCard {...interests.conspiracy} color="bg-paper text-line" taglineClass="font-file">
          <svg viewBox="0 0 120 100" className="w-28" aria-hidden="true">
            <polygon points="60,6 114,94 6,94" fill="var(--yellow)" stroke="var(--line)" strokeWidth="5" strokeLinejoin="round" />
            <g className="eye">
              <ellipse cx="60" cy="62" rx="22" ry="12" fill="var(--paper)" stroke="var(--line)" strokeWidth="4" />
              <circle cx="60" cy="62" r="7" fill="var(--line)" />
            </g>
          </svg>
        </InterestCard>

        <InterestCard {...interests.books} color="bg-lime text-line">
          <div className="flex items-end gap-1 h-24" aria-hidden="true">
            <div className="float w-6 h-20 bg-violet border-[3px] border-line" />
            <div className="w-5 h-24 bg-pink border-[3px] border-line" />
            <div className="float w-7 h-16 bg-cyan border-[3px] border-line" />
            <div className="w-5 h-20 bg-yellow border-[3px] border-line -rotate-12 origin-bottom-left" />
          </div>
        </InterestCard>

        <InterestCard {...interests.music} color="bg-violet text-paper" slotClass="bg-paper text-line">
          <div className="flex items-center gap-5">
            <div className="vinyl w-24 h-24 shrink-0" aria-hidden="true" />
            <Equaliser />
          </div>
        </InterestCard>
      </div>
    </section>
  );
}