import { motion } from 'motion/react';
import { Hammer, ShieldCheck, Factory, Wrench, Cylinder, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { language } = useLanguage();

  const services = [
    {
      title: language === 'en' ? "Customised Metal Fabrication" : "定制金属制造",
      description: language === 'en' 
        ? "Tailor-made metal solutions designed to meet your exact specifications and project requirements."
        : "专为满足您的确切规格和项目需求而设计的定制金属解决方案。",
      icon: <Hammer className="w-10 h-10 text-accent" />
    },
    {
      title: language === 'en' ? "Light Stainless Steel Works" : "轻型不锈钢工程",
      description: language === 'en'
        ? "Selected stainless steel fabrication and minor repair services tailored for specific project needs."
        : "根据特定项目需求量身定制的精选不锈钢制造和小型维修服务。",
      icon: <ShieldCheck className="w-10 h-10 text-accent" />
    },
    {
      title: language === 'en' ? "Welding & Assembly Services" : "焊接与组装服务",
      description: language === 'en'
        ? "Expert welding and precise assembly ensuring structural integrity and flawless finish."
        : "专业的焊接和精确的组装，确保结构完整性和完美的表面处理。",
      icon: <Wrench className="w-10 h-10 text-accent" />
    },
    {
      title: language === 'en' ? "Structural & Engineering Fabrication" : "结构与工程制造",
      description: language === 'en'
        ? "Heavy-duty structural fabrication for buildings, frameworks, and large-scale engineering projects."
        : "用于建筑、框架和大型工程项目的重型结构制造。",
      icon: <Factory className="w-10 h-10 text-accent" />
    },
    {
      title: language === 'en' ? "Mild Steel Pipes & Pipe Specials" : "低碳钢管及特殊管道",
      description: language === 'en'
        ? "Manufacturing and supply of robust mild steel pipes and specialized piping components."
        : "制造和供应坚固的低碳钢管及专用管道组件。",
      icon: <Cylinder className="w-10 h-10 text-accent" />
    },
    {
      title: language === 'en' ? "Machine Maintenance" : "机械维修与保养",
      description: language === 'en'
        ? "Comprehensive maintenance and repair services to keep your industrial machinery running smoothly."
        : "全面的维修与保养服务，确保您的工业机械平稳运行。",
      icon: <Settings className="w-10 h-10 text-accent" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            {language === 'en' ? 'What We Do' : '我们的业务'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight"
          >
            {language === 'en' ? (
              <>Comprehensive <span className="text-accent">Engineering</span> Solutions</>
            ) : (
              <>全面的<span className="text-accent">工程</span>解决方案</>
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 font-light leading-relaxed"
          >
            {language === 'en'
              ? 'We offer a wide range of specialized services to cater to diverse industrial needs, backed by decades of expertise and a commitment to excellence.'
              : '我们提供广泛的专业服务，以满足各种工业需求，这得益于数十年的专业知识和对卓越的承诺。'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/5 rounded-full group-hover:scale-[10] transition-transform duration-700 ease-out z-0"></div>
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-light rounded-sm group-hover:bg-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 font-serif">{service.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
