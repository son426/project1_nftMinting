import { Wrapper, Container, TopBar } from "./Main";
import { Link } from "react-router-dom";

function MyCollection() {
  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="back">
            <Link to="./">👈</Link>
          </span>
          <span className="header">MyCollection</span>
        </TopBar>
      </Container>
    </Wrapper>
  );
}

export default MyCollection;
