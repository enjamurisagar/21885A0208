import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (url) {
      fetch(`http://104.211.219.98/numbers/${url}`)
        .then((res) => res.json())
        .then((ans) => setData(ans.numbers));
    }
  }, [url]);
  console.log(data);
  return (
    <div className="App">
      <div className="data">
        <ul style={{ listStyle: "none", display: "flex" }}>
          {data?.map((item, id) => (
            <li style={{ margin: "0 10px" }} key={id}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="fetch-block">
        <button onClick={() => setUrl("primes")}>Fetch Prime numbers</button>
        <button onClick={() => setUrl("odd")}>Fetch Odd numbers</button>
        <button onClick={() => setUrl("rand")}>Fetch Random numbers</button>
        <button onClick={() => setUrl("fibo")}>Fetch Fibbonacci numbers</button>
      </div>
    </div>
  );
}

export default App;
