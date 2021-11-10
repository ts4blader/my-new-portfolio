import React from "react";
import Title from "./Title";

const Section = ({ children, title }) => {
  return (
    <section className={`${title}-section section`} id={title}>
      <Title text={title} />
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
