import { Link } from "react-router-dom";
import * as S from "../styled";
import { AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  return (
    <S.Headings>
      New task
      <Link to="/Main"><S.ButtonX><AiOutlineClose/></S.ButtonX></Link>
    </S.Headings>
  );
};
