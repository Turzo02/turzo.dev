export const projects = [
    {
    id: 1,
    title: "TicketZone — Online Ticket Booking Platform",
    image:
      "https://i.ibb.co.com/3yh5dYtY/ticket-ZOne.png",
    tags: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Firebase"],
    description:
      "A production-level MERN stack ticket booking platform supporting Bus, Train, Flight, and Ship bookings. It features role-based dashboards for Users, Vendors, and Admins, integrated with Stripe for secure payments.",
    demoUrl: "https://ticketzone19.netlify.app/",
    codeUrl: "https://github.com/Turzo02/Ticket-Zone-FrontEnd",
    features: [
      "Role-Based Access Control (User, Vendor, Admin Dashboards)",
      "Secure Stripe Payment Integration with quantity validation",
      "Advanced search, filtering by transport type, and pagination",
      "Real-time ticket status tracking and countdown timers",
      "Admin control panel for ticket approval and user management",
      "Vendor revenue overview with interactive charts",
    ],
    challenges:
      "Managing complex states across three different user roles was a major challenge. Ensuring that the inventory (ticket quantity) updates accurately during simultaneous Stripe transactions required implementing careful backend logic and database transactions to prevent overbooking.",
    potentialImprovements:
      "I plan to integrate a real-time notification system using Socket.io to alert users when their booking is accepted or rejected by a vendor. Additionally, implementing a seat-selection map for buses and trains would significantly enhance the user experience.",
  },
  {
    id: 2,
    title: "My App Store",
    image:
      "https://i.ibb.co.com/jkFK1qwc/app-Store.png",
    tags: ["React", "Tailwind", "Recharts", "GSAP", "localStorage", "Firebase"],
    description:
      "A modern, responsive web application that showcases trending apps. It features data visualization with Recharts, smooth GSAP animations, and persistent app installations using LocalStorage.",
    demoUrl: "https://updatedplaystore.netlify.app/",
    codeUrl: "https://github.com/Turzo02/App-Store",

    features: [
      "Real-time search and dynamic filtering",
      "Interactive review statistics using Recharts",
      "Persistent 'My Installation' page using LocalStorage",
      "Smooth animations with GSAP and OGL",
      "Advanced sorting by download counts",
    ],
    challenges:
      "One of the main challenges was managing the application state for installed apps and ensuring data persistence across page reloads. Implementing smooth route transitions while maintaining performance with GSAP animations also required careful optimization of React's lifecycle.",
    potentialImprovements:
      "In the future, I plan to integrate Firebase for real-time user authentication and a global database. I also aim to add a dark mode toggle and implement a more robust backend to handle user-generated reviews and ratings.",
  },
  {
    id: 3,
    title: "Freelance MarketPlace",
    image:
      "https://i.ibb.co.com/RG123nZ0/Screenshot-2025-11-19-132812.png",
    tags: [
      "React",
      "Firebase",
      "Tailwind",
      "GSAP",
      "Axios",
      "MongoDB",
      "Express",
      "Node.js",
      "Firebase",
    ],
    description:
      "A dynamic full-stack web application connecting freelancers and clients. Built with Firebase for real-time data sync and secure authentication, featuring a complete job management system.",
    demoUrl: "https://freelance-marketplace-by-turzo.netlify.app/",
    codeUrl: "https://github.com/Turzo02/FreeLance-MarketPlace-FrontEnd",

    features: [
      "Secure Firebase Authentication (Email/Password & Google Sign-In)",
      "Complete CRUD functionality for job postings",
      "Real-time data synchronization for task management",
      "Protected routes for authenticated users only",
      "Dynamic theme switching (Light/Dark mode) with DaisyUI",
      "Integrated Framer Motion and GSAP for fluid UI animations",
    ],
    challenges:
      "Implementing protected routes while ensuring a smooth user experience during Firebase's initial auth state check was a significant challenge. Managing complex state across 'My Accepted Tasks' and 'My Job Postings' required careful architecting of the database structure to avoid unnecessary re-renders.",
    potentialImprovements:
      "I plan to implement a real-time chat system using Firebase Firestore for better client-freelancer communication. Additionally, adding a payment gateway integration (like SSLCommerz or Stripe) would turn this into a production-ready platform.",
  }

];
