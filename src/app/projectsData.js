import ArrayState from "./components/projectcomponents/ArrayState/arrayState";
import BasicFetch from "./components/projectcomponents/BasicFetch/BasicFetch";
import RefForm from "./components/projectcomponents/BasicForm/RefForm";
import StateForm from "./components/projectcomponents/BasicForm/StateForm";
import ChangeAge from "./components/projectcomponents/UseState/ChangeAge";
import SimpleTodo from "./components/projectcomponents/SimpleTodo/SimpleTodo";
import Array from "./components/projectcomponents/UseArray/Array";
import Fetch from "./components/projectcomponents/UseFetch/Fetch";
import UserList from "./components/projectcomponents/User List/UserList";
import Counter from "./components/projectcomponents/UseState/counter";
import UpdateName from "./components/projectcomponents/UseState/updateName";
import Effect from "./components/projectcomponents/useEffect/Effect";
import LocalStorage from "./components/projectcomponents/UseLocalStorage/LocalStorage";
import BUSProjects from "./projects/BasicUseStateProjects/BUSProjects";

const projectsData = [
  {
    id: 1,
    title: "This Portfolio Website",
    description:
      "In some ways, more complex than a portfolio needs to be, but this became a playground for me to experiment with new ideas and skills. Take a deeper look into what went into the making of ",
    conceptsUsed: [
      "Next.js App Router",
      "React Client Components",
      "TailwindCSS",
      "SSR",
      "Reponsive UI",
      "FlexBox",
      "Grid",
    ],
    repoUrl: "https://github.com/kalb2/kaleb-portfolio",
    href: "ThisWebsite",
    bgimage: "/Code.png",
    // imageUrl: "/Code.png",
    tabs: {
      tab1: "Tab 1 Content for Project 1",
      tab2: "Tab 2 Content for Project 1",
      tab3: "Tab 3 Content for Project 1",
    },
    component: RefForm,
    displayComponent: false,
  },
  {
    id: 2,
    title: "React Router Blog",
    description:
      "A blog made using a fake JSON Server, Axios, and React Router. Check out my ",
      conceptsUsed: [
        "React Router",
        "API Fetch Requests",
        "Async Functions",
        "Database Actions/Mutations",
        "JSON Server",
        "Axios",
        "Loaders",
      ],
    href: "ReactRouterBlog",
    bgimage: "/RouterBlog.png",
    imageUrl: "/RouterBlog.png",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: Counter,
    displayComponent: false,
  },
  {
    id: 3,
    title: "useRef Form",
    description: "A form created w/ useRef and validation.",
    href: "Forms/useRef",
    bgimage: "/Forms.png",
    // imageUrl: "/Code.png",
    tabs: {
      tab1: "Tab 1 Content for Project 1",
      tab2: "Tab 2 Content for Project 1",
      tab3: "Tab 3 Content for Project 1",
    },
    component: RefForm,
    displayComponent: true,
  },
  {
    id: 4,
    title: "useState Form",
    description: "A form created w/ useState and validation",
    href: "Forms/useState",
    bgimage: "/Forms.png",

    // imageUrl: "/next.svg",
    tabs: {
      tab1: "Tab 1 Content for Project 2",
      tab2: "Tab 2 Content for Project 2",
      tab3: "Tab 3 Content for Project 2",
    },
    component: StateForm,
    displayComponent: true,
  },
  // {
  //   id: 4,
  //   title: "Local Storage Custom Hook",
  //   description: "Description of Project 3.",
  //   // imageUrl: "/next.svg",
  //   tabs: {
  //     tab1: "Tab 1 Content for Project 3",
  //     tab2: "Tab 2 Content for Project 3",
  //     tab3: "Tab 3 Content for Project 3"
  //   },
  //   component: LocalStorage,
  // },
  {
    id: 5,
    title: "Custom Hook - useArray",
    description: "Description of Project 3.",
    href: "CustomHooks/useArray",
    bgimage: "/Code.png",

    // imageUrl: "/next.svg",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: Array,
    displayComponent: true,
  },
  {
    id: 6,
    title: "Fetch from API",
    description: "Description of Project 3.",
    href: "FetchAPI",

    bgimage: "/Code.png",

    // imageUrl: "/next.svg",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: Fetch,
    displayComponent: true,
  },
  {
    id: 7,
    title: "Basic Fetch",
    description: "Description of Project 3.",
    href: "BasicFetchRequest",

    bgimage: "/Code.png",

    // imageUrl: "/next.svg",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: BasicFetch,
    displayComponent: true,
  },
  // {
  //   id: 8,
  //   title: "Simple To-Do List",
  //   description: "Description of Project 3.",
  //   // imageUrl: "/next.svg",
  //   tabs: {
  //     tab1: "Tab 1 Content for Project 3",
  //     tab2: "Tab 2 Content for Project 3",
  //     tab3: "Tab 3 Content for Project 3"
  //   },
  //   component: SimpleTodo,
  // },
  {
    id: 9,
    title: "UserList",
    description: "Description of Project 2.",
    bgimage: "/Code.png",

    // imageUrl: "/next.svg",
    tabs: {
      tab1: "Tab 1 Content for Project 2",
      tab2: "Tab 2 Content for Project 2",
      tab3: "Tab 3 Content for Project 2",
    },
    component: UserList,
    displayComponent: true,
  },
  {
    id: 10,
    title: "UseEffect",
    description: "Description of Project 3.",
    bgimage: "/Code.png",

    // imageUrl: "/next.svg",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: Effect,
    displayComponent: true,
  },
  {
    id: 11,
    title: "Update Name",
    description: "Description of Project 3.",
    bgimage: "/Code.png",

    // imageUrl: "/next.svg",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: UpdateName,
    displayComponent: true,
  },
  {
    id: 12,
    title: "Manipulate Array",
    description: "Description of Project 3.",
    bgimage: "/Code.png",

    // imageUrl: "/next.svg",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: ArrayState,
    displayComponent: true,
  },
  {
    id: 13,
    title: "Basic Age Change",
    description: "Description of Project 3.",
    bgimage: "/Code.png",

    // imageUrl: "/next.svg",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: ChangeAge,
    displayComponent: true,
  },
  {
    id: 14,
    title: "Simple Counter",
    description: "Description of Project 3.",
    bgimage: "/Code.png",

    // imageUrl: "/next.svg",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: Counter,
    displayComponent: true,
  },
  {
    id: 15,
    title: "Basic useState Projects",
    href: "BasicUseStateProjects",
    bgimage: "/Code.png",
    imageUrl: "/OladipoProject.png",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: BUSProjects,
    displayComponent: true,
  },
  {
    id: 16,
    title: "My First React Project",
    description: "A bio page for NBA Players.",
    href: "MyFirstProject",
    bgimage: "/OladipoProject.png",

    imageUrl: "/OladipoProject.png",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: Counter,
    displayComponent: false,
  },
];

export default projectsData;
