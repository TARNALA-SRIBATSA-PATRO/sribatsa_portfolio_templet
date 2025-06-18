import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import { useEffect } from "react";

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  
  const yearsCount = useCountUp({ end: 50, duration: 1500 });
  const projectsCount = useCountUp({ end: 10, duration: 2000, delay: 200 });
  const techCount = useCountUp({ end: 8, duration: 1800, delay: 400 });
  const learningCount = useCountUp({ end: 1, duration: 1000, delay: 600 });

  useEffect(() => {
    if (isInView) {
      yearsCount.startAnimation();
      projectsCount.startAnimation();
      techCount.startAnimation();
      learningCount.startAnimation();
    }
  }, [isInView]);

  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-white mb-4">
              Backend Developer & Creative Problem Solver
            </h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Hi! I'm <span className="text-orange-500 font-semibold">Your Name</span>, 
                a passionate developer and creative problem solver with expertise in 
                <span className="text-orange-500"> modern web technologies</span>.
              </p>
              <p>
                I'm a <span className="text-orange-500 font-semibold">Full-Stack Developer</span> skilled 
                in React, TypeScript, and various backend technologies. My journey in tech is driven by an insatiable 
                curiosity to learn new technologies and solve complex problems through innovative solutions.
              </p>
              <p>
                Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and 
                developing creative solutions that challenge my technical abilities. I believe in 
                continuous learning and pushing the boundaries of what's possible in web development.
              </p>
            </div>
          </div>
          
          <div ref={ref} className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {yearsCount.count}k+
              </div>
              <div className="text-gray-300">Lines of Code</div>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {projectsCount.count}+
              </div>
              <div className="text-gray-300">Projects Built</div>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {techCount.count}+
              </div>
              <div className="text-gray-300">Technologies</div>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-orange-500 mb-2">∞</div>
              <div className="text-gray-300">Learning Spirit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
