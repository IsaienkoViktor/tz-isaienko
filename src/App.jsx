import { useEffect } from "react";
import { Container } from "./components/Container/Container";
import { Card } from "./components/card/card";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./redux/userThunk";

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
