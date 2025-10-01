import { z } from 'zod';

// Schema for validation
export const internshipEvaluationSchema = z.object({
  internId: z.string(),
  studentName: z.string().min(1, "Student name is required"),
  internshipPosition: z.string().min(1, "Internship position is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  
  // Rating scales
  technicalSkills: z.number().min(1).max(5),
  communication: z.number().min(1).max(5),
  problemSolving: z.number().min(1).max(5),
  teamwork: z.number().min(1).max(5),
  initiative: z.number().min(1).max(5),
  adaptability: z.number().min(1).max(5),
  workEthic: z.number().min(1).max(5),
  
  // Comments
  strengthsComments: z.string().min(1, "Please provide comments on strengths"),
  improvementComments: z.string().min(1, "Please provide comments on areas for improvement"),
  additionalComments: z.string().optional(),
  
  // Project details
  projectDetails: z.string().min(1, "Project details are required"),
  projectOutcome: z.string().min(1, "Project outcome is required"),
  
  // Overall assessment
  overallRating: z.number().min(1).max(5),
  hireRecommendation: z.enum(['yes', 'no', 'maybe']),
  letterGrade: z.enum(['A', 'B', 'C', 'D', 'F']).optional(),
});

export type InternshipEvaluation = z.infer<typeof internshipEvaluationSchema>;

// Default empty evaluation (for form initialization)
export const emptyEvaluation: InternshipEvaluation = {
  internId: '',
  studentName: '',
  internshipPosition: '',
  startDate: '',
  endDate: '',
  
  technicalSkills: 0,
  communication: 0,
  problemSolving: 0,
  teamwork: 0,
  initiative: 0,
  adaptability: 0,
  workEthic: 0,
  
  strengthsComments: '',
  improvementComments: '',
  additionalComments: '',
  
  projectDetails: '',
  projectOutcome: '',
  
  overallRating: 0,
  hireRecommendation: 'maybe',
};

// Sample data for testing
export const sampleEvaluations: InternshipEvaluation[] = [
  {
    internId: 'intern-001',
    studentName: 'Priya Sharma',
    internshipPosition: 'Full Stack Developer',
    startDate: '2023-05-15',
    endDate: '2023-08-15',
    
    technicalSkills: 4,
    communication: 3,
    problemSolving: 4,
    teamwork: 5,
    initiative: 4,
    adaptability: 4,
    workEthic: 5,
    
    strengthsComments: 'Priya demonstrated excellent problem-solving skills and was quick to adapt to new technologies. She was proactive in seeking clarification and feedback.',
    improvementComments: 'Could work on communication skills, particularly in technical documentation.',
    additionalComments: 'Would be a great addition to any development team.',
    
    projectDetails: 'Developed a customer analytics dashboard using React, Node.js, and MongoDB.',
    projectOutcome: 'Successfully completed and deployed the dashboard, resulting in improved customer insights.',
    
    overallRating: 4,
    hireRecommendation: 'yes',
    letterGrade: 'A',
  },
  {
    internId: 'intern-002',
    studentName: 'Michael Johnson',
    internshipPosition: 'UX/UI Designer',
    startDate: '2023-05-22',
    endDate: '2023-08-22',
    
    technicalSkills: 5,
    communication: 4,
    problemSolving: 3,
    teamwork: 4,
    initiative: 3,
    adaptability: 4,
    workEthic: 4,
    
    strengthsComments: 'Michael has exceptional design skills and a keen eye for detail. His work consistently exceeded expectations.',
    improvementComments: 'Could benefit from taking more initiative on self-directed projects.',
    additionalComments: 'Showed great potential in UI animation and interaction design.',
    
    projectDetails: 'Redesigned the company\'s mobile application interface and created a comprehensive UI kit.',
    projectOutcome: 'New design resulted in 30% improvement in user engagement metrics during testing.',
    
    overallRating: 4,
    hireRecommendation: 'yes',
    letterGrade: 'A',
  }
];