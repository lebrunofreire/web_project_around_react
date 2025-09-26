import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Author from "./Author/Author";

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
