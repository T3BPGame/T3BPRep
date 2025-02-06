import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { styled } from "styled-components";
import MainPage from "./Pages/MainPage";
import SelfSummary from "./Components/SelfSummary";
import { Column } from "./Styles/StyledComponents";
import Footer from "./Components/Footer";
import Video from './assets/VisionDocVideo1.mp4';

const AppContainer = styled(Column)`
  padding: 60px;
  padding-bottom: 20px;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 0;
    padding: 30px 10px;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 30px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const NavbarLink = styled(Link)`
  font-size: 2.2rem;
  text-decoration: none;
  color: green;
  font-weight: bold;

  &:hover {
    color: lightgreen;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 0;
  }
  `;

const App: React.FC = () => {
  window.addEventListener("scroll", function () {
    document.body.style.backgroundPosition = `${window.scrollY * 0.05}px ${window.scrollY * 0.8}px`;
  });

  return (
    <Router>
      <AppContainer>
        <SelfSummary />
        <video className="video" width="750" height="500" controls>
          <source src={Video} type="video/mp4" />
        </video>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </AppContainer>
        <Footer/>
    </Router>
  );
};

export default App;
