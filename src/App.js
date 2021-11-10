import "./scss/main.scss";
import React from "react";
import MainData from "./data/MainData";
import Animation from "./animation/Animation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Overlay from "./components/Overlay";

function App() {
  React.useEffect(() => {
    Animation();
  }, []);

  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <Footer />
        <Nav />
        <Overlay />
        <div className="main">
          {MainData.map((data) => (
            <Section title={data.title} children={data.content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
