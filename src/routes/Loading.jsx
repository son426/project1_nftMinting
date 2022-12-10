import { Wrapper, Container, TopBar, Box } from "./Main";

function Loading() {
  return (
    <Wrapper>
      <Container>
        <Box>
          <span style={{ fontSize: "30px", fontWeight: "600" }}>Loading</span>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Loading;
