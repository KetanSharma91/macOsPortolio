const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Mar 1, 2026",
    title: "Ultimate AI & Dev Tools Guide 2026",
    image: "/images/blog1.png",
    link: "/blog1.html",
  },
  {
    id: 2,
    date: "Mar 2, 2026",
    title: "Must-Read Books for Personal Growth and Business Success",
    image: "/images/blog2.png",
    link: "/blog2.html",
  },
  {
    id: 3,
    date: "Mar 26, 2025",
    title: "Think Big, Grow Bigger: Unlocking Success with Think and Grow Rich",
    image: "/images/blog3.png",
    link: "/blog3.html",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Languages",
    items: ["Java", "Python"],
  },
  // {
  //   category: "Libaries",
  //   items: ["Numby", "Pandas", "..."],
  // },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "VSC"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/ketansharma91",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#4bcb63",
    link: "https://www.instagram.com/ketansharma911/",
  },
  {
    id: 3,
    text: "X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/KetanSharm911",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ketan-sharma-b1b0a5288/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
    type: "library", // added
    children: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/5268304/pexels-photo-5268304.jpeg",
      },
      {
        id: 2,
        img: "/images/gal2.png",
      },
      {
        id: 3,
        img: "https://images.pexels.com/photos/3168209/pexels-photo-3168209.jpeg",
      },
      {
        id: 4,
        img: "https://images.pexels.com/photos/434442/pexels-photo-434442.jpeg",
      },
    ],
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
    type: "memories",
    children: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/46794/camera-photos-photograph-paper-prints-46794.jpeg",
      },
      {
        id: 2,
        img: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg",
      },
    ],
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
    type: "places",
    children: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/35873260/pexels-photo-35873260.jpeg",
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1771967141873-8b714205f4bd",
      },
    ],
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
    type: "people",
    children: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg",
      },
    ],
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
    type: "favorites",
    children: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
      },
      {
        id: 2,
        img: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg",
      },
      {
        id: 3,
        img: "https://images.pexels.com/photos/36045885/pexels-photo-36045885.jpeg",
      },
    ],
  },
];

const gallery = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/5268304/pexels-photo-5268304.jpeg",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/3168209/pexels-photo-3168209.jpeg",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/434442/pexels-photo-434442.jpeg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Pixora design Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-7", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Pixora Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Pixora is a modern, Canva-like graphic design platform built for creating and collaborating on designs effortlessly.",
            "More than just a basic editor, it offers drag-and-drop functionality, real-time collaboration, and smooth interactive tools for a seamless creative experience.",
            "Think of it as your own online design studio—where multiple users can create, edit, and refine visuals together in real time.",
            "It’s built with React, Next.js, Tailwind CSS, MongoDB, and Zustand, ensuring scalable architecture, fast performance, and a fully responsive interface.",
          ],
        },
        {
          id: 2,
          name: "pixora.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://pixora-blush.vercel.app/ ",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "pixora.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Inventory Management Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[17vh] left-5",
      children: [
        {
          id: 1,
          name: "Inventory Management App Project.txt", // text file
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Inventory Management app is a smart mobile solution designed to simplify product tracking and sales management for businesses.",
            "Instead of relying on manual records, it provides secure authentication, real-time database updates, and intuitive CRUD operations for efficient workflow management.",
            "Think of it as a portable inventory desk—allowing business owners to manage products, monitor sales, and stay organized directly from their phone.",
            "It’s built with React Native and a real-time database, delivering smooth performance, responsive design, and practical business-focused functionality.",
          ],
        },
        {
          id: 2,
          name: "Inventory Management App.apk",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "inventory_mangament_app.apk",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "inventory-management-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-2.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "AI Resume Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[32vh] left-10",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "ai-resume-analyzer.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://resumind-kp4o.onrender.com/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-3.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 left-5",
        // },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/ketan.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/ketan-2.jpeg",
    },
    // {
    //   id: 3,
    //   name: "cafe.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "/images/ketan-3.jpeg",
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/ketan.jpeg",
      description: [
        "Hey! I’m Ketan 👋, a web & app developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, I love to watch movies, and listen old hindi songs",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      href: "/files/resume.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: {
    isOpen: false,
    isFullScreen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  contact: {
    isOpen: false,
    isFullScreen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  resume: {
    isOpen: false,
    isFullScreen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  safari: {
    isOpen: false,
    isFullScreen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  photos: {
    isOpen: false,
    isFullScreen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  terminal: {
    isOpen: false,
    isFullScreen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  txtfile: {
    isOpen: false,
    isFullScreen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  imgfile: {
    isOpen: false,
    isFullScreen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
