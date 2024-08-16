import React from "react";
import {
  AboutCont,
  Header,
  HeaderOptions,
  HeaderTitle,
  Image,
  PageWrpr,
  SemiHeading,
  TitleCont,
  Text,
  ProjectCont,
  ProjectsWrpr,
  ProjectBox,
  ProjectImage,
  ProjectDesc,
} from "./Style";
import Image1 from "../src/assets/Image1.jpg";
import Image2 from "../src/assets/Image2.jpg";
import Image3 from "../src/assets/Image3.png";
import Image4 from "../src/assets/Image4.png";

const headerOptions = [
  { label: "about" },
  { label: "projects" },
  { label: "experience" },
  { label: "contacts" },
];

const projectsOptions = [
  {
    image: Image2,
    info: "Literature Review on the topic: “Role of AI in Precision Medicine”",
  },
  {
    image: Image3,
    info: "Full-stack web app for streamlining school administration and appraisal ratings",
  },
  {
    image: Image4,
    info: "Cross platform mobile app, to help doctors become 100xdoctors",
  },
];

function App() {
  return (
    <PageWrpr>
      <Header>
        <HeaderTitle>Dhaval J Prasad</HeaderTitle>
        <TitleCont>
          {headerOptions.map((item, index) => (
            <HeaderOptions key={index}>{item.label}</HeaderOptions>
          ))}
        </TitleCont>
      </Header>
      <AboutCont>
        <Image src={Image1} />
        <div>
          <SemiHeading>about</SemiHeading>
          <Text>
            I am an undergraduate student at the Indian Institute of Technology,
            Madras, with research interests in Machine Learning and related
            domains. I have over a year of professional Softwa,bre Engineering
            experience and enjoy tackling difficult problems.<br></br>
            <b>(website under development)</b>
          </Text>
        </div>
      </AboutCont>
      <ProjectCont>
        <SemiHeading>projects</SemiHeading>
        <ProjectsWrpr>
          {projectsOptions.map((item, index) => (
            <ProjectBox key={index}>
              <div style={{ overflow: "hidden" }}>
                <ProjectImage src={item.image} />
              </div>
              <ProjectDesc>{item.info}</ProjectDesc>
            </ProjectBox>
          ))}
        </ProjectsWrpr>
      </ProjectCont>
    </PageWrpr>
  );
}

export default App;
