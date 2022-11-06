import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "DailyRecord",
        image: new URL("../assets/imgs/dailyrecord.jpg", import.meta.url).href,
        description:
          "DailyRecord is a Flutter Android Application. It aims to help in contact tracing inside a school campus.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://github.com/Evanchii/DailyRecord",
      },
      {
        id: 2,
        name: "PayPoint",
        image: new URL("../assets/imgs/paypoint.jpg", import.meta.url).href,
        description:
          "PayPoint is an Android App developed to help commuters and drivers in paying their fares digitally.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://github.com/Evanchii/PayPoint",
      },
      {
        id: 3,
        name: "Job Finder",
        image: new URL("../assets/imgs/jobfinder.jpg", import.meta.url).href,
        description:
          "Job finding is necessary for people seeking employment. However, the pandemic caused by the COVID-19 virus has resulted in people losing their jobs as well as disrupting traditional employment methods.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://github.com/LimeyGreeny/JobFinderWebsite",
        featured: true,
      },
      {
        id: 4,
        name: "StickyGo",
        image: new URL("../assets/imgs/stickygo.jpg", import.meta.url).href,
        description:
          "StickyGo is to provide jobs for local artists and designers by showing off their talents and skills. First, the project would offer high-quality- stickers, at a low price. Then Provide excellent customer service with a friendly atmosphere interaction given by the company.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://github.com/Wasabi199/Sticky-Go",
        featured: true,
      },
      {
        id: 5,
        name: "Where's my Mommy?",
        image: new URL("../assets/imgs/wheresmymommy.jpg", import.meta.url)
          .href,
        description:
          "A mobile game made with Unity. The story starts with a player who finds themselves inside a little girl's room with a child asking Where's Mommy, their only goal is to find a way out and escape the haunted house.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://github.com/Evanchii/WheresMommyGame",
      },
      {
        id: 6,
        name: "Sweet Escape",
        image: new URL("../assets/imgs/sweetescape.jpg", import.meta.url).href,
        description:
          "Sweet escape are little sweets that a diner can swallow in one bite.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://github.com/baekwun/Sweet-Escape",
      },
    ],
  }),
  getters: {
    getAllProjects: (state) => state.projects,
    getFeaturedProjects: (state) =>
      state.projects.filter((project) => project.featured),
    getGraveProjects: (state) => state.grave,
  },
});
