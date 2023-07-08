import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<h3 style={{ textAlign: "center" }}>Component News will be here</h3>} />
          <Route path="/news" element={<h3 style={{ textAlign: "center" }}>Component News will be here</h3>} />
          <Route path="/news/add" element={<h3 style={{ textAlign: "center" }}>Component Add New Post will be here</h3>} />
          <Route path="/news/:newsId" element={<h3 style={{ textAlign: "center" }}>Component Full Post will be here</h3>} />
          <Route path="*" element={<h3 style={{ textAlign: "center" }}>Page not found</h3>} />
        </Routes>
      </Layout>
    </BrowserRouter >
  );
}

export default App;
