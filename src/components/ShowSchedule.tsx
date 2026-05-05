import { motion } from 'motion/react';
import { MapPin, Calendar, Ticket, ChevronRight } from 'lucide-react';
import { SHOWS } from '../constants';

export const ShowSchedule = () => {
  return (
    <section id="agenda" className="py-24 px-6 relative overflow-hidden bg-gradient-premium">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.3 }}
            className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-4"
          >
            TURNÊ <span className="text-brand-primary">2026</span>
          </motion.h2>
          <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold">
            Ingressos limitados. Onde o riso faz morada.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {SHOWS.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.1 }}
              transition={{ delay: index * 0.05 }}
              className={`group flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 glass-card hover:bg-white/[0.07] ${
                show.highlight ? 'border-brand-primary/30 bg-brand-primary/5' : ''
              }`}
            >
              <div className="flex flex-col items-center justify-center min-w-[80px] h-20 border-r border-white/10 pr-6 mr-2">
                <span className="text-2xl font-display font-bold text-brand-primary leading-none mb-1">
                  {show.date.split(' ')[0]}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                  {show.date.split(' ')[1]}
                </span>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-brand-primary transition-colors">
                    {show.city}, {show.state}
                  </h3>
                  {show.highlight && (
                    <div className="flex gap-2 mx-auto md:mx-0">
                      <span className="bg-brand-primary text-black text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">
                        Próximo Show
                      </span>
                      <span className="bg-white/10 text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">
                        Show Extra
                      </span>
                    </div>
                  )}
                  {show.soldOut && (
                    <span className="bg-red-500/20 text-red-500 border border-red-500/30 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full w-fit mx-auto md:mx-0">
                      Esgotado
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-white/40 text-xs font-medium">
                  <span className="flex items-center gap-1.5 italic">
                    <MapPin size={14} className="text-brand-primary" strokeWidth={3} /> {show.venue}
                  </span>
                  <span className="flex items-center gap-1.5 opacity-60">
                    <Calendar size={14} /> {show.time}
                  </span>
                </div>
              </div>

              <div className="w-full md:w-auto mt-4 md:mt-0">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={show.ticketUrl}
                  className={`flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                    show.soldOut 
                      ? 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5' 
                      : 'bg-white text-black hover:bg-brand-primary group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  }`}
                >
                  <Ticket size={16} />
                  {show.soldOut ? 'Esgotado' : 'Comprar Ingresso'}
                  {!show.soldOut && <ChevronRight size={14} />}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 text-white/30 text-[10px] uppercase tracking-widest font-bold"
        >
          Mais datas em breve. Siga nas redes para o anúncio oficial.
        </motion.p>
      </div>
    </section>
  );
};
