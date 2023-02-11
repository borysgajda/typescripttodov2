import React, { FC, useState } from "react";
import { Todo } from "../../model";
import Input from "../Input2";
import * as S from "../../styled";
import { Header } from "../Header2";

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
    <S.Container>
      <Header />
      <Input todo={todo} note={note} category={category} setTodo={setTodo} setNote={setNote} setCategory={setCategory} Add={Add}  />
    </S.Container>
  );
};
export default App;
