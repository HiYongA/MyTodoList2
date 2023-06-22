import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import Layout from "shared/Layout";
import Home from "pages/Home";
import TodoDetail from "pages/TodoDetail";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<TodoDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Router;
