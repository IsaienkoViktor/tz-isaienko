import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./redux/userThunk";
import { Card } from "./components/Card/Card";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);
  return <Card />;
}

export default App;
