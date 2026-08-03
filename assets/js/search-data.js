// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My academic qualifications and research trajectory are summarized herein for relevant scholarly audiences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-was-honored-to-receive-the-outstanding-undergraduate-thesis-award-at-southeast-university",
          title: 'I was honored to receive the “Outstanding Undergraduate Thesis” Award at Southeast University!...',
          description: "",
          section: "News",},{id: "news-i-was-recognized-as-an-outstanding-undergraduate-student-of-southeast-university",
          title: 'I was recognized as an “Outstanding Undergraduate Student” of Southeast University!',
          description: "",
          section: "News",},{id: "news-i-officially-graduated-from-southeast-university-with-a-bachelor-s-degree-a-memorable-journey",
          title: 'I officially graduated from Southeast University with a Bachelor’s degree. A memorable journey!...',
          description: "",
          section: "News",},{id: "news-i-successfully-completed-and-was-evaluated-as-excellent-in-my-master-s-research-proposal",
          title: 'I successfully completed and was evaluated as “Excellent” in my Master’s research proposal....',
          description: "",
          section: "News",},{id: "news-i-had-a-great-experience-presenting-on-the-smarteye-eye-tracking-system-applications-at-the-2024-eye-tracking-technologies-symposium-hosted-by-shanghai-info-instruments",
          title: 'I had a great experience presenting on the “SmartEye eye-tracking system applications” at...',
          description: "",
          section: "News",},{id: "news-i-gave-an-oral-presentation-on-hierarchical-intention-recognition-framework-in-intelligent-human-computer-interactions-at-the-2nd-human-centric-smart-manufacturing-academic-conference",
          title: 'I gave an oral presentation on “Hierarchical Intention Recognition Framework in Intelligent Human–Computer...',
          description: "",
          section: "News",},{id: "news-my-paper-titled-hierarchical-intention-recognition-framework-in-intelligent-human-computer-interactions-for-helicopter-and-drone-collaborative-wildfire-rescue-missions-was-accepted-by-engineering-applications-of-artificial-intelligence",
          title: 'My paper titled “Hierarchical intention recognition framework in intelligent human–computer interactions for helicopter...',
          description: "",
          section: "News",},{id: "news-my-paper-titled-beyonddeskvr-an-extended-virtual-hand-interaction-system-in-virtual-reality-was-accepted-by-behaviour-amp-amp-information-technology",
          title: 'My paper titled “BeyondDeskVR: an extended virtual hand interaction system in virtual reality”...',
          description: "",
          section: "News",},{id: "projects-hierarchical-intention-recognition",
          title: 'Hierarchical Intention Recognition',
          description: "Completed at Southeast University, 2023.10 - 2024.10.  A hierarchical intention recognition framework suitable for complex tasks, aiming to infer human multilevel intentions from the lowest-level data such as human behaviour, machine and environmental information.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-beyonddeskvr",
          title: 'BeyondDeskVR',
          description: "Completed at Southeast University, 2021.10 - 2024.08.  An extended virtual hand interaction system in virtual reality, aiming to reduce gesture-induced fatigue and enhance the comfort of desktop-based interactions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
