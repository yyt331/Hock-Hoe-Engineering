import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Steel engineering welding"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm md:text-base mb-4 block">
            {language === 'en' ? 'Established in 1990' : '成立于1990年'}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-[1.1] mb-6">
            {language === 'en' ? (
              <>Your Trusted Partner in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-500">Metal Fabrication</span></>
            ) : (
              <>您值得信赖的<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-500">金属制造伙伴</span></>
            )}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
            {language === 'en' 
              ? 'Over 30 years of excellence in customised metal fabrication, structural engineering, and specialized metalworks in Klang, Malaysia.'
              : '超过30年的卓越经验，在马来西亚巴生提供定制金属制造、结构工程和专业金属加工服务。'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-accent hover:bg-accent/90 transition-all group"
            >
              {language === 'en' ? 'Our Services' : '我们的服务'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/30 hover:bg-white/10 transition-all"
            >
              {language === 'en' ? 'Contact Us' : '联系我们'}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest mb-2">
          {language === 'en' ? 'Scroll' : '向下滚动'}
        </span>
        <div className="w-[1px] h-16 bg-white/20 overflow-hidden">
          <motion.div
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
