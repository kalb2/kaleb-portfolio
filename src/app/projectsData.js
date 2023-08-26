import ChangeAge from "./projects/components/ChangeAge";
import Counter from "./projects/components/counter";

const projectsData = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of Project 1.",
      imageUrl: "/Code.png", 
      content: "Here is an example of the content",
      tabs: {
        tab1: "Tab 1 Content for Project 1",
        tab2: "Tab 2 Content for Project 1",
        tab3: "Tab 3 Content for Project 1"
      },
      component: ChangeAge,
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2.",
      imageUrl: "/next.svg",
      content: "Here is an example of the content",
      tabs: {
        tab1: "Tab 1 Content for Project 2",
        tab2: "Tab 2 Content for Project 2",
        tab3: "Tab 3 Content for Project 2"
      },
      component: Counter,
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of Project 3.",
      imageUrl: "/next.svg",
      content: "Here is an example of the content",
      tabs: {
        tab1: "Tab 1 Content for Project 3",
        tab2: "Tab 2 Content for Project 3",
        tab3: "Tab 3 Content for Project 3"
      }
    },
    // Add more projects
  ];
  
  export default projectsData;
  