import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top:100px;
  margin-left:150px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1920px,
  height:1080px;

  @media(max-width:1366px){
    padding-top:100px;
   
    display:flex;
    flex-wrap:wrap;


  }
  @media(max-width:1440px){
    padding-top:100px;
    max-width:1440px;
    margin-left:70px;
  }
`;

export const Paper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-itens: center;
  height: 500px;
  margin: 10px;
  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.33);
  padding-top: 10px;
  padding-left: 5px;
  @media (max-width: 1366px) {
    width: 280px;
    height: 400px;
  }
  @media (max-width: 1440px) {
    width: 280px;
    height: 400px;
  }
`;

export const Image = styled.img`
  margin-bottom: 50px;
  width: auto;
  height: 203px;
  margin-left: 50px;
  @media (max-width: 1366px) {
    width: 150px;
    height: 150px;
    margin-left: 50px;
  }
  @media (max-width: 1440px) {
    width: 150px;
    height: 150px;
    margin-left: 50px;
  }
`;

export const Title = styled.span`
  margin-top: 10px;
  font-family: Arial;
  font-size: 20px;
  font-weight: 200px;
  margin-left: 20px;

  color: grey;
  height: 200px;
  @media (max-width: 1366px) {
    font-size: 17px;
    font-weigth: 900px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  @media (max-width: 1440px) {
    font-size: 19px;
    font-weigth: 900px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
`;
export const Price = styled.span`
  color: #1976d2;
  font-weight: 1000px;
  font-family: Arial;
  font-size: 25px;
  margin-bottom: 10px;
`;

const classe = makeStyles({
  title: {},
  link: {
    textDecoration: "none",
  },
  precoPai: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 100,
    marginBottom: 0,
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
