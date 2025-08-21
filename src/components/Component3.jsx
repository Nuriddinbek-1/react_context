function Component3({ count, setCount }) {
  return (
    <div className="component3">
      <h2>Component3</h2>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}>
        -
      </button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Component3;
