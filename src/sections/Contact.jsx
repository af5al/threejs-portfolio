import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Afsal',
          from_email: form.email,
          to_email: 'afiafsal6023@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <picture className="absolute inset-0 min-h-screen w-full h-full">
          <source srcSet="/assets/terminal.webp" type="image/webp" />
          <img src="/assets/terminal.png" alt="terminal-bg" className="w-full h-full object-cover" />
        </picture>

        <div className="contact-container">
          <h3 className="head-text text-2xl sm:text-3xl">Let's connect</h3>
          <p className="text-sm sm:text-base text-white-600 mt-2 leading-relaxed">
            Based in <span className="text-emerald-400 font-medium">Dubai, UAE</span> · Available for <span className="text-white font-medium">immediate full-time roles</span>.
            Looking to build scalable web/mobile apps or integrate AI features? Let's discuss.
          </p>

          <div className="flex flex-wrap gap-2 mt-3 text-xs text-neutral-300">
            <a
              href="mailto:afiafsal6023@gmail.com"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black-300/80 border border-white/10 hover:text-emerald-400 transition-colors">
              ✉️ afiafsal6023@gmail.com
            </a>
            <a
              href="tel:+971541424689"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black-300/80 border border-white/10 hover:text-emerald-400 transition-colors">
              📞 +971 54 142 4689
            </a>
            <a
              href="https://wa.me/971541424689"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black-300/80 border border-white/10 hover:text-emerald-400 text-emerald-400 transition-colors">
              💬 WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-afsal-p/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black-300/80 border border-white/10 hover:text-white transition-colors">
              🔗 LinkedIn
            </a>
            <a
              href="https://github.com/af5al"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black-300/80 border border-white/10 hover:text-white transition-colors">
              🐙 GitHub
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-5 sm:mt-6 flex flex-col space-y-3 sm:space-y-4">
            <label className="space-y-1">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-1">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-1">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={3}
                className="field-input resize-none py-2"
                placeholder="Share your project requirements or inquiries..."
              />
            </label>

            <button className="field-btn mt-1" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
