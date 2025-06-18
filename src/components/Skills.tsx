
import { useInView } from "@/hooks/useInView";

const Skills = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 85 },
        { name: "Java (J2SE)", level: 80 },
        { name: "Java (J2EE)", level: 70 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Frameworks & Technologies",
      skills: [
        { name: "Spring Boot", level: 65 }
      ]
    },
    {
      title: "Tools & IDEs",
      skills: [
        { name: "Postman", level: 80 },
        { name: "Eclipse", level: 85 },
        { name: "IntelliJ IDEA", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "CodeBlocks", level: 75 }
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "Design & Analysis of Algorithms", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & <span className="text-orange-500">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105 ${
                isInView ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: isInView ? `${categoryIndex * 0.2}s` : '0s' }}
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-orange-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isInView ? `${skill.level}%` : '0%',
                          transitionDelay: isInView ? `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` : '0s'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
