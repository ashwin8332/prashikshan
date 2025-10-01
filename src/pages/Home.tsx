import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  ChevronRight,
  Sparkles,
  Code,
  Briefcase,
  BarChart3,
  Lightbulb
} from 'lucide-react';
import { useEffect, useState } from 'react';
import internshipImage from '../assets/intern.png';
import Testimonials from '../components/Testimonials';

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
      gradient: "from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30",
      iconBg: "bg-blue-600 dark:bg-blue-500",
      delay: "0s"
    },
    {
      icon: Building2,
      title: "Industry Collaboration",
      description: "Enable companies to post opportunities, manage applications, and track intern progress",
      gradient: "from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30",
      iconBg: "bg-green-600 dark:bg-green-500",
      delay: "0.1s"
    },
    {
      icon: Users,
      title: "Faculty Panel",
      description: "Comprehensive dashboard for faculty to monitor, approve, and evaluate internships",
      gradient: "from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30",
      iconBg: "bg-purple-600 dark:bg-purple-500",
      delay: "0.2s"
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Pre-internship training modules and skill assessment tools",
      gradient: "from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30",
      iconBg: "bg-orange-600 dark:bg-orange-500",
      delay: "0.3s"
    },
    {
      icon: TrendingUp,
      title: "Automatic Reports",
      description: "Real-time logbooks and NEP-compliant report generation",
      gradient: "from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30",
      iconBg: "bg-red-600 dark:bg-red-500",
      delay: "0.4s"
    },
    {
      icon: Shield,
      title: "Credit Integration",
      description: "Seamless integration with academic credit system and transcript management",
      gradient: "from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30",
      iconBg: "bg-indigo-600 dark:bg-indigo-500",
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

  // Removed parallax animations for cleaner performance

  return (
    <div className="min-h-screen">
      {/* Clean Hero Section with Optimized Background */}
      <section className="relative text-white overflow-hidden min-h-screen">
        {/* Clean Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/75 to-purple-900/80"></div>
          <img 
            src={internshipImage} 
            alt="Internship Background" 
            className="w-full h-full object-cover object-top opacity-40 scale-100"
          />
        </div>
        
        {/* Simple Static Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10"></div>

        <div className="relative py-20 md:py-28 lg:py-32">
          <div className="container-max">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Hero Content */}
              <motion.div 
                className="text-left md:pr-8 order-2 md:order-1"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <motion.h1 
                    className="hero-title text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <motion.span 
                      className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      Prashikshan
                    </motion.span>
                  </motion.h1>
                  <motion.p 
                    className="hero-subtitle text-white text-xl md:text-2xl lg:text-3xl font-semibold mb-6 drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                  >
                    Academia Industry Interface Platform
                  </motion.p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                >
                  <motion.p 
                    className="text-xl mb-8 text-white leading-relaxed p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sparkles className="inline w-6 h-6 text-yellow-400 mr-2" />
                    Bridging the gap between education and industry through seamless internship 
                    management, skill development, and collaborative learning under NEP 2020 guidelines.
                  </motion.p>
                  
                  {/* Enhanced Feature highlights */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Building2, text: "Industry Connections", color: "from-blue-400 to-cyan-400" },
                      { icon: BarChart3, text: "Credit Integration", color: "from-green-400 to-emerald-400" },  
                      { icon: Lightbulb, text: "Skill Assessment", color: "from-yellow-400 to-orange-400" },
                      { icon: CheckCircle2, text: "NEP 2020 Compliant", color: "from-purple-400 to-pink-400" }
                    ].map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                          whileHover={{ 
                            scale: 1.05, 
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                          }}
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color}`}>
                            <Icon className="text-white w-5 h-5" />
                          </div>
                          <span className="text-white font-medium">{feature.text}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.8 }}
                >
                  <div className="flex flex-col sm:flex-row gap-6 mt-10">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        to="/register"
                        className="btn-primary inline-flex items-center justify-center text-lg py-4 px-8 font-medium shadow-lg shadow-cyan-500/30 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                      >
                        <Code className="w-5 h-5 mr-2" />
                        Get Started
                        <ArrowRight className="w-6 h-6 ml-2" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        to="/student/internships"
                        className="btn-secondary inline-flex items-center justify-center text-lg py-4 px-8 font-medium border-2 border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300"
                      >
                        <Briefcase className="w-5 h-5 mr-2" />
                        Explore Internships
                        <ChevronRight className="w-6 h-6 ml-2" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Right side - Enhanced Logo/Image */}
              <motion.div 
                className="text-center order-1 md:order-2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="flex justify-center mb-8">
                  <motion.div 
                    className="logo-container relative z-10"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <motion.div 
                      className="absolute -inset-12 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute -inset-8 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full blur-2xl"
                      animate={{
                        rotate: [0, 180, 360],
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.img 
                      src="/prashikshan-logo.svg" 
                      alt="Prashikshan Logo" 
                      className="h-48 w-48 md:h-72 md:w-72 relative z-20 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="scroll-fade-in section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-12">
            <div className={`${isVisible.testimonials ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="section-title">
                Student <span className="text-gradient">Testimonials</span>
              </h2>
              <p className="section-subtitle">
                Hear from students who transformed their careers through our platform
              </p>
            </div>
          </div>
          
          <div className={`${isVisible.testimonials ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Trusted Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading educational institutions and industry partners who trust our platform
            </p>
          </motion.div>

          {/* Moving Partner Logos */}
          <div className="relative">
            <div className="flex animate-scroll space-x-12 items-center">
              {[
                { name: "ACPATIL College", logo: "/college/acpatil.png" },
                { name: "Bedekar College", logo: "/college/bedekar.png" },
                { name: "CSMIT College", logo: "/college/csmit.png" },
                { name: "CSMU College", logo: "/college/csmu.png" },
                { name: "Pillai College", logo: "/college/pillai.png" },
                { name: "Sant College", logo: "/college/sant.png" },
                // Duplicate for seamless loop
                { name: "ACPATIL College", logo: "/college/acpatil.png" },
                { name: "Bedekar College", logo: "/college/bedekar.png" },
                { name: "CSMIT College", logo: "/college/csmit.png" },
                { name: "CSMU College", logo: "/college/csmu.png" },
                { name: "Pillai College", logo: "/college/pillai.png" },
                { name: "Sant College", logo: "/college/sant.png" },
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center p-4 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter dark:brightness-90"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { value: "200+", label: "College Partners", icon: "🏫" },
              { value: "500+", label: "Industry Partners", icon: "🏭" },
              { value: "15,000+", label: "Students Trained", icon: "👨‍🎓" },
              { value: "95%", label: "Success Rate", icon: "🏆" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Key Features with Modern Cards */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container-max">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Complete <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Internship Ecosystem</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Six integrated modules designed to streamline the entire internship process with modern technology
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moduleFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Card content */}
                  <div className={`relative h-full p-8 rounded-2xl border border-white/20 shadow-lg backdrop-blur-sm bg-gradient-to-br ${feature.gradient} hover:shadow-2xl transition-all duration-500`}>
                    <motion.div 
                      className={`${feature.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {feature.description}
                    </p>
                    
                    {/* Hover arrow */}
                    <motion.div 
                      className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with Advanced Animations */}
      <section className="relative text-white overflow-hidden py-20">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
          animate={{
            background: [
              "linear-gradient(45deg, #0f172a, #581c87, #0f172a)",
              "linear-gradient(135deg, #581c87, #0f172a, #1e293b)",
              "linear-gradient(225deg, #1e293b, #581c87, #0f172a)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        <div className="relative section-padding">
          <div className="container-max">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Proven Track Record
              </motion.h2>
              <motion.p 
                className="text-xl text-white/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Numbers that speak for our success in transforming careers
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon className="w-12 h-12 mx-auto mb-6 text-cyan-400" />
                      </motion.div>
                      <motion.div 
                        className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-white/70 font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
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
          {/* Removed animated elements */}
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
                  className="btn-primary inline-flex items-center justify-center"
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