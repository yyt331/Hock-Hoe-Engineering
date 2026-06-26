import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { language } = useLanguage();

  const features = language === 'en' ? [
    "Over 30 years of industry experience",
    "Professional and skilled team",
    "High-quality materials and craftsmanship",
    "Extensive portfolio of past projects"
  ] : [
    "超过30年的行业经验",
    "专业且技术精湛的团队",
    "优质的材料和精湛的工艺",
    "丰富的过往项目经验"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
              <img
                src="/HockHoeImage.jpg"
                alt="Metal fabrication workshop"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-accent z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-primary z-0"></div>
            
            {/* Experience Badge */}
            <div className="absolute bottom-10 -right-10 bg-primary text-white p-8 shadow-xl z-20 hidden md:block">
              <div className="text-5xl font-serif font-bold text-accent mb-2">30+</div>
              <div className="text-sm uppercase tracking-widest font-medium">
                {language === 'en' ? <>Years of<br/>Experience</> : <>多年的<br/>丰富经验</>}
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              {language === 'en' ? 'About Our Company' : '关于我们公司'}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              {language === 'en' ? (
                <>Building the Future with <span className="text-accent">Steel</span></>
              ) : (
                <>用<span className="text-accent">钢铁</span>筑造未来</>
              )}
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
              {language === 'en' 
                ? 'Established in 1990, Hock Hoe Engineering has been a cornerstone of the steel engineering industry in Klang, Selangor. For over three decades, we have dedicated ourselves to providing top-tier metal fabrication and structural engineering services.'
                : '福和工程（Hock Hoe Engineering）成立于1990年，一直是雪兰莪巴生钢铁工程行业的基石。三十多年来，我们致力于提供顶级的金属制造和结构工程服务。'}
            </p>
            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
              {language === 'en'
                ? 'Our professional team combines traditional craftsmanship with modern techniques to deliver projects that stand the test of time. From customized solutions to large-scale structural fabrication, we bring your vision to reality with precision and reliability.'
                : '我们的专业团队将传统工艺与现代技术相结合，交付经得起时间考验的项目。从定制解决方案到大型结构制造，我们以精准和可靠的方式将您的愿景变为现实。'}
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all"
            >
              {language === 'en' ? 'Discuss Your Project' : '洽谈您的项目'}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
