import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchSingleDigimonThunk,
  fetchAllDigimonsThunk,
} from "../../store/modules/digimons/thunks";
import {
  Alert,
  Button,
  Container,
  Form,
  Modal,
  Spinner,
} from "react-bootstrap";
import { ContainerSearch } from "./style";
import Digimon from "../Digimon";
import { resetDigimons } from "../../store/modules/digimons/actions";
import { MusicNote } from "react-bootstrap-icons";

const Search = () => {
  const [valueInput, setValueInput] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = async () => {
    setError(false);
    setIsLoading(true);

    try {
      await dispatch(fetchSingleDigimonThunk(valueInput, setError));
      setIsLoading(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (show) {
      dispatch(resetDigimons());
    } else {
      dispatch(resetDigimons());
      dispatch(fetchAllDigimonsThunk());
    }
  }, [show, dispatch]);

  return (
    <>
      <ContainerSearch className="mw-100  m-0 p-0">
        <Container className="container-tittle-modal d-flex flex-column justify-content-center align-items-center  m-auto">
          <h2 className="text-center mt-2">
            Digimon Digitais <MusicNote />
          </h2>
          <Button
            variant="primary"
            onClick={() => {
              handleShow();
            }}
            className=""
          >
            Encontre seu Digimon favorito
          </Button>
        </Container>
      </ContainerSearch>
      <Modal show={show} onHide={handleClose} className="bg-dark" centered>
        <Modal.Header closeButton>
          <span className="fw-bold">Momento nostálgico</span>
        </Modal.Header>
        <Form className="d-flex flex-column justify-content-center mb-2">
          <Form.Group controlId="formBasicSearch">
            <Form.Control
              type="text"
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
              placeholder="Procure o seu Digimon!"
              className="text-center m-auto"
            ></Form.Control>
          </Form.Group>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="w-50 m-auto m-auto mt-2 mb-2"
            disabled={isLoading}
          >
            {isLoading ? <Spinner animation="border" size="sm" /> : "Pesquisar"}
          </Button>
          <Digimon />
        </Form>
        {error && (
          <Alert variant="danger" className="w-75 m-auto mb-2 text-center">
            Digimon não encontrado.
          </Alert>
        )}
      </Modal>
    </>
  );
};

export default Search;
