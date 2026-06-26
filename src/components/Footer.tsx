import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-serif font-bold tracking-tighter inline-block mb-6">
              <span className="text-white">Hock Hoe</span>
              <span className="text-accent ml-1">Engineering</span>
            </a>
            <p className="text-gray-400 font-light leading-relaxed mb-6 text-sm">
              {language === 'en' 
                ? 'Providing top-tier metal fabrication and structural engineering services in Klang, Malaysia since 1990. Precision in every weld.'
                : '自1990年以来，在马来西亚巴生提供顶级的金属制造和结构工程服务。每一次焊接都精益求精。'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white uppercase tracking-widest text-sm">
              {language === 'en' ? 'Quick Links' : '快速链接'}
            </h4>
            <ul className="space-y-3 font-light text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-accent transition-colors">{language === 'en' ? 'Home' : '首页'}</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">{language === 'en' ? 'About Us' : '关于我们'}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{language === 'en' ? 'Services' : '我们的服务'}</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">{language === 'en' ? 'Contact' : '联系我们'}</a></li>
              <li><a href="#quote" className="hover:text-accent transition-colors">{language === 'en' ? 'Get a Quote' : '获取报价'}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white uppercase tracking-widest text-sm">
              {language === 'en' ? 'Our Services' : '我们的服务'}
            </h4>
            <ul className="space-y-3 font-light text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-accent transition-colors">{language === 'en' ? 'Metal Fabrication' : '金属制造'}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{language === 'en' ? 'Light Stainless Steel Works' : '轻型不锈钢工程'}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{language === 'en' ? 'Welding & Assembly' : '焊接与组装'}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{language === 'en' ? 'Structural Engineering' : '结构工程'}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{language === 'en' ? 'Mild Steel Pipes' : '低碳钢管'}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{language === 'en' ? 'Machine Maintenance' : '机械维修与保养'}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white uppercase tracking-widest text-sm">
              {language === 'en' ? 'Contact Us' : '联系我们'}
            </h4>
            <ul className="space-y-3 font-light text-gray-400 text-sm">
              <li>012-3821795 (Ah Hock)</li>
              <li>012-3991795 (Anna)</li>
              <li><a href="mailto:hockhoenskce@gmail.com" className="hover:text-accent transition-colors">hockhoenskce@gmail.com</a></li>
              <li className="pt-2">Jalan Muar Off Jalan Kapar Batu 2,<br/>41400 Klang, Selangor Malaysia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hock Hoe Engineering. {language === 'en' ? 'All rights reserved.' : '版权所有。'}
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 hover:bg-accent flex items-center justify-center text-white transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
