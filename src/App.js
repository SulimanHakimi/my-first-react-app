import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex justify-center bg-neutral-600 items-center flex-col w-full h-screen">
        <input className="outline-0 px-3 py-2 rounded-lg" type="text" />
        <button className=" text-yellow-100 bg-green-900 mt-8 p-4 rounded-lg hover:bg-yellow-100 hover:text-green-900 hover:font-bold">
          Submit
        </button>
      </div>
      <div className="justify-center hidden bg-neutral-600 items-center flex-col w-full h-screen">
        <img src="" />
        <button className=" text-yellow-100 bg-green-900 mt-8 p-4 rounded-lg hover:bg-yellow-100 hover:text-green-900 hover:font-bold">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
