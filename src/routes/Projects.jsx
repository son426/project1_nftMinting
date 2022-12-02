import { Wrapper, Container, TopBar, Box, backIcon } from "./Main";
import styled from "styled-components";
import { accentColor, bgColor } from "../style";
import { Link } from "react-router-dom";
import data from "../data.json";

import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = <FontAwesomeIcon className="icon" icon={faChevronLeft} />;

const Project = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  img {
    width: 100%;
  }
  span {
    padding: 10px;
  }
  .title {
    font-size: 22px;
    font-weight: 600;
  }
  .subtitle {
    font-size: 15px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
  }
  .period {
    font-size: 13px;
    font-weight: 600;
  }
`;

function Projects() {
  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="back">
            <Link to="../">{Icon}</Link>
          </span>
          <span className="header">Projects</span>
        </TopBar>
        <Box>
          {data.map((data) => (
            <Link to={`/projects/${data.id}`} key={data.id}>
              <Project>
                <img src={data.project_img_src} />
                <span className="title">{data.project_title}</span>
                <span className="subtitle">{data.project_subtitle}</span>
                <span className="period">{data.project_period}</span>
              </Project>
            </Link>
          ))}
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Projects;
