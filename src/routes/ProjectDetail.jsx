import { Wrapper, Container, TopBar, Box, Button } from "./Main";
import { Project, ImgList } from "../style";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";
import { Icon } from "./Projects";

function ProjectDetail() {
  const { projectId } = useParams();
  localStorage.setItem("projectNum", projectId);

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="back">
            <Link to="./">{Icon}</Link>
          </span>
          <span className="header">{data[projectId - 1].project_title}</span>
        </TopBar>
        <Box>
          <Project>
            <img src={data[projectId - 1].project_img_src} />
            <span className="summary">
              {data[projectId - 1].project_summary}
            </span>
            <ImgList>
              {data[projectId - 1].imgs.map((img_src, index) => (
                <Link key={index} to={`/collection/${index}`}>
                  <img src={img_src} />
                </Link>
              ))}
            </ImgList>
          </Project>
          <Button>
            <Link to="/minting">기부하러가기</Link>
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default ProjectDetail;
