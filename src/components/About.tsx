import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="sobre" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary opacity-10 blur-[100px]" />
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] glass border-white/5">
            <img 
              src="/salada.jpeg" 
              alt="O comediante em close" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          
          
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 block">O Tendel tá confirmado</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
            SALADA NO PALCO,<br />
            <span className="italic">ALEGRIA</span> NO CAMPO.
          </h2>
          
          <div className="space-y-6 text-white/60 leading-relaxed text-sm md:text-base">
            <p>
              O SALADA não vem pra brincadeira. Com o show "SÓ TENDEL", ele traz pra cidade o tempero que só quem é do Sul entende: causos de rodeio, perrengues de baile e a vida como ela é.
            </p>
            <p>
              De Dois Irmãos pro resto do pago, o Salada reuniu as melhores fofocas e histórias que a gente jura que é verdade (ou quase). É stand-up raiz, pra celebrar o que a gente tem de mais engraçado: a nossa própria cultura.
            </p>
            <p>
              Cuidado: risco alto de sair com o maxilar doendo. Garantimos que é mais barato que um quilo de costela e rende muito mais história!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
