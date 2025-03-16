// import javaThumbnail from  "../images/java_thumbnail.jpg"
// import java_icon from "/java-icon.png"
export const Courses = [
  {
    name: "Java",
    description:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    image: "/java_thumbnail.jpg",
    link: "/java",
  },
  {
    name: "Python",
    description:
      "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability.",
    image: "/java_thumbnail.jpg",
    link: "/python",
  },
  {
    name: "Web Development",
    description:
      "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability.",
    image: "/java_thumbnail.jpg",
    link: "/web-development",
  },
];

export const Tutorials = [
  {
    name: "java",
    image: "/java-icon.png",
  },
  {
    name: "html",
    image: "/java-icon.png",
  },
  {
    name: "css",
    image: "/java-icon.png",
  },
  {
    name: "javascript",
    image: "/java-icon.png",
  },
  {
    name: "python",
    image: "/java-icon.png",
  },
  {
    name: "react.js",
    image: "/java-icon.png",
  },
  {
    name: "next.js",
    image: "/java-icon.png",
  },
  {
    name: "c",
    image: "/java-icon.png",
  },
  {
    name: "c++",
    image: "/java-icon.png",
  },
];

export const JavaCourse = {
  name: "Java",
  video: "/videos/java-tutorial.mp4", // Video for the Java course
  headings: [
    {
      name: "Introduction",
      link: "/courses/java/introduction",
      video: "/public/videos/java-intro.mp4",
    },
    {
      name: "Variables",
      link: "/courses/java/variables",
      video: "/public/videos/java-variables.mp4",
    },
    {
      name: "OOP Concepts",
      link: "/courses/java/oop-concepts",
      video: "/public/videos/java-oop-concepts.mp4",
    },
    {
      name: "Collections",
      link: "/courses/java/collections",
      video: "/public/videos/java-collections.mp4",
    },
  ],
};

export const PythonCourse = {
  name: "Python",
  video: "/videos/python-tutorial.mp4", // Video for the Python course
  headings: [
    {
      name: "Introduction",
      link: "/courses/python/introduction",
      video: "/public/videos/python-intro.mp4",
    },
    {
      name: "Variables",
      link: "/courses/python/variables",
      video: "/public/videos/python-variables.mp4",
    },
    {
      name: "Data Structures",
      link: "/courses/python/data-structures",
      video: "/public/videos/python-data-structures.mp4",
    },
    {
      name: "OOP Concepts",
      link: "/courses/python/oop-concepts",
      video: "/public/videos/python-oop-concepts.mp4",
    },
  ],
};

export const WebDevelopmentCourse = {
  name: "Web Development",
  video: "/videos/webdev-tutorial.mp4", // Video for the Web Development course
  headings: [
    {
      name: "HTML Basics",
      link: "/courses/webdev/html-basics",
      video: "/public/videos/webdev-html-basics.mp4",
    },
    {
      name: "CSS Styling",
      link: "/courses/webdev/css-styling",
      video: "/public/videos/webdev-css-styling.mp4",
    },
    {
      name: "JavaScript Basics",
      link: "/courses/webdev/js-basics",
      video: "/public/videos/webdev-js-basics.mp4",
    },
    {
      name: "React.js",
      link: "/courses/webdev/reactjs",
      video: "/public/videos/webdev-reactjs.mp4",
    },
  ],
};
