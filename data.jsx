import { CiMap } from "react-icons/ci";
import { FaImages, FaCreditCard } from "react-icons/fa"; 

export const cardData = [
  {
    id: 1,
    img: <CiMap />,
    title: "Books Library",
    description: "The gradual accumulation of information about atomic and small-scale behaviour...",
    color: "#E74040",
    bgColor: "#FFDCD1",
  },
  {
    id: 2,
    img: <FaImages />,
    title: "Market Analysis",
    description: "The gradual accumulation of information about atomic and small-scale behaviour...",
    color: "#2DC071",
    bgColor: "#B9EAA8",
  },
  {
    id: 3,
    img: <FaCreditCard />,
    title: "50+ online courses",
    description: "The gradual accumulation of information about atomic and small-scale behaviour...",
    color: "#23A6F0",
    bgColor: "#B2E3FF",
  },
];
export const coursesData = [
  {
    id: 1,
    img: "./public/assets/images/6.jpg",
    department: "Graphic Design",
    title: "UI & UX Design",
    rating: "4.7",
    description:
      "Unlock your creativity with our UI & UX course! Learn essential design principles, master industry-leading tools, and create stunning visuals to bring your ideas to life.",
    sales: "80",
    price: "$11.99",
    discount: "$4.99",
    duration: "22hr 30min",
    lessons: "64 Lessons",
  },
  {
    id: 2,
    img: "./public/assets/images/1.jpg",
    department: "Web Development",
    title: "Full Stack Web Development",
    rating: "4.8",
    description:
      "Become a full stack developer by mastering HTML, CSS, JavaScript, React, Node.js and MongoDB. Build real-world projects from scratch. creativity",
    sales: "120",
    price: "$19.99",
    discount: "$9.99",
    duration: "40hr 00min",
    lessons: "120 Lessons",
  },
  {
    id: 3,
    img: "./public/assets/images/2.jpg",
    department: "Marketing",
    title: "Digital Marketing Mastery",
    rating: "4.6",
    description:
      "Learn SEO, content marketing, social media strategies, email marketing and analytics to become a digital marketing expert,master industry-leading tools, .",
    sales: "95",
    price: "$15.99",
    discount: "$6.99",
    duration: "30hr 15min",
    lessons: "85 Lessons",
  },
];

export const ratingData = [
  {
    id: 1,
    stars: "★★★★★",
    img: "./public/assets/images/3.jpg",
    description:
      "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it to anyone looking to learn!",
    name: "Gamal Mahmoud",
    job: "Software Engineer",
  },
  {
    id: 2,
    stars: "★★★★☆",
    img: "./public/assets/images/4.jpg",
    description:
      "The course was very informative and the explanations were clear. The projects were practical and really helped reinforce what I learned.",
    name: "Omar Mohamed",
    job: "Developer",
  },
  {
    id: 3,
    stars: "★★★★★",
    img: "./public/assets/images/5.jpg",
    description:
      "I loved this course! Everything was easy to follow, and I now feel more confident in my skills. Great for beginners and professionals alike!",
    name: "Islam Tarek",
    job: "Designer",
  },
];