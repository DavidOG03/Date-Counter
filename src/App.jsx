import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const handleIncreaseStep = () => setStep((step) => step + 1);
  const handleDecreaseStep = () => setStep((step) => step - 1);
  const handleIncreaseCount = () => setCount((count) => count + step);
  const handleDecreaseCount = () => setCount((count) => count - step);
  const date = new Date(
    Date.now() + count * 24 * 60 * 60 * 1000
  ).toDateString();

  return (
    <>
      <h1 className="title text-3xl text-center uppercase font-bold pb-6">
        Date Counter
      </h1>
      <div className="step flex justify-center items-center gap-4 mb-6">
        <button
          onClick={handleDecreaseStep}
          className="border border-purple-500 bg-purple-500 text-white rounded-2xl py-2 px-4 text-3xl cursor-pointer"
        >
          -
        </button>
        <span className="text-2xl">Step: {step}</span>
        <button
          onClick={handleIncreaseStep}
          className="border border-purple-500 bg-purple-500 text-white rounded-2xl py-2 px-4 text-3xl cursor-pointer"
        >
          +
        </button>
      </div>
      <div className="card flex justify-center items-center gap-4 mb-6">
        <button
          onClick={handleDecreaseCount}
          className="border border-purple-500 bg-purple-500 text-white rounded-2xl py-2 px-4 text-3xl cursor-pointer"
        >
          -
        </button>
        <span className="text-2xl">Count: {count}</span>
        <button
          onClick={handleIncreaseCount}
          className="border border-purple-500 bg-purple-500 text-white rounded-2xl py-2 px-4 text-3xl cursor-pointer"
        >
          +
        </button>
      </div>
      <p className="text-2xl text-center">
        {count === 0
          ? "Today is"
          : count > 1
          ? `${count} days from today will be`
          : count === 1
          ? `${count} day from today will be`
          : count < -1
          ? `${count * -1} days ago was`
          : count === -1
          ? `${count} day ago was`
          : ""}{" "}
        {date}
      </p>
    </>
  );
}

export default App;
