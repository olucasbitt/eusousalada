import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, PlayCircle } from 'lucide-react';
import { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      aria-label="Apresentação do show Só Tendel"
    >
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505] z-10" />

        <img 
		  src="/hero.jpeg" 
		  alt="Salada se apresentando no palco com plateia"
		  className="w-full h-full object-cover object-[90%_center] md:object-center"
		/>
      </motion.div>

      {/* Conteúdo */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full border border-brand-primary/30 text-brand-primary bg-brand-primary/5 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 backdrop-blur-md">
            O TENDEL TÁ CONFIRMADO
          </span>

          {/* Headline */}
          <h1 className="flex flex-col items-center justify-center text-6xl md:text-8xl lg:text-[9rem] font-display font-black tracking-tighter leading-[0.85] mb-6 uppercase">
            <span className="text-white opacity-90 drop-shadow-2xl">
              SÓ
            </span>

            <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-primary via-brand-secondary to-amber-900 italic text-glow relative">
              TENDEL
              <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-40" />
            </span>
          </h1>

          {/* Descrição */}
          <p className="max-w-xl mx-auto text-sm md:text-lg text-white/60 mb-8 leading-relaxed">
            O Salada chega com os dois pés na porta.  
            Se prepara, porque ao vivo é outra história.
          </p>

          {/* CTA */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#agenda"
              className="w-full md:w-auto px-10 py-5 bg-brand-primary text-black font-bold rounded-full text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all"
            >
              Ver próximos shows
            </a>

            <button
              className="flex items-center gap-3 px-6 py-4 text-white/80 hover:text-white transition-colors"
              aria-label="Assistir trailer do show"
            >
              <PlayCircle size={22} className="text-brand-primary" />
              <span className="text-sm font-bold uppercase tracking-widest">
                Ver trailer
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
          Scroll
        </span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
};