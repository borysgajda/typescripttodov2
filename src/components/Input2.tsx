import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { AiOutlineCreditCard, AiOutlineTag } from "react-icons/ai";
import { Todo } from "../model";
import * as S from "../styled";
import LocalDate from "./localDate2";
import TodoList from "./TodoList2";

interface Props {
  note: string;
  todo: string;
  category: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  Add: (e: React.FormEvent) => void;
}
const Input = ({
  todo,
  note,
  category,
  setTodo,
  setNote,
  setCategory,
  Add,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState<Todo[]>([]);
  return (
    <S.SContainer>
      <S.Input
        onSubmit={(e: React.FormEvent<Element>) => {
          Add(e);
          inputRef.current?.blur();
        }}
      >
        <TextField
          fullWidth
          sx={{ m: 1 }}
          multiline
          rows={4}
          defaultValue="Default Value"
          id="outlined-multiline-static"
          label="What are you planing"
          variant="outlined"
          ref={inputRef}
          value={todo}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setTodo(e.target.value)
          }
        />
        <S.SBox>
          <LocalDate />
        </S.SBox>
        <AiOutlineCreditCard />
        <TextField
          fullWidth
          sx={{ m: 1 }}
          multiline
          rows={4}
          defaultValue="Default Value"
          id="outlined-multiline-static"
          label="Add note"
          variant="outlined"
          ref={inputRef}
          value={note}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setNote(e.target.value)
          }
        />
        <AiOutlineTag />
        <TextField
          fullWidth
          sx={{ m: 1 }}
          multiline
          rows={4}
          defaultValue="Default Value"
          id="outlined-multiline-static"
          label="Category?"
          variant="outlined"
          ref={inputRef}
          value={category}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setCategory(e.target.value)
          }
        />
        <S.Button> Create </S.Button>
      </S.Input>
      <TodoList inputs={inputs} setInputs={setInputs} />
    </S.SContainer>
  );
};
export default Input;
