const profile = {
  nama_lengkap: "Zein Irfansyah",
  email: "12.zeinirfansyah@gmail.com",
  phone: "+62 895613982082",
  address:
    "Kp. Cibodas Pasar, RT. 01/03, Desa Mekarwangi, Kecamatan Cisayong, Kabupaten Tasikmalaya, Jawa Barat 46153",
  socialMedia: [
    {
      id_socmed: 1,
      logo_socmed: "../assets/images/discord1.svg",
      name_socmed: "Discord Server",
      url_socmed: "",
    },
    {
      id_socmed: 2,
      logo_socmed: "../assets/images/github1.svg",
      name_socmed: "Github",
      url_socmed: "",
    },
    {
      id_socmed: 3,
      logo_socmed: "../assets/images/linkedin1.svg",
      name_socmed: "LinkedIn",
      url_socmed: "",
    },
    {
      id_socmed: 4,
      logo_socmed: "../assets/images/instagram1.svg",
      name_socmed: "Instagram",
      url_socmed: "",
    },
  ],

  foto: [
    {
      id_foto: 1,
      name_foto: "foto1",
      url_foto: "../assets/images/foto1.jpg",
    },
    {
      id_foto: 2,
      name_foto: "foto2",
      url_foto: "../assets/images/foto2.jpg",
    },
    {
      id_foto: 3,
      name_foto: "foto3",
      url_foto: "../assets/images/foto3.jpg",
    },
  ],
};

const projects = [
  {
    id_projects: 1,
    name_projects: "SIPERPUS",
    url_projects: "https://github.com/zeinirfansyah/siperpus",
    img_projects: "../../assets/images/x.png",
    description_projects:
      "Sistem informasi perpustakaan SMKS Daarul Abroor Tasikmalaya",
  },
  {
    id_projects: 2,
    name_projects: "Rest API Aplikasi Wisata",
    url_projects: "https://github.com/zeinirfansyah/wisata_RestAPI",
    img_projects: "../../assets/images/x.png",
    description_projects:
      "Rest API fitur CRUD untuk aplikasi pemetaan objek wisata",
  },
  {
    id_projects: 3,
    name_projects: "Online Course Website",
    url_projects: "https://github.com/zeinirfansyah/online_course_v2",
    img_projects: "../../assets/images/x.png",
    description_projects: "Website untuk belajar online berbasis video.",
  },
  {
    id_projects: 4,
    name_projects: "Chat Bot Discord",
    url_projects: "https://github.com/zeinirfansyah/discord_chat_bot",
    img_projects: "../../assets/images/x.png",
    description_projects:
      "Chat bot discord untuk mengirimkan pesan ke server discord.",
  },
  {
    id_projects: 5,
    name_projects: "Music Bot Discord",
    url_projects: "music_bot_discord",
    img_projects: "../../assets/images/x.png",
    description_projects: "Music bot discord.",
  },
  {
    id_projects: 6,
    name_projects: "Aplikasi Pemetaan Objek Wisata",
    url_projects: "https://github.com/zeinirfansyah/wisata_lbs",
    img_projects: "../../assets/images/x.png",
    description_projects: "Aplikasi wisata berbasis android.",
  },
  {
    id_projects: 7,
    name_projects: "Tupay - Tuition Payment",
    url_projects: "https://github.com/zeinirfansyah/tupay",
    img_projects: "../../assets/images/x.png",
    description_projects: "Aplikasi pembayaran uang sekolah berbasis desktop.",
  },
  {
    id_projects: 8,
    name_projects: "Uangku",
    url_projects: "https://github.com/zeinirfansyah/uangku",
    img_projects: "../../assets/images/x.png",
    description_projects: "Aplikasi pengelolaan keuangan berbasis web.",
  },
];

const skills = [
  {
    id_skills: 1,
    logo_skills: "",
    title_skills: "HTML",
    level_skills: "advanced",
  },
  {
    id_skills: 2,
    logo_skills: "",
    title_skills: "CSS",
    level_skills: "advanced",
  },
  {
    id_skills: 3,
    logo_skills: "../assets/images/js-img.svg",
    title_skills: "JavaScript",
    level_skills: "Intermediate",
  },
  {
    id_skills: 4,
    logo_skills: "../assets/images/react-img.svg",
    title_skills: "React",
    level_skills: "Basic",
  },
  {
    id_skills: 5,
    logo_skills: "../assets/images/node-img.svg",
    title_skills: "Node Js",
    level_skills: "Basic",
  },
  {
    id_skills: 6,
    logo_skills: "../assets/images/express-img.svg",
    title_skills: "Express Js",
    level_skills: "Basic",
  },
  {
    id_skills: 7,
    logo_skills: "../assets/images/php-img.svg",
    title_skills: "PHP",
    level_skills: "Intermediate",
  },
  {
    id_skills: 8,
    logo_skills: "../assets/images/mysql-img.svg",
    title_skills: "MySQL",
    level_skills: "Intermediate",
  },
  {
    id_skills: 9,
    logo_skills: "",
    title_skills: "Java",
    level_skills: "Basic",
  },
  {
    id_skills: 10,
    logo_skills: "",
    title_skills: "Kotlin",
    level_skills: "Basic",
  },
  {
    id_skills: 11,
    logo_skills: "",
    title_skills: "Python",
    level_skills: "Intermediate",
  },
];

const experiences = [
  {
    id_experiences: 1,
    title_experiences: "Web Developer",
    company_experiences: "SMKS Daarul Abroor Tasikmalaya",
    date_experiences: "April 2022 - February 2023",
    description_experiences:
      "I am working as a web developer in SMKS Daarul Abroor. I am responsible for developing the library management system of SMKS Daarul Abroor Tasikmalaya using PHP and MySQL.",
  },
  {
    id_experiences: 2,
    title_experiences: "Commite of KSPM Goes To School",
    company_experiences: "Kelompok Studi Pasar Modal UTY",
    date_experiences: "March 2022 - April 2022",
    description_experiences:
      "I am responsible for creating virtual zoom design concept, creating banner and certificates design for GTS activities, and collaboration with other division to ensure everything's going well.",
  },
];

const educations = [
  {
    id_educations: 1,
    title_educations: "Universitas Teknologi Yogyakarta",
    subtitle_educations: "Informatics",
    date_educations: "2019 - 2023",
    gpa_educations: "3.83",
  },
  {
    id_educations: 2,
    title_educations: "SMAN 6 Tasikmalaya",
    subtitle_educations: "Ilmu Pengetahuan Alam",
    date_educations: "2016 - 2019",
    gpa_educations: "-",
  },
];

const certificates = [
  {
    id_certificates: 1,
    title_certificates: "Android App Development with Kotlin",
    source_certificates: "Udemy",
    date_certificates: "Oktober 2022",
    link_certificates:
      "https://www.udemy.com/certificate/UC-f6a5290e-a9be-4dc9-ab90-2d18a3ecda0f/",
  },
  {
    id_certificates: 2,
    title_certificates: "The Complete Java Programming",
    source_certificates: "Udemy",
    date_certificates: "April 2021",
    link_certificates:
      "https://www.udemy.com/certificate/UC-de8922c6-bb67-41d8-ac34-1515bf14fcb1/",
  },
  {
    id_certificates: 3,
    title_certificates: "PHP & MySQL Certification Course",
    source_certificates: "You Accel",
    date_certificates: "November 2020",
    link_certificates:
      "https://youaccel.com/admin/certificate_gen/tcpdf/ya/certificate_ya2.php?certid=66756520",
  },
  {
    id_certificates: 4,
    title_certificates: "The Web Development Beginner's Bootcamp",
    source_certificates: "Udemy",
    date_certificates: "June 2020",
    link_certificates:
      "https://www.udemy.com/certificate/UC-202d0285-cf15-4dc5-91fa-4741ba786665/",
  },
];

export default {
  profile,
  projects,
  skills,
  experiences,
  educations,
  certificates,
};
