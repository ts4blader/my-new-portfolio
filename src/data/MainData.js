import Jumbotron from "../components/Jumbotron";
import GoalBoxes from "../components/GoalBoxes";
import SkillBoxes from "../components/SkillBoxes";
import Carousel from "../components/Carousel";

const jumbotron = {
  caption: "Hello, I'm Tristin Tran",
  subcaption: "Front-end Developer",
  quote: "Nothing is your. Till you get it and make it your",
  img: "longhairguy.png",
  imgMobile: "longhairguy4x3.png",
};

const goal = {
  mainGoal: "Become a FullStack Developer",
  anotherGoal:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia neque minima laboriosam magnam, iure voluptates?",
};

const skills = [
  {
    text: "Basic",
    items: ["HTML5", "CSS3", "Javascript"],
  },
  {
    text: "React",
    items: ["React-Router", "React-Hook", "React-Redux"],
  },
  {
    text: "Other",
    items: ["SASS", "Figma Design", "GSAP Animation"],
  },
];

export const slidecontent = [
  {
    key: 1,
    name: "visual animation",
    des: "github/ts4blader/my-first-website",
    img: "visual-animation.png",
    link: "https://ts4blader.github.io/MyFirstWebsite/",
  },
  {
    key: 2,
    name: "GymIdle",
    des: "github/ts4blader/bootstrap-demo",
    img: "gymidle.png",
    link: "https://ts4blader.github.io/gym-idle/",
  },
  {
    key: 3,
    name: "PhoneIdle",
    des: "github/ts4blader/react-first-demo",
    img: "phoneidle.png",
    link: "https://ts4blader.github.io/phone-idle/",
  },
  {
    key: 4,
    name: "My To Do List",
    des: "github/ts4blader/react-with-context-API",
    img: "my-to-do-list.png",
    link: "https://ts4blader.github.io/to-do-list/",
  },
  {
    key: 5,
    name: "Poor Portfolio",
    des: "github/ts4blader/old-portfolio",
    img: "poor-portfolio.png",
    link: "https://ts4blader.github.io/old-portfolio/",
  },
  {
    key: 6,
    name: "Create Color Palette",
    des: "github/ts4blader/create-color-palette",
    img: "create-color-palette.png",
    link: "https://ts4blader.github.io/create-color-palette/",
  },
  {
    key: 7,
    name: "Animation Collection",
    des: "codepen/ts4blader/animation-collection",
    img: "animation-collection.png",
    link: "https://codepen.io/collection/APjBaB",
  },
  {
    key: 8,
    name: "Pages Collection",
    des: "codepen/ts4blader/pages-collection",
    img: "page-collection.png",
    link: "https://codepen.io/collection/pgJoaq",
  },
  {
    key: 9,
    name: "Draw with CSS Collection",
    des: "codepen/ts4blader/draw-collection",
    img: "draw-collection.png",
    link: "https://codepen.io/collection/WvNrkK",
  },
];
export const MainData = [
  {
    title: "introduction",
    img: "user.png",
    content: <Jumbotron content={jumbotron} />,
  },
  {
    title: "goal",
    img: "flag.png",
    content: <GoalBoxes content={goal} />,
  },
  {
    title: "skills",
    img: "pen.png",
    content: <SkillBoxes content={skills} />,
  },
  {
    title: "projects",
    img: "start-up.png",
    content: <Carousel content={slidecontent} />,
  },
];

export default MainData;
