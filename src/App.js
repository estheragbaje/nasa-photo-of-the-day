import React, { useState, useEffect } from "react";
import "./App.css";
import Image from "./components/Image";
import Text from "./components/Text";
import Date from "./components/Date";
import Loading from "./components/Loading";
import axios from "axios";
import styled from "styled-components";

//refactoring using styled-components
const ImageContainer = styled.div`
  flex: 60%;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RightSide = styled.div`
  padding: 40px;
  flex: 40%;
`;

const Headline = styled.p`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const DateStyle = styled.time`
  font-size: 24px;
`;

const Paragraph = styled.p`
  margin-top: 40px;
  font-size: 18px;
  line-height: 180%;
`;

function Content(props) {
  const { date, explanation, hdurl, title, ...rest } = props;
  return (
    <>
      <ImageContainer>
        <Photo src={hdurl} alt={title} />
      </ImageContainer>
      <RightSide>
        <Image src="https://api.nasa.gov/images/logo.png" alt="Nasa Logo" />
        <Headline>{title}</Headline>
        <DateStyle>{date}</DateStyle>
        <hr />

        <Paragraph>{explanation}</Paragraph>
      </RightSide>
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <Content
          date={data.date}
          explanation={data.explanation}
          hdurl={data.hdurl}
          title={data.title}
        />
      )}
    </div>
  );
}

export default App;

// function sampleFunc1() {}
// // const sampleFunc2 = function() {};
// const sampleFunc3 = () => {};
// const sampleFunc1 = () => {};
