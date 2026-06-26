import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, X, Monitor, Copy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const subject = `New Quote Request from ${formData.name || 'Website Visitor'}`;
  const body = `Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service Interested In: ${formData.service}

Message:
${formData.message}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const copyToClipboard = () => {
    const textToCopy = `To: hockhoenskce@gmail.com\nSubject: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert(language === 'en' ? "Information copied to clipboard! You can paste it into any email client." : "信息已复制到剪贴板！您可以将其粘贴到任何电子邮件客户端。");
    });
    setShowModal(false);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              {language === 'en' ? 'Get in Touch' : '联系我们'}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              {language === 'en' ? (
                <>Let's Build Something <span className="text-accent">Together</span></>
              ) : (
                <>让我们共同<span className="text-accent">创造</span></>
              )}
            </h2>
            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
              {language === 'en'
                ? 'Whether you need a quote for a new project or have questions about our services, our team is ready to assist you. Contact us today.'
                : '无论您需要新项目的报价还是对我们的服务有疑问，我们的团队随时准备为您提供帮助。今天就联系我们吧。'}
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-light flex items-center justify-center rounded-sm">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-primary mb-2 font-serif">{language === 'en' ? 'Call Us' : '致电我们'}</h3>
                  <p className="text-gray-600 font-light">
                    <a href="tel:0123821795" className="hover:text-accent transition-colors block mb-1">012-3821795 (Ah Hock)</a>
                    <a href="tel:0123991795" className="hover:text-accent transition-colors block">012-3991795 (Anna)</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-light flex items-center justify-center rounded-sm">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-primary mb-2 font-serif">{language === 'en' ? 'Email Us' : '发送邮件'}</h3>
                  <p className="text-gray-600 font-light">
                    <a href="mailto:hockhoenskce@gmail.com" className="hover:text-accent transition-colors">hockhoenskce@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-light flex items-center justify-center rounded-sm">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-primary mb-2 font-serif">{language === 'en' ? 'Visit Us' : '拜访我们'}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Jalan Muar Off Jalan Kapar Batu 2,<br/>
                    41400 Klang, Selangor Malaysia
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-light flex items-center justify-center rounded-sm">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-primary mb-2 font-serif">{language === 'en' ? 'Working Hours' : '工作时间'}</h3>
                  <p className="text-gray-600 font-light">
                    {language === 'en' ? 'Monday - Saturday: 8.30am - 6.00pm' : '星期一至星期六：上午8:30 - 下午6:00'}<br/>
                    {language === 'en' ? 'Sunday: Closed' : '星期日：休息'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            id="quote"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-light p-8 md:p-12 border border-gray-100 shadow-sm relative"
          >
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold text-primary mb-8">{language === 'en' ? 'Request a Quote' : '获取报价'}</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">{language === 'en' ? 'Name' : '姓名'}</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                      placeholder={language === 'en' ? 'Your Name' : '您的姓名'}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">{language === 'en' ? 'Phone' : '电话'}</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                      placeholder={language === 'en' ? 'Your Phone Number' : '您的电话号码'}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">{language === 'en' ? 'Email' : '电子邮件'}</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder={language === 'en' ? 'Your Email Address' : '您的电子邮件地址'}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">{language === 'en' ? 'Service Interested In' : '感兴趣的服务'}</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-gray-600"
                  >
                    <option value="">{language === 'en' ? 'Select a service' : '选择一项服务'}</option>
                    <option value="fabrication">{language === 'en' ? 'Customised Metal Fabrication' : '定制金属制造'}</option>
                    <option value="stainless">{language === 'en' ? 'Light Stainless Steel Works' : '轻型不锈钢工程'}</option>
                    <option value="welding">{language === 'en' ? 'Welding & Assembly Services' : '焊接与组装服务'}</option>
                    <option value="structural">{language === 'en' ? 'Structural & Engineering Fabrication' : '结构与工程制造'}</option>
                    <option value="pipes">{language === 'en' ? 'Mild Steel Pipes & Pipe Specials' : '低碳钢管及特殊管道'}</option>
                    <option value="maintenance">{language === 'en' ? 'Machine Maintenance' : '机械维修与保养'}</option>
                    <option value="other">{language === 'en' ? 'Other' : '其他'}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">{language === 'en' ? 'Message' : '留言'}</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                    placeholder={language === 'en' ? 'Tell us about your project...' : '告诉我们关于您的项目...'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white px-8 py-4 text-base font-medium uppercase tracking-widest hover:bg-accent/90 transition-all"
                >
                  {language === 'en' ? 'Send Email' : '发送邮件'}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Email Options Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-8 max-w-md w-full shadow-2xl relative border-t-4 border-accent"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <h4 className="text-2xl font-serif font-bold text-primary mb-2">
                {language === 'en' ? 'Choose Email App' : '选择邮件应用'}
              </h4>
              <p className="text-gray-600 mb-8 font-light">
                {language === 'en' ? 'How would you like to send this request?' : '您想如何发送此请求？'}
              </p>
              
              <div className="space-y-4">
                <a
                  href={`mailto:hockhoenskce@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                  onClick={() => setShowModal(false)}
                  className="w-full flex items-center justify-center gap-3 px-4 py-4 bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
                >
                  <Monitor size={20} className="flex-shrink-0" />
                  <span>{language === 'en' ? 'Default App (Mail, Gmail App, Outlook)' : '默认应用 (邮件应用, 手机 Gmail, Outlook)'}</span>
                </a>
                
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=hockhoenskce@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowModal(false)}
                  className="w-full hidden md:flex items-center justify-center gap-3 px-4 py-4 bg-red-500 hover:bg-red-600 text-white font-medium transition-colors"
                >
                  <Mail size={20} className="flex-shrink-0" />
                  <span>{language === 'en' ? 'Open in Gmail (Desktop Browser)' : '使用 Gmail 打开 (桌面浏览器)'}</span>
                </a>

                <button
                  onClick={copyToClipboard}
                  className="w-full flex items-center justify-center gap-3 px-4 py-4 border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 font-medium transition-colors cursor-pointer"
                >
                  <Copy size={20} className="flex-shrink-0" />
                  <span>{language === 'en' ? 'Copy Details to Clipboard' : '复制详细信息到剪贴板'}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
