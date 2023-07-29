import { useSelector } from "react-redux";
import { ListGroup, Image } from "react-bootstrap";
import { ContainerCard } from "./style";

const DigimonList = () => {
  const digimons = useSelector((state) => state.digimons);

  const getClassNameByLevel = (level) => {
    switch (level) {
      case "Rookie":
        return "primary";
      case "Champion":
        return "info";
      case "Ultimate":
        return "secondary";
      case "In Training":
        return "warning";
      default:
        return "danger";
    }
  };

  return (
    <ContainerCard className="overflow-auto">
      <ListGroup className="list-card d-flex flex-md-row  flex-wrap align-items-center justify-content-center col-md-10 w-100 overflow-y">
        {digimons.map((elem, indice) => {
          const backgroundItem = getClassNameByLevel(elem.level);
          return (
            <ListGroup.Item
              key={indice}
              className={`card bg-${backgroundItem} my-1  d-flex flex-column  align-items-center m-0 col-8 col-md-3 m-md-2`}
            >
              <p className="w-100 text-left ">
                Nome: <br /> {elem.name}
              </p>
              <p className="w-100 text-left">
                Level: <br /> {elem.level}
              </p>
              <Image src={elem.img} alt={elem.name} className="img-fluid" />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </ContainerCard>
  );
};

export default DigimonList;
