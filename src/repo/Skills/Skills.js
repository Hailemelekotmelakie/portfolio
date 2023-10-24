import React from "react";
import "./Skills.css";
import TooltipOnHover from "../../component/tooltipOnHover/tooltipOnHover";

const Skills = () => {
  return (
    <div className="skillContainer">
      <h5>Technical and professinal skills</h5>
      <h3 className="mySkillsHeading">MY SKILLS</h3>
      <div className="mySkills">
        <div className="mySkillsLeft">
          <h3 className="mySkillsHeading2">TECHNICAL SKILLS</h3>
          <div className="mySkillsLeftPL mySkillsLeftReact">
            <p>React JS/TS</p>
            <TooltipOnHover content="90%">
              <div></div>
            </TooltipOnHover>
          </div>
          <div className="mySkillsLeftPL mySkillsLeftExpress">
            <p>Express JS/TS</p>
            <TooltipOnHover content="77%">
              <div></div>
            </TooltipOnHover>
          </div>
          <div className="mySkillsLeftPL mySkillsLeftNext">
            <p>Next JS/TS</p>
            <TooltipOnHover content="80%">
              <div></div>
            </TooltipOnHover>
          </div>
          <div className="mySkillsLeftPL mySkillsLeftVue">
            <p>Vue JS</p>
            <TooltipOnHover content="45%">
              <div></div>
            </TooltipOnHover>
          </div>
          <div className="mySkillsLeftPL mySkillsLeftMYSQL">
            <p>MYSQL</p>
            <TooltipOnHover content="86%">
              <div></div>
            </TooltipOnHover>
          </div>
          <div className="mySkillsLeftPL mySkillsLeftPOSTGRES">
            <p>POSTGRES</p>
            <TooltipOnHover content="70%">
              <div></div>
            </TooltipOnHover>
          </div>
          <div className="mySkillsLeftPL mySkillsLeftMongDB">
            <p>MongDB</p>
            <TooltipOnHover content="46%">
              <div></div>
            </TooltipOnHover>
          </div>
        </div>
        <div className="mySkillsRight">
          <p className="mySkillsHeading2">PROFESSIONAL SKILLS</p>
          <div className="circleContainer">
            <div className="pieContaine">
              <TooltipOnHover direction="bottom" content="about 80%">
                <div className="pie" q="80"></div>
              </TooltipOnHover>
              <p>Team Work</p>
            </div>
            <div className="pieContaine">
              <TooltipOnHover direction="bottom" content="about 60%">
                <div className="pie" q="60"></div>
              </TooltipOnHover>
              <p>Creativity</p>
            </div>
            <div className="pieContaine">
              <TooltipOnHover direction="bottom" content="about 50%">
                <div className="pie" q="50"></div>
              </TooltipOnHover>
              <p>Project Managment</p>
            </div>
            <div className="pieContaine">
              <TooltipOnHover direction="bottom" content="about 75%">
                <div className="pie" q="75"></div>
              </TooltipOnHover>
              <p>Communication</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
