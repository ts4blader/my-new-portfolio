import React from "react";
import ContentBox from "../components/ContentBox";

function GoalBoxes({ content }) {
  return (
    <div className="goal-boxes">
      <ContentBox text={content.mainGoal} />
      <ContentBox text={content.anotherGoal} />
    </div>
  );
}

export default GoalBoxes;
