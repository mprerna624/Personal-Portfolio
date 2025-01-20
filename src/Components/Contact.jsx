import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Linkedin, Mail, Phone, User, MessageSquare, Copy, ExternalLink } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const socialLinks = [
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: "LinkedIn",
      value: "My LinkedIn Profile",
      linkHref: "https://www.linkedin.com/in/prerna-mittal-797384297/",
      type: "link",
      actionIcon: <ExternalLink className="w-4 h-4" />
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: "Email",
      value: "mprerna624@gmail.com",
      type: "copy",
      actionIcon: <Copy className="w-4 h-4" />
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      label: "Phone",
      value: "(+91) 9811053427",
      type: "copy",
      actionIcon: <Copy className="w-4 h-4" />
    }
  ];

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    const formSection = document.querySelector('.form-section');
    const connectSection = document.querySelector('.connect-section');

    if (formSection) observer.observe(formSection);
    if (connectSection) observer.observe(connectSection);

    return () => {
      if (formSection) observer.unobserve(formSection);
      if (connectSection) observer.unobserve(connectSection);
    };
  }, []);

  const handleFocus = (field) => {
    setIsFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setIsFocused(prev => ({ ...prev, [field]: false }));
    }
  };

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          from_message: data.msg
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success('Message sent successfully!');
        reset();
        setIsFocused({ name: false, email: false, message: false });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  const handleAction = (type, value, linkHref) => {
    if (type === 'link') {
      window.open(linkHref, '_blank');
    } else {
      navigator.clipboard.writeText(value);
      toast.success('Copied to clipboard!');
    }
  };

  return (
    <>
      <style>
        {`
          .form-section {
            opacity: 0;
            transform: translateX(-100px);
            transition: transform 1s ease-out, opacity 1s ease-out;
          }

          .connect-section {
            opacity: 0;
            transform: translateX(100px);
            transition: transform 1s ease-out, opacity 1s ease-out;
          }

          .animate-in {
            opacity: 1;
            transform: translateX(0);
          }

          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          textarea:-webkit-autofill,
          textarea:-webkit-autofill:hover,
          textarea:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0px 1000px transparent inset;
            transition: background-color 5000s ease-in-out 0s;
          }

          input:-webkit-autofill {
            -webkit-text-fill-color: var(--black) !important;
          }

          .dark input:-webkit-autofill {
            -webkit-text-fill-color: var(--offWhite) !important;
          }

          @media (max-width: 375px) {
            .form-section, .connect-section {
              padding: 1rem !important;
            }
            
            input, textarea {
              font-size: 14px;
            }
            
            .social-value {
              font-size: 13px;
            }
          }
        `}
      </style>

      <section id="contact" className="min-h-screen py-16 dark:bg-[var(--darkSectionBg)] overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <SectionHeading lightColor="maroon" darkColor="lightYellow" className='mb-10'>Contact Me</SectionHeading>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Contact Form */}
            <div className="form-section bg-white dark:bg-[var(--black)] rounded-lg p-4 sm:p-8 shadow-lg w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="relative group">
                  <div className="absolute top-3 left-3">
                    <User className="w-5 h-5 text-[var(--maroon)] dark:text-[var(--amber)]" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { 
                      required: 'Name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                    className={`peer w-full bg-transparent pl-10 p-3 outline-none transition-all duration-300 placeholder-transparent rounded-lg text-[var(--blue)] dark:text-white
                      ${isFocused.name ? 
                        'border-2 border-[var(--maroon)] dark:border-[var(--amber)]' : 
                        'border-b-2 border-gray-300 dark:border-gray-600'
                      }
                      ${errors.name ? 'border-red-500 dark:border-red-500' : ''}`}
                    onFocus={() => handleFocus('name')}
                    onBlur={(e) => handleBlur('name', e.target.value)}
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-10 bg-white dark:bg-[var(--black)] px-2 transition-all duration-300 pointer-events-none
                      ${isFocused.name || watch('name') ? 
                        '-top-2 text-sm text-[var(--maroon)] dark:text-[var(--amber)]' : 
                        'top-3 text-gray-500'
                      }
                      ${errors.name ? 'text-red-500 dark:text-red-500' : ''}`}
                  >
                    Your Name
                  </label>
                  {errors.name && (
                    <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="relative group">
                  <div className="absolute top-3 left-3">
                    <Mail className="w-5 h-5 text-[var(--maroon)] dark:text-[var(--amber)]" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email format'
                      }
                    })}
                    className={`peer w-full bg-transparent pl-10 p-3 outline-none transition-all duration-300 placeholder-transparent rounded-lg text-[var(--blue)] dark:text-white
                      ${isFocused.email ? 
                        'border-2 border-[var(--maroon)] dark:border-[var(--amber)]' : 
                        'border-b-2 border-gray-300 dark:border-gray-600'
                      }
                      ${errors.email ? 'border-red-500 dark:border-red-500' : ''}`}
                    onFocus={() => handleFocus('email')}
                    onBlur={(e) => handleBlur('email', e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-10 bg-white dark:bg-[var(--black)] px-2 transition-all duration-300 pointer-events-none
                      ${isFocused.email || watch('email') ? 
                        '-top-2 text-sm text-[var(--maroon)] dark:text-[var(--amber)]' : 
                        'top-3 text-gray-500'
                      }
                      ${errors.email ? 'text-red-500 dark:text-red-500' : ''}`}
                  >
                    Your Email
                  </label>
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="relative group">
                  <div className="absolute top-3 left-3">
                    <MessageSquare className="w-5 h-5 text-[var(--maroon)] dark:text-[var(--amber)]" />
                  </div>
                  <textarea
                    id="message"
                    rows="4"
                    {...register('msg', {
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                    className={`peer w-full bg-transparent pl-10 p-3 outline-none transition-all duration-300 placeholder-transparent rounded-lg text-[var(--blue)] dark:text-white
                      ${isFocused.message ? 
                        'border-2 border-[var(--maroon)] dark:border-[var(--amber)]' : 
                        'border-2 border-gray-300 dark:border-gray-600'
                      }
                      ${errors.msg ? 'border-red-500 dark:border-red-500' : ''}`}
                    onFocus={() => handleFocus('message')}
                    onBlur={(e) => handleBlur('message', e.target.value)}
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-10 bg-white dark:bg-[var(--black)] px-2 transition-all duration-300 pointer-events-none
                      ${isFocused.message || watch('message') ? 
                        '-top-2 text-sm text-[var(--maroon)] dark:text-[var(--amber)]' : 
                        'top-3 text-gray-500'
                      }
                      ${errors.msg ? 'text-red-500 dark:text-red-500' : ''}`}
                  >
                    Your Message
                  </label>
                  {errors.msg && (
                    <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">
                      {errors.msg.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`group w-full bg-[var(--maroon)] dark:bg-[var(--amber)] text-white dark:text-[var(--black)] py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transform hover:-translate-y-1 transition-all duration-300
                    ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSending ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="connect-section bg-white dark:bg-[var(--black)] rounded-lg p-4 sm:p-8 shadow-lg w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--blue)] dark:text-[var(--lightYellow)] mb-4">
                Connect With Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base">
                Get in touch - simply click to visit my LinkedIn profile or instantly copy my contact details to your clipboard with a single click.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                {socialLinks.map((link, index) => (
                  <div 
                    key={index}
                    onClick={() => handleAction(link.type, link.value, link.linkHref)}
                    className="flex items-center justify-between cursor-pointer group hover:bg-[var(--lightNavbarBg)] dark:hover:bg-gray-800 p-2 sm:p-3 rounded-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <span className="text-[var(--maroon)] dark:text-[var(--amber)] p-1.5 sm:p-2 rounded-full bg-[var(--lightSectionBg)] dark:bg-[var(--blue)] group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span className="social-value text-[var(--blue)] dark:text-white font-medium">
                        {link.value}
                      </span>
                    </div>
                    <span className="text-gray-400 group-hover:text-[var(--maroon)] dark:group-hover:text-[var(--amber)] transition-colors duration-300">
                      {link.actionIcon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;