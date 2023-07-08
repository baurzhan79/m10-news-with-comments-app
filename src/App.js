import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import News from "./containers/News/News";
import AddPost from "./containers/AddPost/AddPost";
import FullPost from "./containers/FullPost/FullPost";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/add" element={<AddPost />} />
          <Route path="/news/:newsId" element={<FullPost />} />
          <Route path="*" element={<h3 style={{ textAlign: "center" }}>Page not found</h3>} />
        </Routes>
      </Layout>
    </BrowserRouter >
  );
}

export default App;
