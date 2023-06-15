import React, { useState } from "react";
import Todo from "components/Todo";
import { v4 as uuidv4 } from "uuid";
import "css/Style.css";

export default function AddTodo() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "MyTodoList 만들기",
      body: "리액트를 활용해서 만들어보자!",
      isDone: true,
    },
    {
      id: uuidv4(),
      title: "MyTodoList 연습하기",
      body: "10번 반복 연습하자!!",
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  // [추가하기]버튼 클릭 이벤트핸들러
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

  // [삭제하기]버튼 클릭 이벤트 핸들러
  const onRemoveBtnHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // [완료<->취소]버튼 클릭 이벤트 핸들러
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
