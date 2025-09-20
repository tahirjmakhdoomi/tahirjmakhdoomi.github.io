import type { PortfolioData } from './types';

// --- EDIT THIS SECTION TO UPDATE YOUR PORTFOLIO ---
export const portfolioData: PortfolioData = {
  name: "Tahir Javed",
  profileImage: "/me.jpg",
  title: "PhD @ AI4Bharat, Computer Science & Engineering",
  university: "Indian Institute of Technology Madras",
  about: "I'm a PhD student at IIT Madras, working in the AI4Bharat lab with Dr. Mitesh M. Khapra. My research focuses on building speech technology for low-resource languages, especially those spoken across India. I work on developing accurate speech recognition systems, creating high-quality benchmarks, and collecting diverse datasets. I'm also exploring how these systems can keep learning over time as new languages and data are added. My goal is to make speech technology useful and accessible for everyone, no matter what language they speak.",
  researchInterests: [
    "Speech Recognition",
    "Multilingual ASR",
    "Low-Resource Languages",
    "Continual Learning",
    "Natural Language Processing"
  ],
  // experience: [
  //   {
  //     role: "Teaching Assistant",
  //     organization: "Indian Institute of Technology Madras",
  //     duration: "Jul 2021 - Nov 2022",
  //     description: "Assisted in teaching Linear Algebra and Random Processes (CS6015 & CS6015) and Fundamentals of Deep Learning (CS6910)."
  //   },
  //   {
  //     role: "Software Engineer",
  //     organization: "CGI Information Systems and Management Consultations",
  //     duration: "Dec 2020 - Jan 2021",
  //     description: "Worked as a Java Backend Developer."
  //   },
  //   {
  //     role: "Full Stack Trainee – Immersive Batch",
  //     organization: "Stackroute - NIIT",
  //     duration: "Sep 2020 - Dec 2020",
  //     description: "Worked on front-end, back-end, and integration of web apps with hands-on experience in Angular, JavaScript, HTML, CSS, Bootstrap, Spring Boot, Java, MySQL, MongoDB, Docker, and Grafana."
  //   },
  //   {
  //     role: "Research Intern",
  //     organization: "Computational Intelligence Lab - IISc",
  //     duration: "Dec 2018 - Feb 2019",
  //     description: "Worked on SafalFasal, an automatic crop monitoring system for sugarcane. Built and deployed an end-to-end inference engine using Flask, FastAI, an Android App, and Google Cloud Engine."
  //   },
  //   {
  //     role: "Java/Android Trainee",
  //     organization: "CETPA Infotech Pvt. Ltd.",
  //     duration: "Dec 2017 - Jan 2018",
  //     description: "Trained on the fundamentals of Java and Android development."
  //   }
  // ],
  publications: [
    {
      title: "NIRANTAR: Continual Learning with New Languages and Domains on Real-world Speech Data",
      authors: "Tahir Javed, Kaushal Bhogale, Mitesh M. Khapra",
      journal: "Interspeech, 2025",
      link: "https://arxiv.org/abs/2507.00534",
    },
    {
      title: "Recognizing Every Voice: Towards Inclusive ASR for Rural Bhojpuri Women",
      authors: "Sakshi Joshi, Eldho Ittan George, Tahir Javed, Kaushal Bhogale, Nikhil Narasimhan, Mitesh M. Khapra",
      journal: "Interspeech, 2025",
      link: "https://arxiv.org/abs/2506.09653",
    },
    {
      title: "Towards Bringing Parity in Pretraining Datasets for Low-resource Indian Languages",
      authors: "Kaushal Santosh Bhogale, Deovrat Mehendale, Tahir Javed, Devbrat Anuragi, Sakshi Joshi, Sai Sundaresan, Aparna Ananthanarayanan, Sharmistha Dey, Sathish Kumar Reddy G, Anusha Srinivasan, Abhigyan Raman, Pratyush Kumar, Mitesh M. Khapra",
      journal: "ICASSP, 2025",
      link: "https://ieeexplore.ieee.org/document/10888018",
    },
    {
      title: "LAHAJA: A Robust Multi-accent Benchmark for Evaluating Hindi ASR Systems",
      authors: "Tahir Javed, Janki Nawale, Sakshi Joshi, Eldho George, Kaushal Bhogale, Deovrat Mehendale, Mitesh M. Khapra",
      journal: "Interspeech, 2024",
      link: "https://arxiv.org/abs/2408.11440",
    },
    {
      title: "IndicVoices: Towards building an Inclusive Multilingual Speech Dataset for Indian Languages",
      authors: "Tahir Javed, Janki Nawale, Eldho George, Sakshi Joshi, Kaushal Bhogale, Deovrat Mehendale, Ishvinder Sethi, Aparna Ananthanarayanan, Hafsah Faquih, Pratiti Palit, Sneha Ravishankar, Saranya Sukumaran, Tripura Panchagnula, Sunjay Murali, Kunal Gandhi, Ambujavalli R, Manickam M, C Vaijayanthi, Krishnan Karunganni, Pratyush Kumar, Mitesh Khapra",
      journal: "ACL, 2024" ,
      link: "https://arxiv.org/abs/2403.01926",
    },
    {
      title: "Svarah: Evaluating English ASR Systems on Indian Accents",
      authors: "Tahir Javed, Sakshi Joshi, Vignesh Nagarajan, Sai Sundaresan, Janki Nawale, Abhigyan Raman, Kaushal Bhogale, Pratyush Kumar, Mitesh M. Khapra",
      journal: "Interspeech, 2023",
      link: "https://arxiv.org/abs/2305.15760",
    },
    {
      title: "Vistaar: Diverse Benchmarks and Training Sets for Indian Language ASR",
      authors: "Kaushal Santosh Bhogale, Sai Sundaresan, Abhigyan Raman, Tahir Javed, Mitesh M. Khapra, Pratyush Kumar",
      journal: "Interspeech, 2023",
      link: "https://arxiv.org/abs/2305.15386",
    },
    {
      title: "IndicSUPERB: A Speech Processing Universal Performance Benchmark for Indian languages",
      authors: "Tahir Javed, Kaushal Santosh Bhogale, Abhigyan Raman, Anoop Kunchukuttan, Pratyush Kumar, Mitesh M. Khapra",
      journal: "AAAI, 2023",
      link: "https://arxiv.org/abs/2208.11761",
    },
    {
      title: "Effectiveness of Mining Audio and Text Pairs from Public Data for Improving ASR Systems for Low-Resource Languages",
      authors: "Kaushal Santosh Bhogale, Abhigyan Raman, Tahir Javed, Sumanth Doddapaneni, Anoop Kunchukuttan, Pratyush Kumar, Mitesh M. Khapra",
      journal: "ICASSP, 2022",
      link: "https://arxiv.org/abs/2208.12666",
    },
    {
      title: "Towards Building ASR Systems for the Next Billion Users",
      authors: "Tahir Javed, Sumanth Doddapaneni, Abhigyan Raman, Kaushal Santosh Bhogale, Gowtham Ramesh, Anoop Kunchukuttan, Pratyush Kumar, Mitesh M. Khapra",
      journal: "AAAI, 2022",
      link: "https://arxiv.org/abs/2111.03945",
    },
     {
      title: "Deep Learning Methods for Diabetic Retinopathy Detection",
      authors: "Tahir Javed, Sheema Parwaz, Janibul Bashir",
      journal: "2022, Accepted as a Chapter in Application of Deep Learning Methods in Healthcare and Medical Science",
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003303855-6/deep-learning-methods-diabetic-retinopathy-detection-tahir-javed-sheema-parwaz-janibul-bashir",
    },
    {
      title: "Disease Recognition in Sugarcane Crop Using Deep Learning",
      authors: "Hashmat Shadab Malik, Mahavir Dwivedi, S. N. Omkar, Tahir Javed, Abdul Bakey, Mohammad Raqib Pala, Akshay Chakravarthy ",
      journal: "Advances in Artificial Intelligence and Data Engineering, 2019",
      link: "https://link.springer.com/chapter/10.1007/978-981-15-3514-7_17",
    },
  ],
  awards: [
      { name: "Microsoft Research India PhD Award Recipient", year: "2024", link: "https://www.microsoft.com/en-us/research/academic-program/microsoft-research-india-phd-award/" },
      { name: "Google PhD Fellowship Recipient", year: "2022", link: "https://research.google/programs-and-events/phd-fellowship/recipients/?filtertab=2022" },
      { name: "PMRF Recipient", year: "2021" },
      { name: "Departmental rank 2nd in BTech", year: "" },
      { name: "Certificate of Honor from CETPA for remarkable performance", year: "" },
  ],
  news: [
      { date: "Jun 2025", title: "Our paper 'Recognizing Every Voice' received the Best Theme Paper Award at Interspeech 2025." },
      { date: "Jun 2025", title: "Our paper 'Nirantar' has been accepted to Interspeech 2025." },
      { date: "Jun 2024", title: "Received the Microsoft Research India PhD Award."},
      { date: "Jun 2024", title: "Our paper 'LAHAJA' was accepted to Interspeech 2024." },
      { date: "May 2024", title: "Our paper 'IndicVoices' was accepted to Findings of ACL 2024." },
      { date: "May 2023", title: "Our paper 'Svarah' has been accepted to Interspeech 2023." },
      { date: "Oct 2022", title: "Received the Google PhD Fellowship." },
      { date: "Jul 2021", title: "Received the PMRF Fellowship." },
  ],
  contact: {
    email: "mailto:tahirjmakhdoomi@gmail.com",
    cv: "/cv/cv.pdf",
    googleScholar: "https://scholar.google.com/citations?user=MGsT47cAAAAJ",
    linkedin: "https://www.linkedin.com/in/tahirjmakhdoomi",
    github: "https://github.com/tahirjmakhdoomi",
    twitter: "https://x.com/tahirjmakhdoomi",
  },
  navItems: [
    { id: 'about', label: 'About' },
    { id: 'news', label: 'News' },
    { id: 'publications', label: 'Publications' },
    { id: 'awards', label: 'Awards' },
  ],
};
// --- END OF EDITABLE SECTION ---
