import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import { Footer } from "./Footer";
import Lenis from "@studio-freight/lenis";
import { Link, useLocation } from "react-router-dom";

const solutionsData = [
  {
    title: "AI Products",
    desc: "A suite of AI products that automates analysis, Q&A, and real-time decision making through advanced neural networks.",
    image: "./AI_Product.jpg",
    link: "/solutions/ai-products",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Real-time Q&A",
    ],
  },
  {
    title: "Industrial AI & Automation",
    desc: "End-to-end industrial AI solutions for computer vision inspection, failure prediction, and seamless factory system integration.",
    image: "./IndustrialAI.jpg",
    link: "/solutions/industrial-ai-automation",
    features: ["Defect Detection", "Predictive Maintenance", "IoT Integration"],
  },
  {
    title: "Software & Firmware Development",
    desc: "Expert software engineering and embedded system development tailored for technology products and enterprise-grade solutions.",
    image: "./softwareAndFirmware.jpg",
    link: "/solutions/software-development",
    features: ["Custom Web/App", "Embedded C/C++", "Cloud Architecture"],
  },
];

const Solutions: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // 🔥 theo dõi route change

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // 🔥 FIX UX: mỗi lần vào trang Solutions → scroll về đầu
    requestAnimationFrame(() => {
      lenis.scrollTo(0, { immediate: true });
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, [location.pathname]); // 🔥 quan trọng

  return (
    <div className="bg-white min-h-screen font-['Montserrat'] overflow-x-hidden">
      <Header isScrolled={isScrolled} />

      {/* BANNER */}
      <section className="h-[80vh] flex items-center justify-center bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('./banner-solutions2.jpg')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute top-0 left-0 w-full h-2/5 bg-gradient-to-b from-white via-white/40 to-transparent z-[1]" />
          <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-white via-white/40 to-transparent z-[1]" />
        </div>

        <div className="text-center relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[44px] md:text-[72px] font-bold text-[#3c90fc] tracking-tighter uppercase"
          >
            Our Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-[18px] font-medium mt-4"
          >
            Empowering the future through AI-driven innovation.
          </motion.p>
        </div>
      </section>

      {/* SOLUTIONS LIST */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 flex flex-col gap-32 md:gap-48">
        {solutionsData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-5/12 space-y-8"
              >
                <h2 className="text-[36px] md:text-[52px] font-bold text-black leading-[1.1]">
                  {item.title}
                </h2>

                <p className="text-[17px] text-[#474363] leading-relaxed opacity-90">
                  {item.desc}
                </p>

                <div className="flex flex-col gap-y-3">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3c90fc]" />
                      <span className="text-sm font-bold text-gray-700">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 10 }}
                  className="group bg-[#3c90fc] text-white font-bold shadow-xl shadow-blue-100 hover:bg-[#2a78e4]"
                >
                  <Link
                    to={item.link}
                    className="flex items-center gap-3 px-8 py-4"
                  >
                    Read More
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </motion.button>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-7/12 relative h-[300px] md:h-[500px] rounded-[40px] overflow-hidden group bg-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 border border-white/20 group-hover:border-[#3c90fc]/40 rounded-[40px] transition-all duration-500 z-10" />
              </motion.div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Solutions;
