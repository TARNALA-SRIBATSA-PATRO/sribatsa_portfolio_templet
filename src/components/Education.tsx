import { useInView } from "@/hooks/useInView";

const Education = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const educationData = [
    {
      year: "June 2024 - Present",
      degree: "Software Development Intern",
      institution: "Rumango Software and Consulting Services Private Limited",
      status: "Ongoing",
      description: "Working on backend development projects using Java and MySQL, focusing on building robust and efficient solutions."
    },
    {
      year: "2023 - Present",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Silicon University, Bhubaneswar",
      status: "Ongoing (3rd Year)",
      description: "Specializing in Java Development, Data Structures & Algorithms, and Database Management Systems."
    },
    {
      year: "2021 - 2023",
      degree: "Higher Secondary Education (12th)",
      institution: "Institute of Higher Secondary Education, S'O'A University",
      status: "Completed",
      description: "Focused on Mathematics, Physics, and Computer Science fundamentals."
    },
    {
      year: "2020 - 2021",
      degree: "Secondary School (10th)",
      institution: "Saraswati Sishu Vidya Mandir, Kabisurya Nagar",
      status: "Completed",
      description: "Strong foundation in core subjects with excellent academic performance."
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-orange-500">Education</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-500 hidden md:block"></div>
          
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${
                isInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                animationDelay: isInView ? `${index * 0.2}s` : '0s',
                transform: isInView ? 'translateY(0)' : `translateY(${index % 2 === 0 ? '50px' : '-50px'})`,
                transition: 'all 0.6s ease-out'
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900 hidden md:block z-10"></div>
              
              {/* Content card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.year}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status.includes('Ongoing') 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                  <h4 className="text-orange-500 font-semibold mb-3">{item.institution}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;