import React from "react";
import { Container, ModalBody } from "./styled";

export default ({ children, status, setStatus }) => {
  const handleModalClick = (e) => {
    //verifica se  onde foi clicado contém a classe modalBg
    if (e.target.classList.contains("modalBg")) {
      setStatus(false);
    }
  };

  return (
    <Container className="modalBg" status={status} onClick={handleModalClick}>
      <ModalBody>{children}</ModalBody>
    </Container>
  );
};
