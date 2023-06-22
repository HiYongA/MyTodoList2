import React from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "redux/modules/todos";
import AddTodo from "../components/AddTodo";
import Todo from "components/Todo";

export default function Home() {
  // 우리가 만든 액션 객체를 리듀서로 보내주는 역할을 하는 훅
  const dispatch = useDispatch();

  // useSelector
  // 여기에서 store에 접근하여, todos의 값을 읽어오고 싶다!
  const todos = useSelector((state) => state.todos.todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  const listIsDone = (isDone) => {
    return (
      <>
        <TodoListStatus>
          {isDone ? "완료됨..! 😘" : "진행 중.. 🤓"}{" "}
        </TodoListStatus>
        <Todos>
          {todos
            .filter((todo) => todo.isDone === isDone)
            .map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  removeFunc={onDeleteTodo}
                  editFunc={onToggleStatusTodo}
                />
              );
            })}
        </Todos>
      </>
    );
  };

  return (
    <div>
      <AddTodo />
      <TodoListWrapper>
        {listIsDone(false)}
        {listIsDone(true)}
      </TodoListWrapper>
    </div>
  );
}

const TodoListWrapper = styled.div`
  padding: 0 20px;
`;

const TodoListStatus = styled.h2`
  margin: 25px;
  font-size: 1.7rem;
`;

const Todos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
