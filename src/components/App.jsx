import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page__content">
        <Header />
        <Main />
        <Author />
        <Footer />
      </div>
    </>
  );
}

export default App;
