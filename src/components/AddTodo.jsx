import React, { useState } from "react";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import { addTodo } from "redux/modules/todos";
import { styled } from "styled-components";

export default function AddTodo() {
  const id = nextId();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onAddBtnHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo({ ...todo, id }));
    // form 초기화
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  };

  return (
    <FormWrapper>
      <ContentWrapper onSubmit={onAddBtnHandler}>
        <StLabel>제목</StLabel>
        <StInput
          className="input"
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
          autoFocus
          required
        />
        <StLabel>내용</StLabel>
        <StInput
          className="input"
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
          required
        />
        <StBtn type="submit">추가하기</StBtn>
      </ContentWrapper>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  background-color: #f6f7f9;
  padding: 30px;
  margin-top: 2px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;

  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 20px;
  gap: 20px;
`;

const StInput = styled.input`
  font-family: "CookieRun-Regular";
  border: none;
  border-radius: 10px;
  width: 250px;
  height: 40px;
  padding-left: 10px;
`;

const StBtn = styled.button`
  background-color: powderblue;
  font-family: "CookieRun-Regular";
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin-left: 10px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
