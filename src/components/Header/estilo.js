import { makeStyles } from '@material-ui/core/styles';

const estilo = makeStyles({
  type: {
    marginTop: 10,
    marginLeft: '20%',
    marginRight: '100%',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 900,
    fontFamily: 'Arial',
  },
  cart: {
    marginTop: '2%',
  },
  vazio: {
    background: 'white',
    marginLeft: 30,
    marginTop: 30,
    width: 133,
    height: 33,
  },
  finalizar:
  {
    background: '#00FF00',
    marginLeft: 30,
    marginTop: 30,
    width: 133,
    height: 33,
  },

  carrinho: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 500,
    marginLeft:'70%',
    marginTop: '5%',
    borderRadius: 10,
    width: 900,
    position: 'absolute',
  },
  btn: {
    width: 30,
    marginLeft: 10,
    height: 30,
    marginTop: 10,
    color: 'orange',
  },
  btn2: {
    width: 30,
    marginRight: 10,
    height: 30,
    marginTop: 10,
    color: 'orange',
  },
  quantidade: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: 'solid 1px #2272c3',
    borderRadius: 10,
    width: 150,
    height: 100,
    marginTop: 20,
  },
  value: {
    marginTop: 7,
    marginLeft: 5,
    color: '#1976d2',
    dispay: 'flex',
    flexDirection: 'row',
  },
  valor: {
    height: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: '#808080',
    fontWeight: 500,
    width: 280,
    marginTop: 30,
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 15,
    marginTop: 20,
  },

  produto: {
    height: 150,
    width: 490,
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 15,
    marginRight: 0,
    borderRadius: 4,
  },
  footer: {
    height: 100,
    width: 490,
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
    marginRight: 0,
    background: '#1976d2',
  },
  papel: {
    display: 'flex',
    alignItems: 'center',
    width: '50%',
    marginTop: '3%',
    marginLeft: '20%',
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    color: 'black',
    background: 'white',
    border: 'solid 0px white',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: '#1976d2',
    height: 100,
    position: 'relative',
    boxShadow: '0 2px 13px 0 rgba(0,0,0,.33)',
  },
  h1: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 25,
    marginLeft: '3%',
    marginTop: '10%',
  },
  link2: {
    textDecoration: 'none',
    color: 'white',
    fontFamily: 'bolder',
    fontSize: 18,
    position: 'relative',
    marginTop: '50%',
  },
  botao2: {
    border: 'solid 4px #ff4040',
    borderRadius: 5,
    background: '#ff4040',
    marginLeft: 20,
    height: 50,
    position: 'relative',
    marginTop: '30%',
  },
});

export default estilo;
