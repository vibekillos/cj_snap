import { useEffect, useRef } from "react";
import gsap from "gsap";

function Typewriter({ text,className,cursor_color,d_cursor_color, speed = 0.08 }) {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;

    if (!element) return;

    const object = { progress: 0 };

    const ctx = gsap.context(() => {
      gsap.to(object, {
        progress: text.length,
        duration: text.length * speed,
        ease: "none",
        onUpdate: () => {
          const characters = Math.floor(object.progress);

          element.textContent = text.slice(0, characters);
        },
      });

      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    return () => ctx.revert();
  }, [text, speed]);

  return (
  <span>
    <span ref={textRef} className={className}></span>

    <span
    ref={cursorRef}
    className={`
    ml-2
    inline-block
    h-[3px]
    w-3
    translate-y-1
    rounded-full
    align-middle
    bg-${cursor_color}
    dark:bg-surface-white
  `}
/>
  </span>
);
}

export default Typewriter;