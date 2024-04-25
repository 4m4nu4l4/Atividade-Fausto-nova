import { Card } from "react-bootstrap";

export const CardNoticia = (props) => {
  return (
    <Card>
      {props?.img && <Card.Img variant="top" src={props.img} />}
      <Card.Title style={{ padding: 30, paddingBottom: 0 }}>
        {props.title}
      </Card.Title>
      <Card.Text style={{ padding: 30, paddingTop: 10 }}>
        {props.text}
      </Card.Text>
    </Card>
  );
};
