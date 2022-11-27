import { Wrapper, Container, TopBar, Box } from "./Main";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";

const Project = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  img {
    width: 100%;
  }
  span {
    padding: 20px;
    line-height: 1.2rem;
  }
  .summary {
    font-size: 15px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const Carousel = styled.div`
  width: 100%;
  display: flex;
  overflow: scroll;
  -webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 130px;
    height: 130px;
  }
`;

function ProjectDetail() {
  const { projectId } = useParams();

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="header">
            About {data[projectId - 1].project_title}
          </span>
        </TopBar>
        <Box>
          <Project>
            <img src={data[projectId - 1].project_img_src} />
            <span className="summary">
              {data[projectId - 1].project_summary}
            </span>
            <Carousel>
              <Link to="/collections/1">
                <img src={data[projectId - 1].img1_src} />
              </Link>
              <Link to="/collections/2">
                <img src={data[projectId - 1].img2_src} />
              </Link>
              <Link to="/collections/1">
                <img src={data[projectId - 1].img3_src} />
              </Link>
              <Link to="/collections/2">
                <img src={data[projectId - 1].img4_src} />
              </Link>
            </Carousel>
          </Project>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default ProjectDetail;
