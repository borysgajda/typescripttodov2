import React, { FC, useState } from "react";
import { Todo } from "../../model";
import TodoList from "../TodoList2";
import { SlPlane } from "react-icons/sl";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import * as S from "../../styled";

const TravelBox: FC = () => {
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
      <Link to="/Main">
        <S.ButtonBack>
          <IoIosArrowBack />
        </S.ButtonBack>
      </Link>
      <S.SecondaryBox>
        <S.IconDescription>
            <SlPlane />
        </S.IconDescription>
        <S.DescriptionSecondary>Travel</S.DescriptionSecondary>
        <S.TasksSecondary>Ilosc taskow</S.TasksSecondary>
        <S.SecondarySmallBox>
          {/* <Input
            todo={todo}
            note={note}
            category={category}
            setTodo={setTodo}
            setNote={setNote}
            setCategory={setCategory}
            Add={Add}
          /> */}
          <TodoList inputs={inputs} setInputs={setInputs} />
        </S.SecondarySmallBox>
      </S.SecondaryBox>
    </S.Container>
  );
};
export default TravelBox;
