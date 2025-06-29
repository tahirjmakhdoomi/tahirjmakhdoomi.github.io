import type { PortfolioData } from './types';

// --- EDIT THIS SECTION TO UPDATE YOUR PORTFOLIO ---
export const portfolioData: PortfolioData = {
  name: "Tahir Javed",
  profileImage: "/me.jpg",
  title: "PhD @ AI4Bharat, Computer Science & Engineering",
  university: "Indian Institute of Technology Madras",
  about: "I’m a PhD student at IIT Madras, working in the AI4Bharat lab with Dr. Mitesh M. Khapra. My research focuses on building speech technology for low-resource languages, especially those spoken across India. I work on developing accurate speech recognition systems, creating high-quality benchmarks, and collecting diverse datasets. I’m also exploring how these systems can keep learning over time as new languages and data are added. My goal is to make speech technology useful and accessible for everyone, no matter what language they speak.",
  researchInterests: [
    "Speech Recognition",
    "Multilingual ASR",
    "Low-Resource Languages",
    "Continual Learning",
    "Natural Language Processing"
  ],
  experience: [
    {
      role: "Teaching Assistant",
      organization: "Indian Institute of Technology Madras",
      duration: "Jul 2021 - Nov 2022",
      description: "Assisted in teaching Linear Algebra and Random Processes (CS6015 & CS6015) and Fundamentals of Deep Learning (CS6910)."
    },
    {
      role: "Software Engineer",
      organization: "CGI Information Systems and Management Consultations",
      duration: "Dec 2020 - Jan 2021",
      description: "Worked as a Java Backend Developer."
    },
    {
      role: "Full Stack Trainee – Immersive Batch",
      organization: "Stackroute - NIIT",
      duration: "Sep 2020 - Dec 2020",
      description: "Worked on front-end, back-end, and integration of web apps with hands-on experience in Angular, JavaScript, HTML, CSS, Bootstrap, Spring Boot, Java, MySQL, MongoDB, Docker, and Grafana."
    },
    {
      role: "Research Intern",
      organization: "Computational Intelligence Lab - IISc",
      duration: "Dec 2018 - Feb 2019",
      description: "Worked on SafalFasal, an automatic crop monitoring system for sugarcane. Built and deployed an end-to-end inference engine using Flask, FastAI, an Android App, and Google Cloud Engine."
    },
    {
      role: "Java/Android Trainee",
      organization: "CETPA Infotech Pvt. Ltd.",
      duration: "Dec 2017 - Jan 2018",
      description: "Trained on the fundamentals of Java and Android development."
    }
  ],
  publications: [
    {
      title: "LAHAJA: A Robust Multi-accent Benchmark for Evaluating Hindi ASR Systems",
      authors: "Javed et al.",
      journal: "2024, Accepted in Interspeech",
      link: "#",
    },
    {
      title: "IndicVoices: Towards building an Inclusive Multilingual Speech Dataset for Indian Languages",
      authors: "Javed et al.",
      journal: "2024, Accepted in Findings at ACL",
      link: "#",
    },
    {
      title: "Svarah: Evaluating English ASR Systems on Indian Accents",
      authors: "Javed et al.",
      journal: "2023, Accepted at Interspeech",
      link: "#",
    },
    {
      title: "IndicSUPERB: A Speech Processing Universal Performance Benchmark for Indian languages",
      authors: "Javed et al.",
      journal: "2023, Accepted at AAAI Conference on Artificial Intelligence",
      link: "#",
    },
    {
      title: "Towards Building ASR Systems for the Next Billion Users",
      authors: "Javed et al.",
      journal: "2022, Accepted at AAAI Conference on Artificial Intelligence",
      link: "#",
    },
     {
      title: "Deep Learning Methods for Diabetic Retinopathy Detection",
      authors: "Javed et al.",
      journal: "2022, Accepted as a Chapter in Application of Deep Learning Methods in Healthcare and Medical Science",
      link: "#",
    },
    {
      title: "Disease Recognition in Sugarcane Crop Using Deep Learning",
      authors: "Malik et al.",
      journal: "2019, Accepted at Advances in Artificial Intelligence and Data Engineering",
      link: "#",
    },
  ],
  awards: [
      { name: "Microsoft Research India PhD Award Recipient", year: "2024", link: "#" },
      { name: "Google PhD Fellowship Recipient", year: "2022", link: "#" },
      { name: "PMRF Recipient", year: "2021" },
      { name: "Departmental rank 2nd in BTech", year: "" },
      { name: "Certificate of Honor from CETPA for remarkable performance", year: "" },
  ],
  news: [
      { date: "June 2025", title: "Our paper 'Nirantar' has been accepted to Interspeech 2025.", link: "#" },
      { date: "2024", title: "Received the Microsoft Research India PhD Award.", link: "#" },
      { date: "2024", title: "Our paper 'LAHAJA' was accepted to Interspeech 2024.", link: "" },
      { date: "2024", title: "Our paper 'IndicVoices' was accepted to Findings of ACL 2024." },
      { date: "2023", title: "Presented our work on Indian English ASR at Interspeech 2023." },
      { date: "2022", title: "Received the Google PhD Fellowship." },
  ],
  contact: {
    email: "tahirjmakhdoomi@gmail.com",
    cv: "#",
    googleScholar: "#",
    linkedin: "https://www.linkedin.com/in/tahirjmakhdoomi",
    github: "https://github.com/tahirjmakhdoomi",
    twitter: "#",
  },
};
// --- END OF EDITABLE SECTION ---