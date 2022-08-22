import React from "react";
import styled from "styled-components";

const TodoTitle = () => {
  return <MainTitle>Today I'll do.</MainTitle>;
};

const MainTitle = styled.div`
  font-size: 6rem;
  color: #222831;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px, -1px 0 #fff, 0 1px #fff,
    1px 0 #fff, 0 -1px #fff;
  text-align: center;
`;

export default TodoTitle;
