import { Wrapper, Container, TopBar } from "./Main";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const ImgDetail = styled.div`
  img {
    width: 300px;
    height: 300px;
  }
`;

function Seller() {
  const { sellerId } = useParams();

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="back">
            <Link to="./">👈</Link>
          </span>
          <span className="header">Seller</span>
        </TopBar>
        <ImgDetail>
          <img src={data[sellerId - 1].seller_img_src} />
        </ImgDetail>
      </Container>
    </Wrapper>
  );
}

export default Seller;
