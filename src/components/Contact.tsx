import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import { useEffect } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();


  const [msg, setMessage] = useState("");
  const [severity, setSeverity] = useState ("success");
  const [showPopUp, setShowPopUp] = useState(false);
  const showPopupHandler = () => setShowPopUp(true);

  useEffect(() => {
    const timer = setTimeout(() => {
    setShowPopUp(false);
  }, 5000);
 return () => clearTimeout(timer);
 }, [showPopUp]);

 let popup = null;
  if(showPopUp) {
    switch (severity) {
      case "error":
        popup = <Alert variant="filled" severity="error" >    
  {msg}
</Alert> 
        break;
    
      default: // 
      popup = <Alert variant="filled" severity="success" >    
      {msg}
    </Alert> 
        break;
    }
    
   }

  


const [visibleAlert, setVisibleAlert] = useState(false);
  
  const handleSubmit =  async  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    formData.append("access_key", "8a44c5b6-aab0-4202-9698-4e14f2dd0463");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setSeverity("success");
      setMessage("Email successfully  sent!");
      showPopupHandler();

    } else {
      setSeverity("error");
      setMessage(data? data.message : "");
      

      showPopupHandler();

    }
    
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          {t('contact.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              {t('contact.subtitle')}
            </h3>
            <div className="space-y-4 text-zinc-300">
              <p>{t('contact.description')}</p>

              <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <Mail size={20} className="text-primary-500" />
                <span>contact@stephaneledro.com</span>
              </div>

              <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <Phone size={20} className="text-primary-500" />
                <span>+33 (0)6 51 41 86 04</span>
              </div>
            </div>
          </div>

          <form id="contactForm" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-zinc-900/50 border border-primary-900/30 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-zinc-900/50 border border-primary-900/30 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-zinc-900/50 border border-primary-900/30 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:from-primary-500 hover:to-primary-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-950/50"
            >
              <Send size={20} />
              <span>{t('contact.send')}</span>
            </button>
          </form>
          {popup}
        </div>
      </div>
    </section>
  );
};

export default Contact;
