/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ricardo's Portfolio",
  description:
    "A passionate individual who always seeks to learn and develop complete systems in the area of ​​systems integration, especially in the ​​traceability field.",
  og: {
    title: "Ricardo Dias Portfolio",
    type: "website",
    url: "http://ricardodias.pt/",
  },
};

//Home Page
const greeting = {
  title: "Ricardo Dias",
  logo_name: "ricardodias",
  nickname: "rycardodias",
  subTitle:
    "A passionate individual who always seeks to learn and develop complete systems in the area of ​​systems integration, especially in the ​​traceability field.",
  resumeLink: "",
  portfolio_repository: "https://github.com/rycardodias",
  githubProfile: "https://github.com/rycardodias",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ricardodias98@gmail.com",
  // gitlab: "https://gitlab.com/ricardodias98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/rycardodias",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ricardo-dias-31890b12a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Email",
    link: "mailto:rycardo.dias@hotmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rycardo.dias/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Database Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Design databases and ERD based on your business Model",
        "⚡ Development in SQL or NoSQL based on the project requirements",
        "⚡ Create scripts, triggers and procedures to better running and security.",
      ],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Microsoft SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Oracle",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "My SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Next JS framework",
        "⚡ Developing mobile applications using React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node & Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next JS",
          fontAwesomeClassname: "simple-icons:next-dot-js",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Instituto Politécnico de Viana do Castelo",
      subtitle: "Master in Informatic Engineering",
      logo_path: "ipvc.png",
      alt_name: "IPVC",
      duration: "2021 - present",
      descriptions: [
        "⚡ I have studied new concepts in the software development environment like GeoReferenciation, UI/UX practices, ML models etc.",
        "⚡ Also i have done some research about blockchain technologies and databases in general that may be my main work in future.",
        "⚡ Like i did in my degree, i am currently working in a research program which i have to create a tracebility application to the industry 4.0.",
      ],
      website_link: "https://www.ipvc.pt/estg/",
    },
    {
      title: "Instituto Politécnico de Viana do Castelo",
      subtitle: "Degree in Informatic Engineering",
      logo_path: "ipvc.png",
      alt_name: "IPVC",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Web development, Java, RPA, Server Configuration and more.",
        "⚡ I was selected for a research program which i have worked on developing a full stack tracebility web & mobile app.",
      ],
      website_link: "https://www.ipvc.pt/estg/",
    },

  ],
};

//TODO: continue here

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked mainly on the backend software development in the areas of database development and maintenance, API development and systems integration." +
    "I have also worked with web and mobile development and Robotic Process Automations (RPA).",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Blockchain & Backend Developer",
          company: "Instituto Politécnico de Viana do Castelo",
          company_url: "https://www.ipvc.pt/estg/",
          logo_path: "ipvc.png",
          duration: "May 2022 - present",
          location: "Viana do Castelo, Portugal",
          description:
            "I am currently developing a backend environment to integrate blockchain and off-chain data to serve an web application as a backoffice to the end users.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "Instituto Politécnico de Viana do Castelo",
          company_url: "https://www.ipvc.pt/estg/",
          logo_path: "ipvc.png",
          duration: "Fev 2021 - Fev 2022",
          location: "Viana do Castelo, Portugal",
          description:
            "I have been on a research project where I built a traceability platform to trace autochthonous animals and species. I had built the full stack project from the server to the user interface.",
          color: "#fc1f20",
        },
        {
          title: "Oracle PL/SQL Developer",
          company: "Edisa S.A",
          company_url: "https://www.edisa.com/",
          logo_path: "edisa.png",
          duration: "Fev 2019 - May 2020",
          location: "Vigo, España",
          description:
            "I have worked in the development of Oracle Reports & Forms, Oracle Bi Publisher and PL/SQL general queries and development in a full ERP environment.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Visual Studio Developer",
          company: "Paritor Ltd.",
          company_url: "https://paritor.com/",
          logo_path: "paritor.png",
          duration: "May 2016 - Jul 2016",
          location: "Exeter, England, UK",
          description:
            "I have learn the basics of Visual Basic development and the concepts of programming and engineering during my high school intership.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Application Programming Interfaces (API) in many contexts and deploy them in a production environment.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications in an academic environment.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "10.23919/CISTI52073.2021.9476327",
      name: "A Blockchain-based platform for reliably tracing political contacts",
      createdAt: "2021-06-21",
      description: "Corruption is an evil that affects not only the most oppressive and totalitarian regimes, but also, albeit to a lesser extent, democratic regimes. The difference largely consists in the mechanisms for combating corruption and in the transparency between political relations and other economic interests. The transparency associated with the possibility of tracking \"interests\" is one of the mechanisms that can be implemented in democracy. This article, after a brief overview about how the transparency of political relations can guarantee less corruption, presents a blockchain-based platform for tracking political contacts. All the concepts involved in the platform and its development are covered in detail, and several examples are presented. The proposed platform excels in data consistency, security and immutability, demonstrating enormous reliability and transparency towards users.",
      url:
        "https://ieeexplore.ieee.org/document/9476327",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on some social media. You can message me, I will reply within 12 hours. I can help you with Server configurations, ExpressJS, React, NextJS and all kind of database Development.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://ricardodias.wordpress.com",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle:
      "Av. do Atlântico 644 4900, Viana do Castelo, Portugal",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/GL8AjcvkvMrNFY4R9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+351 932673577",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
