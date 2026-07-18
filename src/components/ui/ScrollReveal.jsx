import { useEffect, useRef } from "react";
import "../../styles/ui/scrollreveal.css";

function ScrollReveal({ children }) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="scroll-reveal">
      {children}
    </div>
  );
}

export default ScrollReveal;