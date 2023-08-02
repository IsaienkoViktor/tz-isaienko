import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/Homepage/HomePage";
import { TweetsPage } from "./pages/TweetsPage/TweetsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="TweetsPage" element={<TweetsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
