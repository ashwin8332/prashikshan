import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Building2, 
  Users, 
  Target, 
  Award, 
  BookOpen,
  CheckCircle2 
} from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-blue-50 to-indigo-50 dark:from-primary/20 dark:via-gray-900 dark:to-gray-800 py-20">
        <div className="container-max">
          <motion.div 
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              About <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Prashikshan</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Bridging the gap between academia and industry through innovative internship management and skill development programs under NEP 2020 guidelines.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To create a seamless bridge between educational institutions and industry partners, 
                enabling students to gain practical experience while meeting industry requirements 
                for skilled professionals. We aim to transform the traditional internship process 
                into a structured, technology-driven ecosystem.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading platform for academia-industry collaboration in India, 
                fostering innovation, skill development, and career readiness among students 
                while supporting industries in finding and nurturing talent that meets their 
                evolving needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/30 dark:bg-gray-900/30">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              What Makes Us <span className="text-primary">Different</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach to internship management sets new standards in the industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Student-Centric Approach",
                description: "Designed with students at the center, providing them with tools to discover, apply, and track their internship journey seamlessly."
              },
              {
                icon: Building2,
                title: "Industry Integration",
                description: "Direct collaboration with leading companies and organizations to ensure relevant, high-quality internship opportunities."
              },
              {
                icon: Users,
                title: "Faculty Empowerment",
                description: "Comprehensive tools for faculty to monitor, guide, and evaluate student progress throughout their internship experience."
              },
              {
                icon: BookOpen,
                title: "Skill Development",
                description: "Pre-internship training modules and continuous skill assessment to ensure students are industry-ready."
              },
              {
                icon: CheckCircle2,
                title: "NEP 2020 Compliance",
                description: "Fully aligned with National Education Policy 2020 guidelines for experiential learning and credit integration."
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description: "Rigorous quality checks and feedback mechanisms to ensure the highest standards of internship experiences."
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-muted-foreground">Numbers that reflect our commitment to excellence</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Students Registered" },
              { number: "500+", label: "Partner Companies" },
              { number: "200+", label: "Educational Institutions" },
              { number: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;