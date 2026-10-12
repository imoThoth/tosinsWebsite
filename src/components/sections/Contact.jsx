import CopyButton from "../ui/CopyButton";
import { contact } from "../../data";

export default function Contact() {
  return (
    <footer id="contact" className="bg-pink text-line border-t-[3px] border-line relative overflow-hidden">
      <div className="halftone absolute inset-0 opacity-15" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-7xl sm:text-8xl">{contact.heading}</h2>
        <p className="mt-3 text-xl font-semibold max-w-xl">{contact.pitch}</p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a href={`mailto:${contact.email}`} className="panel bg-paper px-4 py-3 font-file text-lg select-all break-all">
            {contact.email}
          </a>
          <CopyButton text={contact.email} label="Copy email" className="bg-yellow" />
        </div>
        <p className="mt-10 font-file text-sm">{contact.signOff}</p>
      </div>
    </footer>
  );
}