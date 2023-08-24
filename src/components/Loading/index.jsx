import { Spinner } from "react-bootstrap";
import { ContainerLoading } from "./style";

const Loading = () => {
  return (
    <ContainerLoading
      fluid
      className=" d-flex justify-content-center align-items-center"
    >
      <div className="text-center">
        <Spinner animation="border" variant="light" className="mb-2" />
        <h3>Carregando...</h3>
      </div>
    </ContainerLoading>
  );
};

export default Loading;
