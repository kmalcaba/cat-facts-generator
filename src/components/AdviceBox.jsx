import { useState } from "react";
import { IoPaw } from "react-icons/io5";

import "../css/AdviceBox.css";
import AdviceNumber from "./AdviceNumber";
import Advice from "./Advice";
import Divider from "./Divider";

const AdviceBox = () => {
  const [advice, setAdvice] = useState({
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    id: 117,
  });

  const getAdvice = async () => {
    const advice = await fetchAdvice();

    setAdvice(advice.slip);
  };

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    return data;
  };

  return (
    <div className="AdviceBox">
      <AdviceNumber adviceId={advice.id} />
      <Advice advice={advice.advice} />
      <Divider />
      <IoPaw handleClick={getAdvice} />
    </div>
  );
};

export default AdviceBox;
