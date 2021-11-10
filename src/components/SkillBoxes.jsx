import React from "react";
import ContentBox from "../components/ContentBox";
import Icon from "../components/Icon";

function SkillBoxes({ content }) {
  return (
    <div className="skill-boxes">
      <div className="skill-boxes__item">
        <ContentBox text={content[0].text} items={content[0].items} />
      </div>
      <div className="skill-boxes__item">
        <Icon src="creativity.png" alt="creativity" />
        <ContentBox text={content[1].text} items={content[1].items} />
      </div>
      <div className="skill-boxes__item">
        <ContentBox text={content[2].text} items={content[2].items} />
      </div>
    </div>
  );
}

export default SkillBoxes;
