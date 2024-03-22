import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage, PostPage } from '../../pages/index.ts';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
