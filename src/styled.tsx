import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navigation = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  height: 65px;
  width: 47.5%;
  padding: 20px;
  margin: 20px;
`;

export const Title = styled.div`
  font-size: 1.75rem;
`;

export const Day = styled.div`
display: flex;
align-items: flex-start;
margin: 10px;
font-size: 1.25rem;
`;

export const Project = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: auto;
`;

export const Image = styled.img`
  height: 100px;
`;

export const Input = styled.form`
  position: relative;
  align-items: center;
`;

export const Button = styled.button`
    position: absolute;
    left: 8px;
    width: 100%;
    height: 50px;
    border: none;
    font-size: 15px;
    background-color: #2f74c0;
    color: white;
    transition: 0.2s all;

    &:hover{
        background-color: #388ae2;
    }
`;

export const ButtonX = styled.button`
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 12px;
    top: 10%;
    right: 26.5%;
    border: none;
    font-size: 15px;
    color: Black;
    background-color: white;

    &:active{
        transform: scale(0.8);
    }
`;

export const Box = styled.input`
  width: 100%;
  padding: 20px 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  transition: 0.2s;
`;

export const Single = styled.form`
  display: flex;
  border-radius: 5px;
  padding: 20px;
  margin-top: 15px;
  transition: 0.2s;

  &:hover {
    border: 1px solid black;
    transform: scale(1.03);
  }
`;

export const InputSingleText = styled.input`
  flex: 1;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export const SingleText = styled.span`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export const SingleTextStriked = styled.s`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.span`
  margin-left: 10px;
  font-size: 25px;
  cursor: pointer;
`;

export const Todos = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-family: "Montserrat", sans-serif;
`;

export const SContainer = styled.div`
  width: 47.5%;
`;

export const SBox = styled.div`
  padding: 20px 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
`;

export const ButtonBox = styled.div`
position:  absolute;
bottom: 5vw;
right: 5vh;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-family: "Montserrat", sans-serif;
`;

export const MainBox = styled.div`
  margin: 0 auto;
  width: 250px;
  height: 250px;
  padding: 20px 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  background-color: #E5E4E2;
`;

export const IconList = styled.div`
  height: 100px;
  font-size: 50px;
  color: black;
`;

export const IconDescription = styled.div`
  position: relative;
  left: 40px;
  height: 100px;
  width: 100px;
  margin-top: 75px;
  font-size: 50px;
  color: black;
`;

export const Description = styled.div`
  color: black;
`;

export const Tasks = styled.div`
  color: black;
  font-size: 15px;
`;

export const SecondaryBox = styled.div`
  margin: 0 auto;
  width: 96vw;
  height: 87vh;
  font-size: 25px;
  background-color: #E5E4E2;
`;

export const Headings = styled.div`
  margin: 0 auto;
  padding: 20px 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
`;

export const Date = styled.div`
  position: relative;
  top: 10px;
  right: 30px;
  font-size: 20px;
`;

export const SingleTodoBox = styled.div`
`;

export const ButtonBack = styled.div`
position: absolute;
    width: 30px;
    height: 30px;
    margin: 12px;
    left: 10px;
    top: 10%;
    border: none;
    font-size: 30px;
    color: Black;
`;

export const SecondarySmallBox = styled.div`
  position: relative;
  margin-top: 40px;
  width: 100%;
  /* height: 60vh; */
  color: Black;
  background-color: white;
  border-radius: 20px;
`;

export const DescriptionSecondary = styled.div`
  color: black;
  position: relative;
  left: 40px;
  width: 50%;
`;

export const TasksSecondary = styled.div`
  position: relative;
  left: 40px;
  color: black;
  font-size: 15px;
  width: 50%;
`;


