import { useEffect } from "react";
import { Card } from "./components/card/card";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./redux/userThunk";
import { Container } from "./components/container/Container.styled";

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
