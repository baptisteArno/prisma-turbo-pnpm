import { useState } from "react";

export default function Web() {
  const [data, setData] = useState();

  const handleClick = async () => {
    const response = await fetch("/api/posts");
    await fetch("/api/another/hi");
    try {
      const data = await response.json();
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Web</h1>
      <button onClick={handleClick}>Click to get response from server:</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
