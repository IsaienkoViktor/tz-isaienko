import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./redux/userThunk";
import { UserCard } from "./components/UserCard/UserCard";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);
  return <UserCard />;
}

export default App;
