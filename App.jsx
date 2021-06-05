import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
};

export default App;
