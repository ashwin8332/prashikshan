# Prashikshan - Academia Industry Interface Platform

A comprehensive web application built with React and TypeScript for managing internship programs under NEP 2020 guidelines. This platform bridges the gap between academia and industry by providing seamless internship management, skill development, and collaborative learning opportunities.

## 🚀 Features

### 📚 **7 Integrated Modules**

1. **Student-Centered Internship Portal** - Discover, apply, and track internship opportunities
2. **Industry Collaboration Module** - Companies can post opportunities and manage applications
3. **Faculty & Admin Panel** - Comprehensive monitoring and approval system
4. **Skill Readiness & Learning Resources** - Pre-internship training and assessments
5. **Automatic Logbook & Report Generator** - Real-time documentation and NEP-compliant reports
6. **Credit Integration System** - Seamless academic credit management
7. **Notifications & Alerts** - Real-time communication and updates

### 🎯 **NEP 2020 Compliant**

- **Experiential Learning** - Hands-on industry experience
- **Credit-Based Evaluation** - Academic integration with proper assessment
- **Semester 5 Focus** - Designed for 5th semester internships in 4-year programs
- **Industry Integration** - Direct collaboration with government and private sectors

## 🛠️ **Technology Stack**

- **Frontend**: React 19+ with TypeScript
- **Styling**: Tailwind CSS with responsive design
- **State Management**: TanStack Query for server state
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **UI Components**: Lucide React icons
- **Form Handling**: React Hook Form with Zod validation

## 🏃‍♂️ **Getting Started**

### Prerequisites

- Node.js 18+ and npm
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prashikshan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 **Project Structure**

```
src/
├── components/          # Reusable UI components
│   └── Layout/         # Layout components (Header, Footer)
├── pages/              # Main application pages
│   ├── Auth/           # Authentication pages
│   ├── Student/        # Student portal pages
│   ├── Industry/       # Industry partner pages
│   ├── Faculty/        # Faculty dashboard pages
│   └── Admin/          # Admin panel pages
├── assets/             # Static assets
└── styles/             # Global styles and Tailwind CSS

```

## 👥 **User Roles & Features**

### **Students**
- Browse and search internship opportunities
- Apply for internships with profile matching
- Track application status and progress
- Take skill assessments and training modules
- Generate and submit reports
- Manage academic credits

### **Industry Partners**
- Post internship opportunities
- Review and manage student applications
- Track intern performance and progress
- Provide feedback and evaluations
- Access talent pool and analytics

### **Faculty Members**
- Monitor student internship activities
- Approve/reject internship applications
- Generate comprehensive reports
- Provide guidance and support
- Manage academic credit integration

### **Administrators**
- Oversee entire platform operations
- Manage user accounts and permissions
- Generate system-wide analytics
- Configure platform settings
- Ensure NEP 2020 compliance

## 🎨 **Design System**

The application uses a modern, accessible design system built with:
- **Primary Colors**: Blue gradient (#0ea5e9 to #075985)
- **Typography**: Inter font family for readability
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 compliant components

## 🚀 **Deployment**

The application can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder after building
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is developed for the Government of Jammu and Kashmir, Higher Education Department, in accordance with NEP 2020 guidelines.

## 📞 **Support**

For support and queries related to the Prashikshan platform, please contact:
- **Technical Support**: [Contact Information]
- **Academic Queries**: [Faculty Coordinator]
- **Industry Partnerships**: [Industry Relations Team]

---

**Prashikshan** - Transforming education through industry collaboration under NEP 2020 🎓

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```