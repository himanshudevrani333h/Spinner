import { Wheel } from "react-custom-roulette";
import { useState } from "react";
import * as Styled from "./style";

export const Wheels = () => {
  const data = [
    { option: "$0", style: { backgroundColor: "#e84118", textColor: "white" } },
    { option: "$120", style: { backgroundColor: "#0097e6", textColor: "white" } },
    { option: "$38", style: { backgroundColor: "#9c88ff", textColor: "white" } },
    { option: "$45", style: { backgroundColor: "#f368e0", textColor: "white" } },
    { option: "$51", style: { backgroundColor: "#ff9f43", textColor: "white" } },
    { option: "$65", style: { backgroundColor: "#1dd1a1", textColor: "white" } },
    { option: "$7k", style: { backgroundColor: "#ee5253", textColor: "white" } },
    { option: "$800", style: { backgroundColor: "#341f97", textColor: "white" } },
  ];
  const [x, sx] = useState<boolean>(false);
  const [result, setResult] = useState<any>("");
  const [showResult, setShowResult] = useState<any>("");
  const [spintext, setSpinText] = useState<string>("SPIN");
  function stopSpin() {
    sx(false);
    setShowResult(data[result].option);
    setSpinText("SPIN");
  }

  function getResult() {
    const res = Math.floor(Math.random() * data.length);
    console.log(data[res]);
    setResult(res);
   
  }
  return (
    <>
      <Styled.Header>
        <span className="h1">Spinning</span>
        <br></br>
        <span className="h2">Wheel</span>
      </Styled.Header>
      <Styled.WheelContainer>
        <Wheel
          prizeNumber={result}
          mustStartSpinning={x}
          data={data}
          backgroundColors={["#3e3e3e", "#df3428"]}
          textColors={["#ffffff"]}
          onStopSpinning={() => stopSpin()}
          radiusLineWidth={2}
          outerBorderWidth={3}
          innerRadius={5}
          radiusLineColor={'#39FF14'}
          outerBorderColor={'#faed27'}
        />
        <Styled.SpinBtn
          onClick={() => {
            setSpinText("");
            sx(true);
            getResult();
          }}
        >
          {spintext}
        </Styled.SpinBtn>
        <Styled.SpanTag>You Won:   {showResult}</Styled.SpanTag>
      </Styled.WheelContainer>

     
    </>
  );
};
