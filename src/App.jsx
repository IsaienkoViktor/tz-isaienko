import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./redux/userThunk";
import { Card } from "./components/Card/UserCard";
import { Container } from "./components/Container/Container";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Card />
      </Container>
    </>
  );
}

export default App;
