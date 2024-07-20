import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

export default function Logos() {
  const Logo = [
    { alt: "TM", src: "/Client Logos/TM.png" },
    { alt: "BR", src: "/Client Logos/BR.png" },
    { alt: "AS", src: "/Client Logos/AS.png" },
    { alt: "LHI", src: "/Client Logos/lhi.png" },
    { alt: "ILSAS", src: "/Client Logos/ilsas.png" },
    { alt: "DRG", src: "/Client Logos/drg.png" },
    { alt: "JPA", src: "/Client Logos/jpa.png" },
  ];

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 24;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="relative left-4 flex gap-24"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...Logo, ...Logo].map((logo) => (
          <motion.img
            className="h-32 w-32 object-contain"
            src={logo.src}
            alt={logo.alt}
            width={158}
            height={450}
            key={logo.alt}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
