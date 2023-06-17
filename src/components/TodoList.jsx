import React, { useState } from "react";
import AddForm from "./AddForm";
import Todo from "components/Todo";
import "css/Style.css";
import { v4 as uuidv4 } from "uuid";

/**
 * 투두리스트 컴포넌트
 * @returns {JSX.Element}
 */
export default function TodoList() {
  const [todos, setTodos] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("todos")) || [
        {
          id: uuidv4(),
          title: "TIL 작성하기",
          body: "오늘의 TIL 주제는?",
          isDone: false,
        },
        {
          id: uuidv4(),
          title: "TodoList 복습하기",
          body: "10번 연습하기!!!",
          isDone: true,
        },
      ]
  );
  window.localStorage.setItem("todos", JSON.stringify(todos));

  /**
   * [삭제] 버튼 클릭 이벤트 핸들러
   * @param {string} id - 투두 아이디
   */
  const onRemoveBtnHandler = (id) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
  };

  /**
   * [완료<->취소] 버튼 클릭 이벤트 핸들러
   * @param {string} id - 투두 아이디
   */
  const onEditBtnHandler = (id) => {
    setTodos((prevtodos) =>
      prevtodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  /**
   * 완료 여부에 따라 할 일 목록을 렌더링한다.
   * @param {boolean} isDone - 완료 여부에 따라 보여질 투두리스트를 지정!
   */
  const listIsDone = (isDone) => {
    return (
      <>
        <h2> {isDone ? "완료됨..! 😘" : "진행 중.. 🤓"} </h2>
        <div className="todos-style">
          {todos
            .filter((todo) => todo.isDone === isDone)
            .map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  setTodos={setTodos}
                  removeFunc={onRemoveBtnHandler}
                  editFunc={onEditBtnHandler}
                />
              );
            })}
        </div>
      </>
    );
  };

  return (
    <div>
      <AddForm todos={todos} setTodos={setTodos} />
      <div className="todos-container">
        {listIsDone(false)}
        {listIsDone(true)}
      </div>
    </div>
  );
}
