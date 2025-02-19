import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Globe, Terminal, Server, Coffee } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-indigo-600">Portföy</span>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-indigo-600'
                      : 'text-gray-600 hover:text-indigo-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 py-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <img
                src="#"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-6"
              />
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Merhaba, Ben <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Kasım Emre</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8 animate-fade-in-delay">
              <span className="typing-text">Full Stack Geliştirici & DevOps</span>
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <a href="#" className="transform hover:scale-110 transition-transform">
                <div className="bg-white p-4 rounded-full shadow-lg text-gray-700 hover:text-indigo-600">
                  <Github size={24} />
                </div>
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform">
                <div className="bg-white p-4 rounded-full shadow-lg text-gray-700 hover:text-indigo-600">
                  <Linkedin size={24} />
                </div>
              </a>
              <a href="mailto:email@example.com" className="transform hover:scale-110 transition-transform">
                <div className="bg-white p-4 rounded-full shadow-lg text-gray-700 hover:text-indigo-600">
                  <Mail size={24} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Hakkımda
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Yönetim Bilişim Sistemleri öğrencisi olarak, modern web teknolojileri kullanarak projeler geliştiriyorum. Kullanıcı deneyimini ön planda tutarak, performanslı ve ölçeklenebilir uygulamalar oluşturmayı hedefliyorum.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Sürekli kendimi geliştiriyor, yeni teknolojileri takip ediyor ve öğreniyorum. Açık kaynak projelere katkıda bulunuyor ve toplulukla bilgi paylaşımına önem veriyorum.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">0.5+</div>
                    <div className="text-sm text-gray-500">Yıl Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">8+</div>
                    <div className="text-sm text-gray-500">Proje</div>
                  </div>
                 
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
                  <Code className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Frontend</h3>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
                  <Server className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Backend</h3>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
                  <Terminal className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                  <h3 className="font-semibold">DevOps</h3>
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Projelerim
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Ticaret Platformu',
                description: 'React ve Node.js ile geliştirilmiş, modern bir e-ticaret platformu.',
                image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60',
                tech: ['React', 'Node.js', 'MongoDB']
              },
              {
                title: 'AI Destekli CRM',
                description: 'Yapay zeka destekli müşteri ilişkileri yönetim sistemi.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
                tech: ['Python', 'TensorFlow', 'React']
              },
              {
                title: 'Finans Dashboard',
                description: 'Gerçek zamanlı finansal verileri görselleştiren dashboard uygulaması.',
                image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop&q=60',
                tech: ['Vue.js', 'D3.js', 'Firebase']
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800"
                    >
                      Demo <ExternalLink size={16} className="ml-1" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800"
                    >
                      GitHub <Github size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Yeteneklerim
            </span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                <Globe className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <div className="space-y-3">
                  {[
                    { name: 'React', level: 60 },
                    { name: 'TypeScript', level: 60 },
                    { name: 'Next.js', level: 40 },
                    { name: 'Tailwind CSS', level: 80 },
                    
                    
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <Server className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Node.js', level: 55 },
                    { name: 'Python', level: 70 },
                    { name: 'PostgreSQL', level: 45 },
                    { name: 'C#', level: 50 },
                    { name: 'msSQL', level: 50 },
                    { name: 'Firebase', level: 60 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl">
                <Terminal className="w-10 h-10 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">DevOps</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Docker', level: 75 },
                    
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-pink-600 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              İletişim
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-white p-4 rounded-full shadow-lg text-indigo-600 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href="kasimemresekersoy@gmail.com" className="text-gray-600 hover:text-indigo-600">
                      
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-white p-4 rounded-full shadow-lg text-indigo-600 group-hover:scale-110 transition-transform">
                    <Github size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">GitHub</h3>
                    <a href="https://github.com/KASIMEMRE" className="text-gray-600 hover:text-indigo-600">
                      
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-white p-4 rounded-full shadow-lg text-indigo-600 group-hover:scale-110 transition-transform">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/kas%C4%B1m-emre-%C5%9Fekersoy-970ba5295/" className="text-gray-600 hover:text-indigo-600">
                      
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-white p-4 rounded-full shadow-lg text-indigo-600 group-hover:scale-110 transition-transform">
                    <Coffee size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Çalışma Durumu</h3>
                    <p className="text-green-600">Yeni fırsatlara açığım</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Portfolio
              </span>
              <p className="mt-2 text-gray-400">
                &copy; {new Date().getFullYear()} KASIM EMRE ŞEKERSOY. Tüm hakları saklıdır.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:email@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;