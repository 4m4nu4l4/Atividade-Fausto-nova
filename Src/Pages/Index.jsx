import Album from "../components/Album";

export default function Inicial() {
  return (
    <div>
      <h1>Seja bem vindo ao nosso APP</h1>
      <p>Escolha os produtos que deseja comprar</p>
      <Album
        title="Album maravilhoso"
        text="Descrição maravilhosa do nosso album"
        img="https://picsum.photos/300/400"
      />
    </div>
  );
}
