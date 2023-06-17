import React from "react";
import "css/Style.css";
import JSConfetti from "js-confetti";

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
    <div key={todo.id} className="todo-style">
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <div className="btn">
        <button className="remove-btn" onClick={() => removeFunc(todo.id)}>
          삭제
        </button>
        <button
          className="edit-btn"
          onClick={() => {
            editFunc(todo.id);
            completeEffect(todo.isDone);
          }}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}
