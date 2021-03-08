import { makeStyles } from "@material-ui/styles";

const classe = makeStyles({
  paper: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    margin: 20,
    boxShadow: "0 2px 10px 0 rgba(0,0,0,.80)",
    height: 500,
    borderRadius: 4,
    paddingTop: 30,
  },

  pai: {
    marginTop: "3%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 300,
    marginTop: 100,
    position: "relative",
  },
  image: {
    marginBottom: 50,
    width: "auto",
    height: 203,
  },

  title: {
    marginTop: "%",
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 200,
    marginLeft: 20,
    color: "grey",
    height: 133,
  },
  link: {
    textDecoration: "none",
  },
  preco: {
    color: "#1976d2",
    fontWeight: 1000,
    fontFamily: "Arial",
    fontSize: 30,
    marginBottom: 15,
  },
  precoPai: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "33%",
    height: 33,
    marginTop: "10%",
    marginLeft: "30%",
    borderRadius: 4,
    color: "BLACK",
    background: "white",
  },

  h1: {
    color: "white",
    fontFamily: "Arial",
    fontSize: 25,
    marginLeft: "3%",
    marginTop: "30%",
  },
  botao2: {
    border: "solid 4px #ff4040",
    borderRadius: 5,
    background: "#ff4040",
    marginLeft: 20,
    height: 50,
    position: "relative",
    marginTop: "30%",
  },
  log: {
    width: 50,
    height: 50,
    position: "relative",
    marginTop: "3%",
  },

  login: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textDecoration: "none",
  },
});

export default classe;
