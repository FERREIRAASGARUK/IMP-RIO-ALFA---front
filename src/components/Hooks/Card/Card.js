import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Contexto } from "../../../Root/root";
import api from "../../../Services/cardServer.js";
import Api from "../../../Services/products";
import classe from "./style";
import { Produtos } from "../Produtos";
import { Usuario } from "../../Form Login/index";
import users from "../../../Services/userServer";
import { Container, Paper, Image, Title, Price } from "./style";

function Card() {
  const User = useContext(Usuario);
  const busca = useContext(Contexto);
  const Cart = useContext(Produtos);
  const estilo = classe();
  const [cards, setCards] = useState();

  let urls;

  useEffect(() => {
    setUrls();
  }, [busca.pesquisa]);

  async function setUrls() {
    busca.pesquisa
      ? (urls = `/promotions?_order=desc&_sort=id&categoria_like=${busca.pesquisa}`)
      : (urls = "/promotions?_order=desc&_sort=id");

    const response = await api.get(urls);
    setCards(response.data);
  }

  async function adicionar(props) {
    const currentUser = JSON.parse(localStorage.getItem("login"));
    const validar = await Api.get(`/products`);
    const semelhante = validar.data.filter((e) => {
      return e.title === props.title && currentUser.id === e.Usuario;
    });

    console.log(semelhante);

    props.Usuario = currentUser.id;

    async function atualizar() {
      props.quantidade = props.quantidade + 1;
      Cart.setProduto(props.quantidade);
      console.log(Cart.p);
      return await Api.put(`http://localhost:2000/products/${props.id}`, props);
    }

    async function postar() {
      props.id = props.id + 3;
      Cart.setProduto(props.quantidade);
      console.log(Cart.produto);
      return await Api.post(`http://localhost:2000/products`, props);
    }

    User.valid && semelhante.length >= 1 ? atualizar() : postar();
  }
  return (
    <div>
      <Container>
        {cards &&
          cards.map((elemento) => (
            <Paper>
              <a
                className={estilo.link}
                href={elemento.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image alt="imagem" src={elemento.imageUrl} />
              </a>

              <a
                className={estilo.link}
                href={elemento.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div style={{ height: 100 }}>
                  <Title>{elemento.title}</Title>
                </div>
              </a>
              <div className={estilo.precoPai}>
                <Price>
                  R$
                  {elemento.price}
                </Price>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => adicionar(elemento)}
                >
                  Adicionar
                </Button>
              </div>
            </Paper>
          ))}
      </Container>
    </div>
  );
}

export default Card;
