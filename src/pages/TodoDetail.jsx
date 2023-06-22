import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoById } from "redux/modules/todos";
import { styled } from "styled-components";

export default function TodoDetail() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoById(id));
  }, [dispatch, id]);

  return (
    <Container>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID: {todo.id}</div>
            <StBtn
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </StBtn>
          </StDialogHeader>
          <StTitle>{todo.title}</StTitle>
          <StBody>{todo.body}</StBody>
        </div>
      </StDialog>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid rgb(238, 238, 238);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StBtn = styled.button`
  border: 1px solid rgb(238, 238, 238);
  font-family: "CookieRun-Regular";
  height: 40px;
  width: 120px;
  background-color: transparent;
  border-radius: 12px;
  cursor: pointer;
`;

const StTitle = styled.h1`
  padding: 10px 24px;
  font-size: 2.5rem;
`;

const StBody = styled.p`
  padding: 20px 24px;
  font-size: 2rem;
`;
