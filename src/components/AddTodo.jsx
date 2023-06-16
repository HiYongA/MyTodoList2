import React, { useState } from "react";
import Todo from "components/Todo";
import { v4 as uuidv4 } from "uuid";
import "css/Style.css";

/**
 * 할 일을 추가하는 컴포넌트
 * @returns {JSX.Element}
 */
export default function AddTodo() {
  const [todos, setTodos] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("todos")) || [
        {
          id: uuidv4(),
          title: "개인과제 복습하기",
          body: "Todo List 여러 번 반복 연습하자!",
          isDone: false,
        },
        {
          id: uuidv4(),
          title: "TIL 작성하기",
          body: "JSDoc에 대해 적기",
          isDone: true,
        },
      ]
  );
  window.localStorage.setItem("todos", JSON.stringify(todos));

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  /**
   * 제목 입력 이벤트 핸들러
   * @param {Object} event - 이벤트 객체
   */
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  /**
   * 내용 입력 이벤트 핸들러
   * @param {Object} event - 이벤트 객체
   */
  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  /**
   * [추가하기] 버튼 클릭 이벤트 핸들러
   * @param {Object} event - 이벤트 객체
   */
  const onAddBtnHandler = (event) => {
    event.preventDefault();
    const newTodos = {
      id: uuidv4(),
      title,
      body,
      isDone: false,
    };
    console.log(newTodos);
    setTodos([...todos, newTodos]);
    setTitle("");
    setBody("");
  };

  /**
   * [삭제] 버튼 클릭 이벤트 핸들러
   * @param {string} id - 투두 아이디
   */
  const onRemoveBtnHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  /**
   * [완료<->취소] 버튼 클릭 이벤트 핸들러
   * @param {string} id - 투두 아이디
   */
  const onEditBtnHandler = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <form className="form-style" onSubmit={onAddBtnHandler}>
        <div className="label-style">
          <label className="input-style">제목</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={titleChangeHandler}
            required
          />
          <label className="input-style">내용</label>
          <input
            type="text"
            name="body"
            value={body}
            onChange={bodyChangeHandler}
            required
          />
        </div>
        <button className="btn-style" type="submit">
          추가하기
        </button>
      </form>
      <div className="todos-container">
        <h2> Working.. 🤓</h2>
        <div className="todos-style">
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  setTodos={setTodos}
                  removeFunc={onRemoveBtnHandler}
                  editFunc={onEditBtnHandler}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <h2>Done..! 😘</h2>
        <div className="todos-style">
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  setTodos={setTodos}
                  removeFunc={onRemoveBtnHandler}
                  editFunc={onEditBtnHandler}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
