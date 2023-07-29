import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { ContainerCard } from "./style";

const Digimon = () => {
  const { digimons } = useSelector((state) => state);
  return (
    <ContainerCard className="d-flex justify-content-center">
      <ListGroup className="w-75">
        {digimons.map((elem, indice) => {
          return (
            <ListGroup.Item
              key={indice}
              className="mb-1 d-flex flex-column justify-content-center border-warning"
            >
              {
                <>
                  <p>
                    <span className="fw-bold">Nome:</span> {elem.name}
                  </p>
                  <p>
                    <span className="fw-bold">Level:</span> {elem.level}
                  </p>
                  <img src={elem.img} alt={elem.name} className="img-fluid" />
                </>
              }
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </ContainerCard>
  );
};

export default Digimon;
