import { Container } from "react-bootstrap";
import { styled } from "styled-components";

export const ContainerCard = styled(Container)`
  p {
    font-family: Borel;
    font-size: 19px;
  }

  .list-card {
    flex-direction: column;
  }

  img {
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    .card {
      width: 30%;
    }
  }

  @media (min-width: 1024px) {
    .card {
      width: 19%;
    }
  }

  @media (min-width: 425px) and (max-width: 767px) {
    .list-card {
      flex-direction: row;
    }

    .card {
      width: 35%;
    }

    .list-card {
      gap: 5px;
    }
  }
`;
