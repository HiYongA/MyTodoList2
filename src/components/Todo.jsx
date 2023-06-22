import React from "react";
import JSConfetti from "js-confetti";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

/**
 * 투두 항목을 표시하는 컴포넌트
 * @param {Object} props.todo - 투두 항목 객체
 * @param {Function} props.removeFunc - 투두 삭제 함수
 * @param {Function} props.editFunc - 투두 완료/취소 함수
 * @returns {JSX.Element}
 */
export default function Todo({ todo, removeFunc, editFunc }) {
  const jsConfetti = new JSConfetti();

  /**
   * 투두 항목 완료 시 confetti효과를 추가하는 함수
   * @param {boolean} isDone - 투두 항목 완료 여부
   */
  const completeEffect = (isDone) => {
    if (!isDone) {
      jsConfetti.addConfetti({
        confettiColors: [
          "powderblue",
          "#b1d7e7",
          "#8ec9dd",
          "#6dbbce",
          "#4caebf",
          "#2ba0b0",
        ],
        confettiRadius: 5,
        confettiNumber: 400,
      });
    }
  };
  return (
    <TodoWrapper key={todo.id}>
      <TodoLink to={`/${todo.id}`}>상세보기</TodoLink>
      <TodoTitle>{todo.title}</TodoTitle>
      <TodoBody>{todo.body}</TodoBody>
      <TodoBtnContainer>
        <RemoveBtn onClick={() => removeFunc(todo.id)}>삭제</RemoveBtn>
        <ToggleStatusBtn
          className="edit-btn"
          onClick={() => {
            editFunc(todo.id);
            completeEffect(todo.isDone);
          }}
        >
          {todo.isDone ? "취소" : "완료"}
        </ToggleStatusBtn>
      </TodoBtnContainer>
    </TodoWrapper>
  );
}

const TodoWrapper = styled.div`
  border: 4px outset powderblue;
  width: 270px;
  border-radius: 10px;
  padding: 20px;
`;

const TodoLink = styled(Link)`
  text-decoration: none;
  color: #b1a6db;

  &:hover {
    color: #563d82;
    text-decoration: underline;
  }
`;

const TodoTitle = styled.h3`
  font-size: 1.5rem;
  margin: 20px 0;
  word-break: break-all;
`;

const TodoBody = styled.p`
  word-break: break-all;
`;

const TodoBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const RemoveBtn = styled.button`
  background: transparent;
  font-family: "CookieRun-Regular";
  border: 2px solid #dba6d0;
  border-radius: 10px;
  padding: 8px 45px;
  margin-top: 24px;
  cursor: pointer;
`;

const ToggleStatusBtn = styled.button`
  background: transparent;
  font-family: "CookieRun-Regular";
  border: 2px solid #d0dba6;
  border-radius: 10px;
  padding: 8px 45px;
  margin-top: 24px;
  cursor: pointer;
`;
