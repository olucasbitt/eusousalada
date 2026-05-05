import { motion } from 'motion/react';
import { Send, Instagram, Youtube, Music, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const CTA = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-primary opacity-[0.03] blur-[150px] rotate-12 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-24 text-center relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50" />
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-6xl font-display font-bold tracking-tighter mb-8 leading-tight md:leading-none">
            NÃO SEJA O ÚNICO <br />
            PARA <span className="text-brand-primary italic">FORA DO PAGO.</span>
          </h2>
          <p className="text-xs md:text-lg text-white/50 mb-10 max-w-lg mx-auto">
            Os ingressos esgotam rápido. Garanta agora sua cadeira no show mais gaúcho do planeta com 10% de desconto no PIX.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
                whileHover={{ scale: 1.05, shadow: "0 0 30px rgba(245,158,11,0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="#agenda"
                className="w-full md:w-auto px-12 py-5 bg-white text-black font-black rounded-full text-sm uppercase tracking-widest hover:bg-brand-primary transition-all"
            >
              Comprar Agora
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const VenueCTA = () => {
  return (
    <section id="contratar" className="py-24 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-center md:text-left">
          <span className="text-brand-secondary font-black uppercase tracking-widest text-[10px] md:text-xs mb-4 block">Para Produtores e Casas de Show</span>
          <h2 className="text-3xl md:text-6xl font-display font-bold tracking-tighter mb-6 leading-tight md:leading-[0.9]">
            LEVE O <span className="italic">TENDEL</span> PARA SUA CIDADE.
          </h2>
          <p className="text-black/60 text-sm md:text-lg leading-relaxed">
            Interessado em contratar o show "SÓ TENDEL"? Entre em contato com a nossa equipe de produção para orçamentos e disponibilidade de agenda.
          </p>
        </div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`${SOCIAL_LINKS.whatsapp}?text=Olá,%20gostaria%20de%20contratar%20o%20show%20Salada%20Só%20Tendel`}
          className="flex items-center justify-center gap-4 w-full md:w-auto px-12 py-6 bg-black text-white font-bold rounded-full text-xs md:text-sm uppercase tracking-widest hover:bg-brand-secondary transition-all"
        >
          <Send size={18} />
          Contratar Show
        </motion.a>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-12">
        <div className="text-center md:text-left">
          <p className="text-2xl font-display font-bold tracking-tighter mb-2">
            SALADA<span className="text-brand-primary">.</span>
          </p>
          <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">
            © 2026 SALADA TENDEL ENTERTAINMENT.<br className="md:hidden" /> TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>

        <div className="flex items-center justify-center gap-8">
          <motion.a 
            whileHover={{ y: -3, textShadow: "0 0 10px rgba(245,158,11,0.5)" }}
            href={SOCIAL_LINKS.instagram} 
            className="group flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-brand-primary transition-colors">
              <Instagram size={20} className="text-white/60 group-hover:text-brand-primary" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/30 group-hover:text-white">Instagram</span>
          </motion.a>
          
          <motion.a 
            whileHover={{ y: -3, textShadow: "0 0 10px rgba(245,158,11,0.5)" }}
            href={SOCIAL_LINKS.youtube} 
            className="group flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-brand-primary transition-colors">
              <Youtube size={20} className="text-white/60 group-hover:text-brand-primary" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/30 group-hover:text-white">Youtube</span>
          </motion.a>

          <motion.a 
            whileHover={{ y: -3, textShadow: "0 0 10px rgba(245,158,11,0.5)" }}
            href={SOCIAL_LINKS.tiktok} 
            className="group flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-brand-primary transition-colors">
              <Music size={20} className="text-white/60 group-hover:text-brand-primary" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/30 group-hover:text-white">TikTok</span>
          </motion.a>
        </div>

        
      </div>
    </footer>
  );
};

export const WhatsAppButton = () => {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(34,197,94,0.3)] group overflow-hidden"
    >
       <motion.div 
         className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500"
       />
       <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
       </svg>
    </motion.a>
  );
};
