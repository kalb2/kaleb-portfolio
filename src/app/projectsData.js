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
    tagline: "My first Next.js project",
    type: "React",
    description: [
      "In some ways, more complex than a portfolio needs to be, but this became a playground for me to experiment with new ideas and skills. Take a deeper look into what went into the making of This Portfolio Website.",
    ],
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
    tagline:
      "A basic blog built with React Router and data fetching from an API",
    description: [
      "Using a JSON Server, I created a basic blog that allows users to create new posts, update current ones, and search posts. ",
      "Note - In production, this uses a small JSON Server database with a max character limit, so data changed will not persist.",
    ],
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
    component: Counter,
    displayComponent: false,
    about: [
      "This blog implements the React Router to create a Posts, Users, and Todos page. ",
      "The original project used a local JSON Server. For display purposes, it was replaced with a small JSON Server hosted elsewhere.",
      "The JSON Server is a fork of the Typicode JSON Server.",
      "The API allows for POST, PUT, and GET endpoints that I utilize to create new posts, update posts, and filter posts.",
      "Users can also edit posts and push ",
      "When creating a new post, it also creates a new route for the post.",
      "This project also implements a loading spinner and error page.",
    ],
  },
  {
    id: 3,
    title: "useRef Form",
    tagline: "A simple form using useRef Hook and Validation",
    description: [
      "This basic login form checks for specific validation. The form also shows error messages next to the inputs every time the form is submitted, if there are any.",
      "If the form submission is succesful, you will see an alert for success. This particular version of the form implements the useRef hook.",
    ],
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
    component: RefForm,
    displayComponent: true,
    about: [
      "The useRef Hook allows me to reference the inputs on these forms to populate the error messages.  ",
      "Using ternary operators, if there are more than 1 errors, they will display under the email and password inputs.",
      "The form requires an email that ends in 'gmail.com'",
      "The password is required, has to be at least 10 characters, must include at least 1 lowercase and uppercase letter, and at least 1 number.",
      "There is a useState for whether or not the form is after the first submit so that the errors don't show until then.",
    ],
  },
  {
    id: 4,
    title: "useState Form",
    tagline:
      "An alternate login form created w/ useState and basic form validation",
    description: [
      "This basic login form checks for specific validation. The form also shows error messages next to the inputs every time the form is submitted, if there are any. If the form submission is succesful, you will see an alert for success. This particular version of the form implements the useState hook.",
    ],
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
    component: StateForm,
    displayComponent: true, 
    about: [
      "Using ternary operators, if there are more than 1 errors, they will display under the email and password inputs.",
      "The form requires an email that ends in 'gmail.com'",
      "The password is required, has to be at least 10 characters, must include at least 1 lowercase and uppercase letter, and at least 1 number.",
      "There is a useState for whether or not the form is after the first submit so that the errors don't show until then.",
      "This form implements the useMemo hook to ensure that the errors only render when the inputs change. or the 'isAfterFirstSubmit' state changes.",
    ],
  },
  {
    id: 8,
    title: "Custom Hook - useLocalStorage",
    tagline: "Creating my own React Hook to access local storage.",
    description: [
      "My useLocalStorage hook is built using useState, useEffect, and a custom hook to save items in local storage.",
    ],
    conceptsUsed: [
      "Custom React Hook",
      "Local Storage",
      "useState Hook",
      "useEffect Hook",
    ],
    repoUrl:
      "https://github.com/kalb2/kaleb-portfolio/tree/31be306598ae4f69c8bd5ea28b725c679fc6e3ee/src/app/components/projectcomponents/UseLocalStorage",
    href: "CustomHooks/useLocalStorage",
    bgimage: "/localstorage.png",
    // imageUrl: "/next.svg",
    component: LocalStorage,
    displayComponent: true, 
    about: [
      "The useRef Hook allows me to reference the inputs on these forms to populate the error messages.  ",
      "Using ternary operators, if there are more than 1 errors, they will display under the email and password inputs.",
    ],
  },
  {
    id: 5,
    title: "Custom Hook - useArray",
    tagline: "Creating my own React Hook to manipulate an array.",
    description: [
      "My useArray hook is built using a number of useCallback hooks to manipulate the state of the array.",
    ],
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
    about: [
      "The useRef Hook allows me to reference the inputs on these forms to populate the error messages.  ",
      "Using ternary operators, if there are more than 1 errors, they will display under the email and password inputs.",
    ],
  },
  {
    id: 6,
    title: "Custom Hook - Fetch",
    tagline: "Creating my own React Hook to Fetch data from an API.",
    description: [
      "Using React, I created a custom hook specifically for handling fetch requests from the JSON Placeholder API.",
    ],
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
    component: Fetch,
    displayComponent: true,
    about: [
      "This hook implements a basic Fetch request to pull data from the JSONPlaceholder API.",
      "The project also includes a loading state in case the fetch is slow.",
    ],
  },
  {
    id: 7,
    title: "Basic Fetch",
    tagline:
      "Using useEffect and the Fetch API, I created a Basic Fetch Request from the JSON Placeholder API.",
    description: [
      "Using useEffect and the Fetch API, I created a Basic Fetch Request from the JSON Placeholder API.",
    ],
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
    about: [
      "This hook implements a basic Fetch request to pull data from the JSONPlaceholder API.",
      "The project also includes a loading state in case the fetch is slow.",
    ],
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
    tagline: "Multiple useEffect Hook use cases.  ",
    description: [
      "In this project, multiple useEffect Hooks are used to change the text as well as the document title.",
      "Give it a try by typing in a name and you'll see it at the top.",
    ],
    conceptsUsed: [
      "useEffect on Children",
      "useEffect Hook",
      "Document Interaction",
      "useState",
      "Conditional Rendering",
    ],
    repoUrl:
      "https://github.com/kalb2/kaleb-portfolio/tree/31be306598ae4f69c8bd5ea28b725c679fc6e3ee/src/app/components/projectcomponents/useEffect",
    href: "UseEffect",
    bgimage: "/useeffect.png",
    // imageUrl: "/next.svg",
    component: Effect,
    displayComponent: true,
    about: [
      "This project allows you to update the document title when you update the input.",
      "With useEffect, you can show and hide the component.",
      "To show and hide the component, I used a useState to show/hide the child component.",
    ],
  },
  {
    id: 11,
    title: "Update Name",
    tagline: "Using useState to update a value",
    description: "Using useState to update a value",
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
    component: BUSProjects,
    displayComponent: true,
  },
  {
    id: 16,
    title: "My First React Project",
    tagline:
      "A basic player bio page made with React and MaterialUI",
    description: [
      "Using React and MaterialUI, I created a basic player bio page for NBA players based on JSON Data.",
      "Hooking up tables to populate with player data was a great intro to using a component library with React.",
    ],
    conceptsUsed: [
      "MaterialUI Components",
      "Reusable React Components",
      "Conditional Rendering",
      "Filtering JSON Data",
    ],
    // repoUrl: "",
    href: "MyFirstProject",
    bgimage: "/OladipoProject.png",
    imageUrl: "/OladipoProject.png",
    component: Counter,
    displayComponent: false,
    about: [
      "This was my first attempt at creating a React App from scratch.",
      "Without knowing, I taught myself MaterialUI along the way and created a basic player bio.",
      "Even though the design is somewhat rough, it was a great way to jump in and get familiar with React and MaterialUI.",
    ],
  },
  {
    id: 17,
    title: "Date Picker",
    tagline: "A simple Date Picker App.",
    description: ["Using the Date-FNS library, I created a date picker that allows you to change months, and displays current date."],
    conceptsUsed: [
      "Date-FNS Library",
      "Date Formatting",
      "Modals",
      "Conditional Rendering",
    ],
    repoUrl:
      "https://github.com/kalb2/kaleb-portfolio/tree/5ccf051ed17072cd2306df93ca631473c29927ac/src/app/components/projectcomponents/DatePicker",
    href: "DatePicker",
    bgimage: "/DatePicker.png",
    // imageUrl: "/DatePicker.png",
    component: DatePicker,
    displayComponent: true,
    about: [
      "A basic Date Picker with a dropdown modal",
      "The design changes according to the length of the month.",
      "The current day is always displayed.",
      "The selected day is displayed in an alternate color.",
      "The days in the previous and next month are grayed out.",
    ],
  },
];

export default projectsData;
