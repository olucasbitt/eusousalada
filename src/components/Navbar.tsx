import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Vídeos', href: '#videos' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Sobre', href: '#sobre' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#home"
          className="text-2xl font-display font-bold tracking-tighter"
        >
          SALADA<span className="text-brand-primary">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={link.href}
              className="text-sm font-medium opacity-70 hover:opacity-100 hover:text-brand-primary transition-all tracking-wide uppercase"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             href="#agenda"
             className="px-6 py-2 bg-brand-primary text-black font-bold rounded-full text-xs uppercase tracking-widest hover:bg-white transition-colors"
          >
            Ingressos
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-display font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#agenda"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-brand-primary text-black text-center font-bold rounded-xl"
              >
                INGRESSOS
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
