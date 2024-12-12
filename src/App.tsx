import { useEffect, useState } from "react";




function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function GetApi() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((counter) => counter + 1);
  }

  useEffect(() => {
    GetApi;
  }, []);

  return (
    <div className="h-screen w-full felx flex-col justify-items-center py-10 ">
      <div className="h-1/2 w-2/3 felx flex-col justify-items-center bg-rose-100/50 rounded-3xl px-5 py-5 border-2 shadow-slate-300 shadow-lg">
        <h1 className="text-wrap font-semibold text-xl w-full h-2/3">
          {advice}
        </h1>
        <div className="felx flex-col justify-items-center space-y-5">
          <button
            onClick={GetApi}
            className="bg-slate-200 rounded-full border-1 border-slate-200 px-3 transition-all duration-300 hover:bg-pink-300"
          >
            Get advice
          </button>
          <Message count={count} />
        </div>
      </div>
    </div>
  );
}

function Message(props:any) {
  return (
    <div>
      <span>
        You have read <strong>{props.count}</strong> pieces of device
      </span>
    </div>
  );
}

export default App;
