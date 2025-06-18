import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Mail, Facebook, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// Postal Van Animation Component
const PostalVanAnimation = ({ isActive }: { isActive: boolean }) => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    if (isActive) {
      // Start animation sequence
      setAnimationPhase(0);
      const timer1 = setTimeout(() => setAnimationPhase(1), 500);
      const timer2 = setTimeout(() => setAnimationPhase(2), 2000);
      const timer3 = setTimeout(() => setAnimationPhase(3), 3500);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      setAnimationPhase(0);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-0 overflow-y-auto">
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-8 max-w-md w-full mx-2 sm:mx-4 flex flex-col items-center justify-center my-4" style={{ minHeight: '320px' }}>
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Sending Your Message</h3>
          <p className="text-gray-400 text-sm sm:text-base">Your message is on its way!</p>
        </div>
        
        {/* Animation Container */}
        <div className="relative h-32 sm:h-32 w-full bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden border border-gray-600">
          {/* Road */}
          <div className="absolute bottom-0 w-full h-4 bg-gray-600"></div>
          <div className="absolute bottom-1 w-full h-0.5 bg-yellow-400"></div>
          
          {/* Sender (Left) */}
          <div className="absolute left-4 bottom-6">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
              animationPhase === 0 ? 'bg-orange-500 scale-110' : 'bg-orange-500/50'
            }`}>
              <Mail className="text-white" size={16} />
            </div>
            <div className="text-xs text-gray-400 mt-1 text-center">You</div>
          </div>
          
          {/* Receiver (Right) */}
          <div className="absolute right-4 bottom-6">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
              animationPhase === 3 ? 'bg-green-500 scale-110' : 'bg-green-500/50'
            }`}>
              <Mail className="text-white" size={16} />
            </div>
            <div className="text-xs text-gray-400 mt-1 text-center">Me</div>
          </div>
          
          {/* Postal Van */}
          <div className={`absolute bottom-4 transition-all duration-2000 ease-in-out ${
            animationPhase === 0 ? 'left-4' : 
            animationPhase === 1 ? 'left-1/2 transform -translate-x-1/2' :
            animationPhase >= 2 ? 'right-4' : 'left-4'
          }`}>
            <div className="relative">
              {/* Van Body */}
              <div className="w-12 h-6 bg-blue-500 rounded-t-lg relative">
                {/* Van Windows */}
                <div className="absolute top-1 left-1 w-2 h-2 bg-blue-300 rounded-sm"></div>
                <div className="absolute top-1 right-1 w-2 h-2 bg-blue-300 rounded-sm"></div>
                {/* Van Wheels */}
                <div className="absolute -bottom-1 left-1 w-2 h-2 bg-gray-800 rounded-full border border-gray-600 animate-spin"></div>
                <div className="absolute -bottom-1 right-1 w-2 h-2 bg-gray-800 rounded-full border border-gray-600 animate-spin"></div>
              </div>
              {/* Van Front */}
              <div className="w-4 h-4 bg-blue-600 rounded-t-lg absolute -right-1 bottom-0"></div>
            </div>
          </div>
          
          {/* Message Bubble */}
          <div className={`absolute top-4 transition-all duration-2000 ease-in-out ${
            animationPhase === 0 ? 'left-16 opacity-100' : 
            animationPhase === 1 ? 'left-1/2 transform -translate-x-1/2 opacity-100' :
            animationPhase >= 2 ? 'right-16 opacity-100' : 'left-16 opacity-0'
          }`}>
            <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-lg relative animate-bounce">
              📧
              <div className="absolute -bottom-1 left-2 w-2 h-2 bg-orange-500 transform rotate-45"></div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="absolute bottom-12 left-4 right-4 h-2 bg-gray-600 rounded-full overflow-hidden">
            <div className={`h-full bg-orange-500 rounded-full transition-all duration-3000 ease-in-out ${
              animationPhase === 0 ? 'w-0' :
              animationPhase === 1 ? 'w-1/2' :
              animationPhase >= 2 ? 'w-full' : 'w-0'
            }`}></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center mt-4">
          <div className="flex items-center justify-center gap-2 text-orange-500">
            <Loader2 className="animate-spin" size={16} />
            <span className="text-xs sm:text-sm">
              {animationPhase === 0 && "Preparing your message..."}
              {animationPhase === 1 && "Message is on the way..."}
              {animationPhase === 2 && "Almost there..."}
              {animationPhase === 3 && "Delivered successfully!"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Close keyboard on mobile by blurring all inputs
    const inputs = document.querySelectorAll('input, textarea') as NodeListOf<HTMLElement>;
    inputs.forEach(input => input.blur());
    
    // Scroll to top to ensure animation is visible
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setIsSubmitting(true);
    setIsSubmitted(false);

    // Sample EmailJS configuration - Replace with your own
    emailjs.send(
      "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
      formData,
      "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
    )
    .then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
      console.error("EmailJS error:", error);
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/your-username",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/your-profile",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/your-handle/",
      color: "hover:text-pink-400"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/your-profile",
      color: "hover:text-blue-500"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com?subject=Quick Hello!&body=Hi,%0D%0A%0D%0AI just visited your portfolio and thought of reaching out. Would love to connect and have a quick chat if you're open to it.%0D%0A%0D%0ACheers,%0D%0A[Your Name]",
      color: "hover:text-orange-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      {/* Postal Van Animation Overlay */}
      <PostalVanAnimation isActive={isSubmitting} />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:outline-none resize-none"
                  placeholder="Tell me about your project or say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 transform ${
                  isSubmitting 
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed" 
                    : isSubmitted
                    ? "bg-green-600 hover:bg-green-700 text-white hover:scale-105"
                    : "bg-orange-500 hover:bg-orange-600 text-white hover:scale-105"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin" size={20} />
                    <span>Sending your message...</span>
                  </div>
                ) : isSubmitted ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle size={20} />
                    <span>Message sent successfully!</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <a href="mailto:your.email@example.com?subject=Quick Hello!&body=Hi,%0D%0A%0D%0AI just visited your portfolio and thought of reaching out. Would love to connect and have a quick chat if you're open to it.%0D%0A%0D%0ACheers,%0D%0A[Your Name]" className="text-orange-500 hover:text-orange-400 transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:-mt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-orange-500 font-bold">📍</span>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Location</p>
                      <p className="text-gray-400">Your City, State, Country</p>
                    </div>
                  </div>
                  <div className="md:ml-auto md:-mt-32">
                    <div className="rounded-lg overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300 w-full md:w-[200px]">
                      <iframe
                        src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Your+Location&maptype=satellite&zoom=18"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Your Location"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:border-current hover:scale-110`}
                    title={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">Quick Response</h4>
              <p className="text-gray-400 text-sm">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out via LinkedIn or directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
