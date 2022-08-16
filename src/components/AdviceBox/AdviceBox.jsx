import { useState } from "react";
import { FaDiceFive } from "react-icons/fa";

import "./AdviceBox.scss";
import AdviceNumber from "../AdviceNumber/AdviceNumber";
import Advice from "../Advice/Advice";
import Divider from "../Divider/Divider";

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
      <FaDiceFive onClick={getAdvice} />
    </div>
  );
};

export default AdviceBox;
