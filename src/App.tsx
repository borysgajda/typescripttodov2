import React, { FC, useState } from "react";
import { Todo } from "./model";
//import TodoList from "./components/TodoList";
//import Input from "./components/Input";
//import { Header } from "./components/Header";
import * as S from "./styled"
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Layout from "./components/new/Layout";
import AllBox from "./components/new/AllBox";
import AddingPage from "./components/new/AddingPage";
import WorkBox from "./components/new/WorkBox";
import MusicBox from "./components/new/MusicBox"
import TravelBox from "./components/new/TravelBox";
import StudyBox from "./components/new/StudyBox";
import HomeBox from "./components/new/HomeBox";
import Main from "./components/new/Main";
import { Navbar } from "react-bootstrap";


const App: FC = () => {
  const [todo, setTodo] = useState<string>(" ");
  const [category, setCategory] = useState<string>(" ");
  const [note, setNote] = useState<string>(" ");
  const [inputs, setInputs] = useState<Todo[]>([]);
  const Add = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setInputs([
        ...inputs,
        {
          id: Date.now(),
          todo: todo,
          note: note,
          category: category,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };
  return (
    <>
    {/* // <S.Container>
    //   <Header />
    //   <Input todo={todo} setTodo={setTodo} Add={Add} />
    //   <TodoList inputs={inputs} setInputs={setInputs} />
    // </S.Container> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Main" element={<Main />} />
          <Route path="AllBox" element={<AllBox />} />
          <Route path="WorkBox" element={<WorkBox />} />
          <Route path="MusicBox" element={<MusicBox />} />
          <Route path="TravelBox" element={<TravelBox />} />
          <Route path="StudyBox" element={<StudyBox />} />
          <Route path="HomeBox" element={<HomeBox />} />
          <Route path="AddingPage" element={<AddingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;
