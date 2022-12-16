import { Wrapper, Container, TopBar, Box } from "./Main";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import { accentColor, bgColor } from "../style";
import { Icon } from "./Projects";
import { Helmet } from "react-helmet";

const ImgDetail = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 300px;
    height: 300px;
  }
`;

const Button = styled.button`
  border: transparent;
  border-radius: 5px;
  background-color: ${accentColor};
  color: white;
  font-size: 20px;
  position: absolute;
  bottom: 10%;
  left: 10%;
  display: block;
  width: 80%;
  height: 8%;
  margin-bottom: 20px;
  a {
    padding: 20px 40px;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 30px;
  width: 300px;
  gap: 20px;
  .title {
    font-size: 30px;
    font-weight: 600;
  }
  .content {
    font-size: 15px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
  }
`;

function MyCollection() {
  const { imgId } = useParams();
  const projectNum = localStorage.getItem("projectNum") - 1;

  return (
    <Wrapper>
      <Helmet>
        <title>My Collection</title>
      </Helmet>
      <Container>
        <TopBar>
          <span className="back">
            <Link to={`/mycollections`}>{Icon}</Link>
          </span>
          <span className="header">Collection</span>
        </TopBar>
        <Box>
          <ImgDetail>
            <img src={data[projectNum].imgs[imgId]} />
          </ImgDetail>
          <Meta>
            <span className="title">{data[projectNum].metas[imgId].title}</span>
            <span className="content">
              {data[projectNum].metas[imgId].content}
            </span>
          </Meta>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default MyCollection;
