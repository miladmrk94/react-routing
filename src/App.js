import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ShowComments from "./Components/ShowComments";
import AddComment from "./Components/AddComment";
import HomePage from "./Components/Page/HomePage";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/Show/:id" element={<ShowComments />} />
          <Route path="/New-Comment" element={<AddComment />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
