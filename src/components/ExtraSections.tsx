import { motion } from 'motion/react';
import { Quote, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const TESTIMONIALS = [
  {
    name: "Tiago Silveira",
    role: "Fã de Passo Fundo",
    text: "Bah, guri! Fazia tempo que eu não dava uma risada tão sincera. O Salada conta as histórias que a gente vive todo dia, mas de um jeito que não tem como não rir.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Mariana Costa",
    role: "Fã de Dois Irmãos",
    text: "O show é impecável. Fui com toda a família e até minha avó se acabou de rir dos causos de rodeio. É humor raiz mesmo, sem frescura!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "João Pedro",
    role: "Fã de Porto Alegre",
    text: "Espetáculo nota 10. O Salada tem uma energia no palco que contagia. Vale cada centavo, é melhor que churrasco de domingo!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];

const FAQS = [
  {
    question: "Qual a classificação indicativa?",
    answer: "O show 'SÓ TENDEL' tem classificação de 14 anos. É um show pra família, mas com aquele tempero mais forte do Salada!"
  },
  {
    question: "Quanto tempo dura o espetáculo?",
    answer: "Aproximadamente 80 minutos de pura risada, podendo se estender um pouco mais se a plateia estiver animada nos causos."
  },
  {
    question: "Tem meia-entrada?",
    answer: "Com certeza! Estudantes, idosos, doadores de sangue e professores têm direito ao benefício conforme a legislação vigente de cada cidade."
  },
  {
    question: "O Salada tira foto depois do show?",
    answer: "Sempre! O Salada faz questão de atender todo mundo no final, tomar um mate e registrar o encontro com a gauchada."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Vozes do Pago</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter">O QUE DIZ A <span className="text-brand-primary">GAUCHADA</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-brand-primary/30 transition-all"
            >
              <Quote className="text-brand-primary mb-6 opacity-30 group-hover:opacity-100 transition-opacity" size={32} />
              <p className="text-white/70 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/30">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-4">RECADOS <span className="text-brand-primary">IMPORTANTES</span></h2>
          <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Tire suas dúvidas antes de encilharem o cavalo.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass border border-white/5 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-sm md:text-base pr-4">{faq.question}</span>
                <div className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <ChevronDown className="text-brand-primary" size={20} />
                </div>
              </button>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-6 pb-6 text-white/50 text-sm leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


