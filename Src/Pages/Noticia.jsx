import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CardNoticia } from "../components/CardNoticia";
import { Link } from "react-router-dom";

const API_KEY = "pub_409196d7b723a6dd80ac9ecec6510ef97737d";
export default function Noticias() {
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=pt`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNoticias(data.results);
      });
  }, []); // quem vai escutar? [] vai escutar a entrada
  // [noticias]

  return (
    <Container>
      <Row>
        <Col>
          <h1>Notícias</h1>
        </Col>
        <Row>
          {noticias &&
            noticias.map((noticia, index) => (
              <Col lg={6} xs={12} key={index}>
                <Link to={`${noticia.link}`}>
                  <CardNoticia
                    title={noticia.title}
                    text={noticia.description}
                    img={noticia.image_url}
                  />
                </Link>
              </Col>
            ))}
        </Row>
      </Row>
    </Container>
  );
}
