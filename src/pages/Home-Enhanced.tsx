import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Building2, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Shield, 
  CheckCircle2,
  Star,
  ArrowRight,
  Award,
  Globe,
  Zap,
  Target,
  ChevronRight
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const moduleFeatures = [
    {
      icon: GraduationCap,
      title: "Student Portal",
      description: "Centralized platform for students to discover, apply, and track internship opportunities",
      gradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-600",
      delay: "0s"
    },
    {
      icon: Building2,
      title: "Industry Collaboration",
      description: "Enable companies to post opportunities, manage applications, and track intern progress",
      gradient: "from-green-50 to-green-100",
      iconBg: "bg-green-600",
      delay: "0.1s"
    },
    {
      icon: Users,
      title: "Faculty Panel",
      description: "Comprehensive dashboard for faculty to monitor, approve, and evaluate internships",
      gradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-600",
      delay: "0.2s"
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Pre-internship training modules and skill assessment tools",
      gradient: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-600",
      delay: "0.3s"
    },
    {
      icon: TrendingUp,
      title: "Automatic Reports",
      description: "Real-time logbooks and NEP-compliant report generation",
      gradient: "from-red-50 to-red-100",
      iconBg: "bg-red-600",
      delay: "0.4s"
    },
    {
      icon: Shield,
      title: "Credit Integration",
      description: "Seamless integration with academic credit system and transcript management",
      gradient: "from-indigo-50 to-indigo-100",
      iconBg: "bg-indigo-600",
      delay: "0.5s"
    }
  ];

  const nepFeatures = [
    {
      title: "Experiential Learning",
      description: "Hands-on learning through industry internships and fieldwork"
    },
    {
      title: "Credit-Based Evaluation",
      description: "Internships count towards academic scores with proper evaluation"
    },
    {
      title: "Industry Integration",
      description: "Direct collaboration with industry partners and government departments"
    },
    {
      title: "Skill Readiness",
      description: "Comprehensive skill assessment and development programs"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Placed", icon: Users },
    { number: "500+", label: "Partner Companies", icon: Building2 },
    { number: "200+", label: "Colleges Connected", icon: GraduationCap },
    { number: "95%", label: "Success Rate", icon: Award }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative hero-gradient text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-dots opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-white/5 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: '4s' }}></div>

        <div className="relative section-padding">
          <div className="container-max">
            <div className="text-center">
              <div className="animate-fade-in-up">
                <div className="flex justify-center mb-8">
                  <div className="logo-container">
                    <img 
                      src="/prashikshan-logo.svg" 
                      alt="Prashikshan Logo" 
                      className="h-24 w-24 md:h-32 md:w-32 logo-pulse logo-glow animate-pulse-glow" 
                    />
                  </div>
                </div>
                <h1 className="hero-title">
                  <span className="text-gradient">Prashikshan</span>
                </h1>
                <p className="hero-subtitle text-white/90">
                  Academia Industry Interface Platform
                </p>
              </div>
              
              <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <p className="text-lg mb-8 max-w-4xl mx-auto text-white/80 leading-relaxed">
                  Bridging the gap between education and industry through seamless internship 
                  management, skill development, and collaborative learning under NEP 2020 guidelines.
                </p>
              </div>
              
              <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link
                    to="/register"
                    className="btn-primary animate-pulse-glow inline-flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/student/internships"
                    className="btn-secondary inline-flex items-center justify-center"
                  >
                    Explore Internships
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-current text-background">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Enhanced Key Features */}
      <section id="features" className="scroll-fade-in section-padding bg-background">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className={`${isVisible.features ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="section-title">
                Complete <span className="text-gradient">Internship Ecosystem</span>
              </h2>
              <p className="section-subtitle">
                Seven integrated modules designed to streamline the entire internship process with modern technology
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moduleFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`feature-card card-hover bg-gradient-to-br ${feature.gradient} dark:from-gray-800 dark:to-gray-700 ${isVisible.features ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: feature.delay, animationFillMode: 'forwards' }}
                >
                  <div className={`${feature.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section id="stats" className="scroll-fade-in hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="relative section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold mb-4 ${isVisible.stats ? 'animate-slide-in-left' : 'opacity-0'}`}>
                Proven Track Record
              </h2>
              <p className={`text-xl text-white/80 ${isVisible.stats ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                Numbers that speak for our success in transforming careers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`${isVisible.stats ? 'animate-fade-in-up' : 'opacity-0'} glass-effect rounded-xl p-6 card-hover`}
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-4 text-white/80" />
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-white/70">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced NEP 2020 Compliance */}
      <section id="nep" className="scroll-fade-in section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className={`${isVisible.nep ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="section-title">
                <span className="text-gradient">NEP 2020</span> Compliant
              </h2>
              <p className="section-subtitle">
                Designed specifically to meet the requirements of the New Education Policy 2020
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible.nep ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Key NEP Features</h3>
              <div className="space-y-6">
                {nepFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="text-green-600 mt-1 group-hover:scale-110 transition-transform" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`${isVisible.nep ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                <div className="relative feature-card p-8 shadow-xl">
                  <div className="text-center">
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star className="text-primary" size={32} />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-foreground">Semester 5 Focus</h4>
                    <p className="text-muted-foreground mb-6">
                      Specifically designed for 5th semester internships in the 4-year undergraduate program
                    </p>
                    <div className="glass-effect p-6 rounded-lg">
                      <p className="text-sm text-foreground italic">
                        "By Semester 5, students engage in industry or field-based internships to develop 
                        practical skills and align learning with real-world needs."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Benefits Section */}
      <section id="benefits" className="scroll-fade-in section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`${isVisible.benefits ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Why Choose <span className="text-gradient">Prashikshan</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're revolutionizing the way students connect with industry opportunities, 
                creating a seamless bridge between academic learning and professional growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Target, title: "Targeted Matching", desc: "AI-powered skill alignment" },
                  { icon: Globe, title: "Global Reach", desc: "Worldwide opportunities" },
                  { icon: Zap, title: "Fast Processing", desc: "Quick application system" },
                  { icon: Award, title: "Quality Assured", desc: "Certified partners only" }
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="feature-card p-4 text-center card-hover">
                      <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className={`${isVisible.benefits ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl transform -rotate-3"></div>
                <div className="relative feature-card p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Success Stories</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="glass-effect p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">A</span>
                        </div>
                        <span className="font-semibold text-foreground">Arjun Patel</span>
                      </div>
                      <p className="text-sm text-muted-foreground">"Got placed at Google through this platform!"</p>
                    </div>
                    <div className="glass-effect p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">P</span>
                        </div>
                        <span className="font-semibold text-foreground">Priya Sharma</span>
                      </div>
                      <p className="text-sm text-muted-foreground">"Amazing internship experience at TCS!"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section id="cta" className="scroll-fade-in hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full animate-float hidden lg:block"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative section-padding">
          <div className="container-max text-center">
            <div className={`${isVisible.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your <span className="text-gradient">Internship Experience</span>?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
                Join thousands of students, faculty, and industry partners already using Prashikshan 
                to create meaningful connections and career opportunities.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <Link
                  to="/student/dashboard"
                  className="btn-primary animate-pulse-glow inline-flex items-center justify-center"
                >
                  Student Portal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  to="/industry/dashboard"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Industry Portal
                  <Building2 className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  to="/faculty/dashboard"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Faculty Portal
                  <Users className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;