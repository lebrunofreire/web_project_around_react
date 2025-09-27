import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page__content">
        <Main />
      </div>
    </>
  );
}

export default App;
