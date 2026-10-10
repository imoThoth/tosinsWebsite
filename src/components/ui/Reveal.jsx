import { useEffect, useRef, useState } from "react";

// Wrap anything in <Reveal> to play the drop-in animation the first time it
// scrolls into view. `as` picks the HTML tag: <Reveal as="article">.
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}