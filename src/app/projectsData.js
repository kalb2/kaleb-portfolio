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
import { DatePicker } from "./components/projectcomponents/DatePicker/DatePicker";

const projectsData = [
  {
    id: 1,
    title: "This Portfolio Website",
    description:
      "In some ways, more complex than a portfolio needs to be, but this became a playground for me to experiment with new ideas and skills. Take a deeper look into what went into the making of This Portfolio Website",
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
    bgimage: "/BuiltWith.png",
    imageUrl: "/ThisWebsite.png",
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
      "A blog made using a fake JSON Server, Axios, and React Router. An implementation of a variety of concepts. Check out my ",
    conceptsUsed: [
      "React Router",
      "API Fetch Requests",
      "Async Functions",
      "Database Actions/Mutations",
      "JSON Server",
      "Axios",
      "Loaders",
    ],
    repoUrl:
      "https://github.com/kalb2/Basic-Blog-Project/tree/9f7e86b65a09412e738bf2c10f80bedb4fc79b85/after/client",
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
    description: "A basic login form created w/ useRef and basic form validation.",
    conceptsUsed: [
      "useRef Hook",
      "useState Hook",
      "Basic Form Validation",
      "Multiple useStates",
      "Event Listeners",
    ],
    repoUrl:
      "https://github.com/kalb2/kaleb-portfolio/blob/31be306598ae4f69c8bd5ea28b725c679fc6e3ee/src/app/components/projectcomponents/BasicForm/RefForm.jsx",
    href: "Forms/useRef",
    bgimage: "/Forms.png",
    // imageUrl: "/Code.png",
    tabs: {
      tab1: "In combination with the useState hook, the useRef hook is used here to create a basic login form. The hooks are used to create logic and validation for the two inputs.  ",
      tab2: "Tab 2 Content for Project 1",
      tab3: "Tab 3 Content for Project 1",
    },
    component: RefForm,
    displayComponent: true,
  },
  {
    id: 4,
    title: "useState Form",
    description: "An alternate login form created w/ useState and basic form validation",
    conceptsUsed: [
      "useState Hook",
      "useMemo Hook",
      "Basic Form Validation",
      "Multiple useStates",
      "Event Listeners",
    ],
    repoUrl:
      "https://github.com/kalb2/kaleb-portfolio/blob/31be306598ae4f69c8bd5ea28b725c679fc6e3ee/src/app/components/projectcomponents/BasicForm/StateForm.jsx",
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
    description: "Creating my own React Hook to manipulate an array.",
    conceptsUsed: [
      "Custom React Hook",
      "Array Manipulation",
      "useCallback Hook",
    ],
    repoUrl:
      "https://github.com/kalb2/kaleb-portfolio/tree/31be306598ae4f69c8bd5ea28b725c679fc6e3ee/src/app/components/projectcomponents/UseArray",
    href: "CustomHooks/useArray",
    bgimage: "/ArrayHook.png",

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
    title: "Custom Hook - Fetch",
    description: "Using React, I created a custom hook specifically for handling fetch requests from the JSON Placeholder API.",
    conceptsUsed: [
      "Custom React Hook",
      "Fetch API",
      "useEffect Hook",
      "useCallback Hook",
      "Loading States",
      "Error States",
    ],
    repoUrl:
      "https://github.com/kalb2/kaleb-portfolio/tree/31be306598ae4f69c8bd5ea28b725c679fc6e3ee/src/app/components/projectcomponents/UseArray",
    href: "FetchAPI",
    bgimage: "/FetchHook.png",

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
    description: "Using useEffect and the Fetch API, I created a Basic Fetch Request from the JSON Placeholder API.",
    conceptsUsed: [
      "Fetch API",
      "useEffect Hook",
      "JSON Placeholder",
      "Loading States",
      "Error States",
    ],
    repoUrl:
      "https://github.com/kalb2/kaleb-portfolio/blob/31be306598ae4f69c8bd5ea28b725c679fc6e3ee/src/app/components/projectcomponents/BasicFetch/BasicFetch.jsx",
    href: "BasicFetchRequest",
    bgimage: "/FetchHook.png",

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
  // {
  //   id: 9,
  //   title: "UserList",
  //   description: "Description of Project 2.",
  //   conceptsUsed: [
  //     "Fetch API",
  //     "useEffect Hook",
  //     "JSON Placeholder",
  //     "Loading States",
  //     "Error States",
  //   ],
  //   repoUrl:
  //     "https://github.com/kalb2/kaleb-portfolio/blob/31be306598ae4f69c8bd5ea28b725c679fc6e3ee/src/app/components/projectcomponents/BasicFetch/BasicFetch.jsx",
  //   bgimage: "/Code.png",

  //   // imageUrl: "/next.svg",
  //   tabs: {
  //     tab1: "Tab 1 Content for Project 2",
  //     tab2: "Tab 2 Content for Project 2",
  //     tab3: "Tab 3 Content for Project 2",
  //   },
  //   component: UserList,
  //   displayComponent: true,
  // },
  {
    id: 10,
    title: "UseEffect",
    description: "In this project, multiple useEffect Hooks are used to change the text as well as the document title (Look up).  ",
    conceptsUsed: [
      "useEffect on Children",
      "useEffect Hook",
      "Document Interaction",
      "useState",
      "Conditional Rendering",
    ],
    repoUrl:
      "https://github.com/kalb2/kaleb-portfolio/tree/31be306598ae4f69c8bd5ea28b725c679fc6e3ee/src/app/components/projectcomponents/useEffect",
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
    description: "Useing useState to update a value",
    conceptsUsed: [
      "useEffect on Children",
      "useEffect Hook",
      "Document Interaction",
      "useState",
      "Conditional Rendering",
    ],
    repoUrl:
      "https://github.com/kalb2/kaleb-portfolio/tree/31be306598ae4f69c8bd5ea28b725c679fc6e3ee/src/app/components/projectcomponents/useEffect",
    bgimage: "/Code.png",

    // imageUrl: "/next.svg",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: UpdateName,
    displayComponent: true,
    shouldExclude: true,
  },
  {
    id: 12,
    title: "Manipulate Array",
    description: "Manipulating an Array with useState.",
    bgimage: "/Code.png",

    // imageUrl: "/next.svg",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: ArrayState,
    displayComponent: true,
    shouldExclude: true,

  },
  {
    id: 13,
    title: "Basic Age Change",
    description: "Using useState and useEffect to change an array",
    bgimage: "/Code.png",

    // imageUrl: "/next.svg",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: ChangeAge,
    displayComponent: true,
    shouldExclude: true,

  },
  {
    id: 14,
    title: "Simple Counter",
    description: "Using useState to increment a number.",
    bgimage: "/Code.png",

    // imageUrl: "/next.svg",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: Counter,
    displayComponent: true,
    shouldExclude: true,

  },
  {
    id: 15,
    title: "Basic useState Projects",
    href: "BasicUseStateProjects",
    bgimage: "/useState.png",
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
    description: "Using React and MaterialUI, I created a basic player bio page for NBA players based on JSON Data.",
    conceptsUsed: [
      "MaterialUI Components",
      "Reusable React Components",
      "Conditional Rendering",
      "Filtering JSON Data"
    ],
    // repoUrl: "",
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
  {
    id: 17,
    title: "Date Picker",
    description: "Using the date-fns library, I created a date picker app.",
    conceptsUsed: [
      "MaterialUI Components",
      "Reusable React Components",
      "Conditional Rendering",
      "Filtering JSON Data"
    ],
    repoUrl: "https://github.com/kalb2/kaleb-portfolio/tree/5ccf051ed17072cd2306df93ca631473c29927ac/src/app/components/projectcomponents/DatePicker",
    href: "DatePicker",
    bgimage: "/DatePicker.png",

    imageUrl: "/DatePicker.png",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: DatePicker,
    displayComponent: false,
  },
];

export default projectsData;
