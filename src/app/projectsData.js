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

const projectsData = [
  {
    id: 1,
    title: "This Portfolio Website",
    description: "Description of Project 1.",
    href: "ThisWebsite",
    bgimage: "/Code.png",
    // imageUrl: "/Code.png",
    tabs: {
      tab1: "Tab 1 Content for Project 1",
      tab2: "Tab 2 Content for Project 1",
      tab3: "Tab 3 Content for Project 1",
    },
    component: RefForm,
  },
  {
    id: 2,
    title: "React Router Blog",
    description:
      "A blog made using a fake JSON Server, Axios, and React Router.",
    href: "ReactRouterBlog",
    bgimage: "/RouterBlog.png",
    imageUrl: "/RouterBlog.png",
    tabs: {
      tab1: "Tab 1 Content for Project 3",
      tab2: "Tab 2 Content for Project 3",
      tab3: "Tab 3 Content for Project 3",
    },
    component: Counter,
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
    component: Counter,
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
  },

];

export default projectsData;
