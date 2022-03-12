import { FC } from "react";
// import { Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar } from "./components";
import MainRouter from "./router/MainRouter";
import './globals.css';

const App: FC = () => {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Layout>
          <div className='routes'>
            <MainRouter />
          </div>
        </Layout>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
