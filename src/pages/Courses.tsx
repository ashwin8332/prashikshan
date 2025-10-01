import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Brain, 
  Shield,
  Clock,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      title: "Full Stack Web Development",
      description: "Master modern web technologies including React, Node.js, MongoDB, and cloud deployment.",
      icon: Code,
      duration: "6 months",
      level: "Beginner to Advanced",
      students: "2,500+",
      color: "from-blue-500 to-cyan-500",
      features: ["React & Next.js", "Node.js & Express", "MongoDB & PostgreSQL", "AWS Deployment", "Portfolio Projects"]
    },
    {
      title: "Data Science & Analytics",
      description: "Learn data analysis, machine learning, and AI with Python, R, and modern tools.",
      icon: Database,
      duration: "8 months",
      level: "Intermediate",
      students: "1,800+",
      color: "from-green-500 to-emerald-500",
      features: ["Python & R", "Machine Learning", "Data Visualization", "Big Data Tools", "Real Projects"]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing training covering SEO, social media, and analytics.",
      icon: Globe,
      duration: "4 months",
      level: "Beginner",
      students: "3,200+",
      color: "from-purple-500 to-pink-500",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics", "Certification"]
    },
    {
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications using React Native and Flutter.",
      icon: Smartphone,
      duration: "5 months",
      level: "Intermediate",
      students: "1,500+",
      color: "from-orange-500 to-red-500",
      features: ["React Native", "Flutter & Dart", "API Integration", "App Store Deployment", "UI/UX Design"]
    },
    {
      title: "Artificial Intelligence",
      description: "Dive deep into AI, machine learning, and neural networks with hands-on projects.",
      icon: Brain,
      duration: "10 months",
      level: "Advanced",
      students: "900+",
      color: "from-indigo-500 to-purple-500",
      features: ["Neural Networks", "Deep Learning", "Computer Vision", "NLP", "AI Ethics"]
    },
    {
      title: "Cybersecurity",
      description: "Learn ethical hacking, network security, and modern cybersecurity practices.",
      icon: Shield,
      duration: "7 months",
      level: "Intermediate",
      students: "1,200+",
      color: "from-red-500 to-pink-500",
      features: ["Ethical Hacking", "Network Security", "Incident Response", "Security Tools", "Certifications"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-blue-50 to-indigo-50 dark:from-primary/20 dark:via-gray-900 dark:to-gray-800 py-20">
        <div className="container-max">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              Skill Development <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Courses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive training programs designed to prepare students for industry internships and future careers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                  
                  <div className="p-8">
                    {/* Icon and Title */}
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${course.color} bg-opacity-10 mr-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Course Info */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                      <div className="text-center">
                        <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                        <div className="font-medium">{course.duration}</div>
                      </div>
                      <div className="text-center">
                        <Award className="w-5 h-5 text-primary mx-auto mb-1" />
                        <div className="font-medium">{course.level}</div>
                      </div>
                      <div className="text-center">
                        <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                        <div className="font-medium">{course.students}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What you'll learn:</h4>
                      <ul className="space-y-2">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${course.color} mr-3`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/register"
                      className={`inline-flex items-center justify-center w-full py-3 px-6 rounded-xl bg-gradient-to-r ${course.color} text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                    >
                      Enroll Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30 dark:bg-gray-900/30">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our <span className="text-primary">Courses?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-aligned curriculum designed to make you job-ready
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Industry Experts",
                description: "Learn from professionals with years of industry experience",
                icon: "👨‍💼"
              },
              {
                title: "Hands-on Projects",
                description: "Build real-world projects that showcase your skills",
                icon: "🛠️"
              },
              {
                title: "Job Placement",
                description: "95% placement rate with our industry partners",
                icon: "💼"
              },
              {
                title: "Certification",
                description: "Industry-recognized certificates upon completion",
                icon: "🏆"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;