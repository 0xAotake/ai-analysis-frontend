import React, { useState } from "react";
import axios from "axios";

function App() {
  const [result, setResult] = useState("");

  const handleClick = async () => {
    const response = await axios.post("https://你的后端地址/analyze");
    setResult(response.data.result);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI 股票分析工具</h1>
      <button onClick={handleClick}>开始分析</button>
      <p>结果：{result}</p>
    </div>
  );
}

export default App;
