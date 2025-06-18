import { useTypewriter } from "@/hooks/useTypewriter";

const Hero = () => {
  const nameTypewriter = useTypewriter({ 
    text: "Tarnala Sribatsa Patro", 
    speed: 120, 
    delay: 500 
  });
  
  const roleTypewriter = useTypewriter({ 
    text: "Backend Developer & Problem Solver", 
    speed: 80, 
    delay: 3500 
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left order-2 lg:order-1 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="mb-6">
            <h2 className="text-lg text-orange-500 font-medium mb-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 min-h-[4rem] md:min-h-[6rem]">
              {nameTypewriter.displayText}
              {!nameTypewriter.isComplete && <span className="animate-pulse">|</span>}
            </h1>
            <div className="text-2xl md:text-3xl text-gray-300 mb-6 min-h-[3rem] md:min-h-[4rem]">
              <span className="text-orange-500">{roleTypewriter.displayText}</span>
              {roleTypewriter.displayText && !roleTypewriter.isComplete && <span className="animate-pulse">|</span>}
            </div>
          </div>
          <p className="text-lg text-gray-400 mb-8 max-w-lg opacity-0 animate-fade-in" style={{ animationDelay: '4s', animationFillMode: 'forwards' }}>
            Passionate about learning new technologies and building robust backend solutions. 
            Currently pursuing B.Tech in Computer Science and Engineering with a focus on 
            Java development and database management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in" style={{ animationDelay: '4.5s', animationFillMode: 'forwards' }}>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
          </div>
        </div>
        
        <div className="flex justify-center order-1 lg:order-2 opacity-0 animate-scale-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl hover:scale-105 transition-transform duration-500">
              <img
                src="sribatsa_image.jpg"
                alt="Tarnala Sribatsa Patro"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-full bg-orange-500/20 blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
