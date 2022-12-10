import { Wrapper, Container, TopBar, Box } from "./Main";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import { accentColor, bgColor } from "../style";
import { Icon } from "./Projects";

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
  padding: 30px;
  gap: 20px;
  .title {
    font-size: 40px;
    font-weight: 600;
  }
  .seller {
    font-size: 30px;
    font-weight: 400;
  }
`;

function MyCollection() {
  const { imgId } = useParams();
  const projectNum = localStorage.getItem("projectNum") - 1;

  return (
    <Wrapper>
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
