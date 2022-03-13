import { FC } from "react";
import { Layout } from 'antd';
import { Footer, Navbar } from "./components";
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
        <Footer />
      </main>
    </div>
  );
}

export default App;
