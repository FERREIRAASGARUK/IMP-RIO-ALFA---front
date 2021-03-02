import React, { useState, useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Link, useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { AppBar, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCartOutlined";
import Popover from "@material-ui/core/Popover";
import Add from "@material-ui/icons/AddCircleOutline";
import Remove from "@material-ui/icons/RemoveCircleOutline";
import Button from "@material-ui/core/Button";
import Btn from "./Button/Button2";
import Botao from "./Button/Button";
import { Usuario } from "../Form Login/index";
import { Contexto } from "../../Root/root";
import classes from "./estilo";
import { Produtos } from "../Hooks/Produtos";
import api from "../../Services/userServer";
import Api from "../../Services/products";
import produtos from "../../Services/cardServer";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { profileImg } from "../Profile/Setings/Settings";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LaptopWindowsIcon from "@material-ui/icons/LaptopWindows";
import DevicesOtherIcon from "@material-ui/icons/DevicesOther";
import SportsFootballIcon from "@material-ui/icons/SportsFootball";
const Header = () => {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const [openMenu, setOpenMenu] = useState(true);
  const user = useContext(Usuario);
  const Prod = useContext(Produtos);
  const vertical = "top";
  const horizontal = "right";
  const [Aberto, setAberto] = useState(false);
  const history = useHistory();
  const estilo = classes();
  const contexto = useContext(Contexto);
  const [search, setSearch] = useState("");
  const [Open, setOpen] = useState(false);
  const [elemento, setElementos] = useState([]);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(0);
  const Cart = useContext(Produtos);
  const profile = useContext(profileImg);

  const handleClose = () => {
    setOpen(false);
  };

  function OpenMenu() {
    setOpenMenu(true);
  }
  function handleDrawerClose() {
    setOpenMenu(false);
  }

  async function atualizar(props) {
    props.quantidade = props.quantidade - 1;
    Cart.setProduto(props.quantidade);

    return await Api.put(`http://localhost:2000/products/${props.id}`, props);
  }
  async function aumentar(props) {
    props.quantidade = props.quantidade + 1;
    Cart.setProduto(props.quantidade);

    return await Api.put(`http://localhost:2000/products/${props.id}`, props);
  }

  async function deletar(props) {
    props.quantidade = props.quantidade - 1;
    Cart.setProduto(props.quantidade);

    return await Api.delete(`/products/${props.id}`);
  }

  async function remover(elemento) {
    setValue(value + 1);
    elemento.quantidade === 0 ? deletar(elemento) : atualizar(elemento);
  }
  function fechar() {
    setAberto(false);
  }

  function mudar() {
    contexto.setPesquisa(search);
    history.push("/");
  }
  function setar(event) {
    setSearch(event.target.value);
  }
  function filtrar(categoria) {
    setSearch(categoria);
  }

  function Verificar(props) {
    return user.valid ? <Botao image={props.image} /> : <Btn />;
  }

  async function cart() {
    const id = JSON.parse(localStorage.getItem("login"));
    const prods = await Api.get("/products");
    const prodsValids = prods.data;
    const produtos = prodsValids.filter((e) => {
      return id && e.Usuario === id.id;
    });

    produtos ? setElementos(produtos) : setElementos(null);
  }

  const abrir = () => {
    history.push("/");
    user.valid ? setOpen(true) : setAberto(true);

    return setValue(value + 1);
  };

  useEffect(() => {
    cart();
  }, [value]);

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={Aberto}
        onClose={fechar}
        autoHideDuration={5000}
      >
        <Alert severity="error">
          <div>{"Faça login para acessar o carrinho de compras"}</div>
        </Alert>
      </Snackbar>

      <div className={estilo.header} container spacing={0}>
        <Toolbar>
          <IconButton
            className={estilo.Toolbar}
            onClick={() => {
              OpenMenu();
              contexto.setPesquisa(null);
              history.push("/");
            }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            to="/"
            onClick={() => {
              contexto.setPesquisa(null);
            }}
            style={{ textDecoration: "none" }}
          >
            <Typography variant="h1" className={estilo.h1}>
              IMPÉRIO ALFA
            </Typography>
          </Link>
        </Toolbar>

        <Drawer
          className={estilo.drawer}
          variant="persistent"
          anchor="left"
          open={openMenu}
          classes={{
            paper: { width: 240 },
          }}
        >
          <div className={estilo.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon style={{ color: "#050505", fontSize: 50 }} />
            </IconButton>
          </div>
          <Divider className={estilo.divider} />
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => {
              mudar();
            }}
            onMouseOver={() => {
              filtrar("Celulares");
            }}
          >
            <div className={estilo.categorias}>
              <Typography className={estilo.options}>Celulares</Typography>
              <PhoneAndroidIcon
                style={{ color: "black", marginTop: 33, marginRight: 100 }}
              />
            </div>
          </Link>
          <Divider />

          <Divider className={estilo.divider} />
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => {
              mudar();
            }}
            onMouseOver={() => {
              filtrar("Notebook");
            }}
          >
            <div className={estilo.categorias}>
              <Typography className={estilo.options}>Laptops</Typography>
              <LaptopWindowsIcon
                style={{ color: "black", marginTop: 33, marginRight: 100 }}
              />
            </div>
          </Link>
          <Divider />
          <Divider className={estilo.divider} />
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => {
              mudar();
            }}
            onMouseOver={() => {
              filtrar("Esporte");
            }}
          >
            <div className={estilo.categorias}>
              <Typography className={estilo.options}>Esportes</Typography>
              <SportsFootballIcon
                style={{ color: "black", marginTop: 33, marginRight: 100 }}
              />
            </div>
          </Link>
          <Divider />
          <Divider className={estilo.divider} />
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => {
              mudar();
            }}
            onMouseOver={() => {
              filtrar("Tênis");
            }}
          >
            <div className={estilo.categorias}>
              <Typography className={estilo.options}>Celulares</Typography>
              <PhoneAndroidIcon
                style={{ color: "black", marginTop: 33, marginRight: 100 }}
              />
            </div>
          </Link>
          <Divider />
          <Divider className={estilo.divider} />
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => {
              mudar();
            }}
            onMouseOver={() => {
              filtrar("Eletrônicos");
            }}
          >
            <div className={estilo.categorias}>
              <Typography className={estilo.options}>Celulares</Typography>
              <PhoneAndroidIcon
                style={{ color: "black", marginTop: 33, marginRight: 100 }}
              />
            </div>
          </Link>
          <Divider />
        </Drawer>

        <Grid item xs={7}>
          <Paper component="form" className={estilo.papel}>
            <input
              variant="filled"
              className={estilo.input}
              placeholder="Escolha seu produto"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={setar}
            />
            <IconButton style={{ padding: 10 }} onClick={() => mudar()}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <div className={estilo.cart}>
          <Link onClick={() => abrir()}>
            <ShoppingCart color="secondary" fontSize="large" />
          </Link>
        </div>

        {console.log(elemento)}

        <Popover open={Open} onClose={handleClose} className={estilo.carrinho}>
          {elemento &&
            elemento.map((e) => (
              <div>
                <div className={estilo.produto}>
                  <img
                    className={estilo.image}
                    alt="produto"
                    src={e.imageUrl}
                  />
                  <div>
                    <Typography className={estilo.title}>{e.title}</Typography>

                    <Typography className={estilo.value}>
                      R$
                      {e.price}
                    </Typography>
                  </div>

                  <div className={estilo.quantidade}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <IconButton
                        onClick={() => remover(e)}
                        className={estilo.btn}
                      >
                        <Remove />
                      </IconButton>
                      <IconButton
                        onClick={() => aumentar(e)}
                        className={estilo.btn}
                      >
                        <Add />
                      </IconButton>
                    </div>

                    <div className={estilo.valor}>
                      <Typography style={{ fontWeight: 1000 }}>
                        {e.quantidade.toFixed(0)}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          <div className={estilo.footer}>
            <Link to="/Cart" style={{ textDecoration: "none" }}>
              <Button variant="contained" className={estilo.finalizar}>
                Finalizar
              </Button>
            </Link>
          </div>
        </Popover>

        <Grid item xs={1}>
          <Verificar image={profile.image} />
        </Grid>
      </div>
    </div>
  );
};

export default Header;
