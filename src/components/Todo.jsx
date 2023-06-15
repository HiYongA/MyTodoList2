import React from "react";
import "css/Style.css";

export default function TodoList({ todo, removeFunc, editFunc }) {
  return (
    <div key={todo.id} className="todo-style">
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <div className="btn">
        <button className="remove-btn" onClick={() => removeFunc(todo.id)}>
          삭제
        </button>
        <button className="edit-btn" onClick={() => editFunc(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}
