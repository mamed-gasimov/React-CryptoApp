import { FC } from "react";
// import { Switch, Route, Link } from 'react-router-dom';
// import { Layout, Typography, Space } from 'antd';
import { Navbar } from "./components";

const App: FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
