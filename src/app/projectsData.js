import ArrayState from "./projects/components/ArrayState/arrayState";
import BasicFetch from "./projects/components/BasicFetch/BasicFetch";
import RefForm from "./projects/components/BasicForm/RefForm";
import StateForm from "./projects/components/BasicForm/StateForm";
import ChangeAge from "./projects/components/UseState/ChangeAge";
import SimpleTodo from "./projects/components/SimpleTodo/SimpleTodo";
import Array from "./projects/components/UseArray/Array";
import Fetch from "./projects/components/UseFetch/Fetch";
import UserList from "./projects/components/User List/UserList";
import Counter from "./projects/components/UseState/counter";
import UpdateName from "./projects/components/UseState/updateName";
import Effect from "./projects/components/useEffect/Effect";
import LocalStorage from "./projects/components/UseLocalStorage/LocalStorage";

const projectsData = [
    {
      id: 1,
      title: "This Portfolio Website",
      description: "Description of Project 1.",
      // imageUrl: "/Code.png", 
      tabs: {
        tab1: "Tab 1 Content for Project 1",
        tab2: "Tab 2 Content for Project 1",
        tab3: "Tab 3 Content for Project 1"
      },
      component: RefForm,
    },
    {
      id: 2,
      title: "useRef Form",
      description: "Description of Project 1.",
      // imageUrl: "/Code.png", 
      tabs: {
        tab1: "Tab 1 Content for Project 1",
        tab2: "Tab 2 Content for Project 1",
        tab3: "Tab 3 Content for Project 1"
      },
      component: RefForm,
    },
    {
      id: 3,
      title: "useState Form",
      description: "Description of Project 2.",
      // imageUrl: "/next.svg",
      tabs: {
        tab1: "Tab 1 Content for Project 2",
        tab2: "Tab 2 Content for Project 2",
        tab3: "Tab 3 Content for Project 2"
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
      title: "Array",
      description: "Description of Project 3.",
      // imageUrl: "/next.svg",
      tabs: {
        tab1: "Tab 1 Content for Project 3",
        tab2: "Tab 2 Content for Project 3",
        tab3: "Tab 3 Content for Project 3"
      },
      component: Array,
    },
    {
      id: 6,
      title: "Fetch from API",
      description: "Description of Project 3.",
      // imageUrl: "/next.svg",
      tabs: {
        tab1: "Tab 1 Content for Project 3",
        tab2: "Tab 2 Content for Project 3",
        tab3: "Tab 3 Content for Project 3"
      },
      component: Fetch,
    },
    {
      id: 7,
      title: "Basic Fetch",
      description: "Description of Project 3.",
      // imageUrl: "/next.svg",
      tabs: {
        tab1: "Tab 1 Content for Project 3",
        tab2: "Tab 2 Content for Project 3",
        tab3: "Tab 3 Content for Project 3"
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
      imageUrl: "/next.svg",
      tabs: {
        tab1: "Tab 1 Content for Project 2",
        tab2: "Tab 2 Content for Project 2",
        tab3: "Tab 3 Content for Project 2"
      },
      component: UserList,
    },
    {
      id: 10,
      title: "UseEffect",
      description: "Description of Project 3.",
      // imageUrl: "/next.svg",
      tabs: {
        tab1: "Tab 1 Content for Project 3",
        tab2: "Tab 2 Content for Project 3",
        tab3: "Tab 3 Content for Project 3"
      },
      component: Effect,
    },
    {
      id: 11,
      title: "Update Name",
      description: "Description of Project 3.",
      // imageUrl: "/next.svg",
      tabs: {
        tab1: "Tab 1 Content for Project 3",
        tab2: "Tab 2 Content for Project 3",
        tab3: "Tab 3 Content for Project 3"
      },
      component: UpdateName,
    },
    {
      id: 12,
      title: "Manipulate Array",
      description: "Description of Project 3.",
      // imageUrl: "/next.svg",
      tabs: {
        tab1: "Tab 1 Content for Project 3",
        tab2: "Tab 2 Content for Project 3",
        tab3: "Tab 3 Content for Project 3"
      },
      component: ArrayState,
    },
    {
      id: 13,
      title: "Basic Age Change",
      description: "Description of Project 3.",
      // imageUrl: "/next.svg",
      tabs: {
        tab1: "Tab 1 Content for Project 3",
        tab2: "Tab 2 Content for Project 3",
        tab3: "Tab 3 Content for Project 3"
      },
      component: ChangeAge,
    },
    {
      id: 14,
      title: "Simple Counter",
      description: "Description of Project 3.",
      // imageUrl: "/next.svg",
      tabs: {
        tab1: "Tab 1 Content for Project 3",
        tab2: "Tab 2 Content for Project 3",
        tab3: "Tab 3 Content for Project 3"
      },
      component: Counter,
    },
  ];
  
  export default projectsData;
  