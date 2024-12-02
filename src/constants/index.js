export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Thomas Chu",
    position: "Vice President of Tradelink Electronics Commerce Limited - IT Development (PTS)",
    img: "assets/review.png",
    review:
      "Matthew was responsible for the Payment Terminal Apps Development. He has demonstrated the ability to work under pressure and meet tight deadlines with the team.",
  },
  {
    id: 2,
    name: "Cliff Chan",
    position: "Mobile Application Team Lead of Autotoll Limited",
    img: "assets/review.png",
    review:
      "Matthew showcased his capabilities by successfully completing an app from start to launch. He was actively invoved throunghout the entire process, including collaborating with different teams like UI/UX for designing the user interface and QA for testing.",
  },
];

export const myProjects = [
  {
    title: "HKeToll Commercial Driver App (Native Android)",
    desc: "The app provides an easy way for commercial vehicle driver to check transaction records and payment status for using the HKeToll tunnels, as well as simplified the payment method.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Kotlin, XML UI Design, MVVM architecture, OCR (Text Recognition) from Google ML Kit, Fastlane with Python etc.",
    href: "https://play.google.com/store/apps/details?id=hk.gov.td.hketoll.driver",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/projectLogo1.png",
    logoStyle: {
      backgroundColor: "#134038",
      border: "0.2px solid #1e361d",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight_green.png",
    tags: [
      {
        id: 1,
        name: "Kotlin",
        path: "/assets/kotlin.png",
      },
      {
        id: 2,
        name: "XML",
        path: "assets/xml.png",
      },
      {
        id: 3,
        name: "Firebase",
        path: "/assets/firebase.png",
      },
      {
        id: 4,
        name: "Python",
        path: "/assets/python.png",
      },
    ],
  },
  {
    title: "POS System (Native Android)",
    desc: "Developing a POS System app involves creating a user-friendly application that helps businesses integrating different payment gateway, such as WechatPay, Alipay, different types of credit card.",
    subdesc:
      "This project is a POS System app with Kotlin, made with MVP architecture, and configured hardware like taps, readers, swipe etc.",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/projectLogo2.png",
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid #FFFFFF",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight_purple.png",
    tags: [
      {
        id: 1,
        name: "Kotlin.js",
        path: "/assets/kotlin.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.85 : isMobile ? 1 : 1.2,
    deskPosition: isMobile
      ? [1.7, 1.0, -0.1]
      : isTablet
      ? [1.1, -1, 0]
      : [0.8, -1.7, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [10, -5, 0]
      : [14, -5.5, 0],
    reactLogoPosition: isSmall
      ? [-6.5, -5.0, -8, 3]
      : isMobile
      ? [-7.0, -5.0, -8, 3]
      : isTablet
      ? [-12.0, -5.0, -8, 3]
      : [-19.0, -5.0, -8, 3],
    thinkPosition: isSmall
      ? [5, 5, 0]
      : isMobile
      ? [5, 5.5, 0]
      : isTablet
      ? [10, 5, 0.9]
      : [14, 5, 0],
    androidIconPosition: isSmall
      ? [-6.5, 6.5, -8, 3]
      : isMobile
      ? [-7.0, 6.5, -8, 3]
      : isTablet
      ? [-13.0, 6.5, -8, 3]
      : [-19.0, 6.5, -8, 3],
    androidIconScale: isSmall ? 0.3 : isMobile ? 0.4 : isTablet ? 0.6 : 0.8,
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Autotoll Limited",
    pos: "Mobile Developer",
    duration: "2023.3 - 2023.9",
    title:
      "Autotoll provides a complete cross-platform solution for the autotolling. Drivers can throungh this service to utilize it for checking status of toll fees, and also for making payment. ",
    icon: "/assets/autotoll.png",
    animation: "clapping",
  },
  {
    id: 2,
    name: "Tradelink Electronics Commerce Limited",
    pos: "Programmer",
    duration: "2021.7 - 2022.8",
    title:
      "Tradelink helps me integrating mobile POS (Point of Sale) Terminal on swipe, tap, and insert for taking credit card data with Android Application, and also assisting me to complete user instruction documents. ",
    icon: "/assets/tradelink.png",
    animation: "salute",
  },
];
