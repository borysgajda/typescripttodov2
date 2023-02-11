import React, { FC, useState } from "react";
import { Todo } from "../../model";
import TodoList from "../TodoList2";
import Input from "../Input2";
import * as S from "../../styled";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BsBriefcase } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";
import { SlPlane } from "react-icons/sl";
import { BiBookAlt } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";

function Main() {
  return (
    <S.MainContainer>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/AllBox" style={{ textDecoration: 'none' }}>
            <S.MainBox>
              <S.IconList>
                <HiOutlineClipboardList />
              </S.IconList>
              <S.Description>
                All
              </S.Description>
              <S.Tasks>
                Ilosc taskow
              </S.Tasks>
            </S.MainBox>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Link to="/WorkBox" style={{ textDecoration: 'none' }}>
            <S.MainBox>
              <S.IconList>
                <BsBriefcase />
              </S.IconList>
              <S.Description>
                Work
              </S.Description>
              <S.Tasks>
                Ilosc taskow
              </S.Tasks>
            </S.MainBox>
            </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Link to="/MusicBox" style={{ textDecoration: 'none' }}>
            <S.MainBox>
              <S.IconList>
                <FiHeadphones />
              </S.IconList>
              <S.Description>
                Music
              </S.Description>
              <S.Tasks>
                Ilosc taskow
              </S.Tasks>
            </S.MainBox>
            </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Link to="/TravelBox" style={{ textDecoration: 'none' }}>
            <S.MainBox>
              <S.IconList>
                <SlPlane />
              </S.IconList>
              <S.Description>
                Travel
              </S.Description>
              <S.Tasks>
                Ilosc taskow
              </S.Tasks>
            </S.MainBox>
            </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Link to="/StudyBox" style={{ textDecoration: 'none' }}>
            <S.MainBox>
              <S.IconList>
                <BiBookAlt />
              </S.IconList>
              <S.Description>
                Study
              </S.Description>
              <S.Tasks>
                Ilosc taskow
              </S.Tasks>
            </S.MainBox>
            </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Link to="/HomeBox" style={{ textDecoration: 'none' }}>
            <S.MainBox>
              <S.IconList>
                <BiHomeAlt />
              </S.IconList>
              <S.Description>
                Home
              </S.Description>
              <S.Tasks>
                Ilosc taskow
              </S.Tasks>
            </S.MainBox>
            </Link>
        </Grid>
      </Grid>
    </S.MainContainer>
  );
}

export default Main;
