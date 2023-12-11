import React from "react";
import background from "../assets/login.jpg";
import styled from "styled-components";
const bgimage = () => {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
export default bgimage;
