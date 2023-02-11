import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo2";
import * as S from "../styled";

interface Props {
  inputs: Todo[];
  setInputs: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ inputs, setInputs }) => (
  <S.Todos>
    {inputs.map((todo, note, category) => (
      <SingleTodo
        todo={todo}
        key={todo.id}
        inputs={inputs}
        setInputs={setInputs}
      />
    ))}
  </S.Todos>
);

export default TodoList;
