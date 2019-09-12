import React from "react";
import Text from "./Text";
import styled from "styled-components";

const Spinner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
`;

const LoaderText = styled.p`
  font-size: 24px;
`;

function Loading() {
  return (
    <Spinner>
      <Loader></Loader>

      <LoaderText>Loading...</LoaderText>
    </Spinner>
  );
}

export default Loading;
