export default function Web() {
  const handleClick = async () => {
    await fetch("/api/posts");
  };

  return (
    <div>
      <h1>Web</h1>
      <button onClick={handleClick}>Click to generate error in server</button>
    </div>
  );
}
