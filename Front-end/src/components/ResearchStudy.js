import React from "react";
import {NavLink, Outlet} from "react-router-dom"; 
import styles from "./ResearchStudy.module.css";

const ResearchStudy = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.sidebar}>
        <ul>
          <li>
            <NavLink
              to="about-study"
              className={({isActive}) => (isActive ? styles.activeLink : "")}
            >
              <span>About Study</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="pre-questionnaire"
              className={({isActive}) => (isActive ? styles.activeLink : "")}
            >
              <span>Pre-Questionnaire</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="post-analysis"
              className={({isActive}) => (isActive ? styles.activeLink : "")}
            >
              <span>Post Analysis</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="post-questionnaire"
              className={({isActive}) => (isActive ? styles.activeLink : "")}
            >
              <span>Post-questionnaire</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="completion"
              className={({isActive}) => (isActive ? styles.activeLink : "")}
            >
              <span>Completion</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.mainContent}>
        <Outlet /> {}
      </div>
    </div>
  );
};

export default ResearchStudy;
