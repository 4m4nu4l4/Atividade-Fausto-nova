import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  const url = "https://dummyjson.com/products";
  useState(() => {
    fetch(url)
      .then((resposta) => resposta.json())
      .then((data) => {
        setProdutos(data.products);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>Produtos</Col>
      </Row>
      {produtos.map((produto) => (
        <Col>{produto.title}</Col>
      ))}
    </Container>
  );
}
