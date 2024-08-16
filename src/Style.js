import styled from "styled-components";

export const PageWrpr = styled.div`
  height: 400%;
  width: 100%;
  /* background-color: red; */
  overflow-y: auto;
`;

export const Header = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #d0d0d0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 10rem 0rem 10rem;
  position: fixed;
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

export const TitleCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const HeaderOptions = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const AboutCont = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem 10rem 0rem 10rem;
  gap: 10rem;
`;

export const Image = styled.img`
  width: 25rem;
  height: 31.25rem;
  border-radius: 1rem;
`;

export const SemiHeading = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;

export const Text = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
`;

export const ProjectCont = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 3rem 10rem 0rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectsWrpr = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProjectBox = styled.div`
  width: 25rem;
  height: 37.5rem;
  border-radius: 1rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    img {
      transform: scale(1.125); /* Corrected the scale syntax */
      transition: transform 0.5s ease-in-out; /* Add transition for smooth effect */
    }
  }
`;

export const ProjectImage = styled.img`
  height: 25rem;
  width: 25rem;
  border-radius: 1rem 1rem 0rem 0rem;
`;

export const ProjectDesc = styled.div`
  height: calc(100% - 25rem);
  width: 25rem;
  background-color: #d0d0d0;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;
