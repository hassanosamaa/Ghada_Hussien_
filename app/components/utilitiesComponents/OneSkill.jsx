"use client";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

const OneSkill = ({ name, img }) => {
  // Mouse reactive springs
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ scale: 1, opacity: 1 }}
      onMouseMove={onMouseMove}
      className="relative flex flex-col justify-center
        items-center gap-[5px]
        rounded-xl text-white
        w-full lg:w-[300px]
        border border-zinc-600
      
        transition duration-300
         h-[200px] p-[20px]
         py-[30px]
        group overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>

      {/* Skill content */}
      <div
        className="skill group-hover:scale-110 
          transition duration-300 cursor-pointer w-[70%] h-[90%] p-[20px] pb-0"
      >
        <img src={img} className="w-full h-full" />
      </div>
      <div
        className="font-bold  text-[15px]
          text-gray-300 tracking-wider p-[10px] text-center z-20"
      >
        {name}
      </div>
    </motion.div>
  );
};

export default OneSkill;
