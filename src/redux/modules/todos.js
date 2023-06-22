// Action value
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLE_STATUS_TODO = "todos/TOGGLE_STATUS_TODO";
const GET_TODO_BY_ID = "todos/GET_TODO_BY_ID";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const toggleStatusTodo = (payload) => {
  return { type: TOGGLE_STATUS_TODO, payload };
};

export const getTodoById = (payload) => {
  return { type: GET_TODO_BY_ID, payload };
};

// (1) 초기 상태값(state)
const initialState = {
  todos: [
    {
      id: "1",
      title: "TIL 작성하기",
      body: "오늘의 TIL 주제는?",
      isDone: false,
    },
    {
      id: "2",
      title: "TodoList 복습하기",
      body: "10번 연습하기!!!",
      isDone: true,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};
// (2) 리듀서(Reducer) : state에 변화를 일으키는 함수
//    - state를 action의 type에 따라 변경하는 함수
const todos = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => todo.id === action.payload),
      };
    default:
      return state;
  }
};

export default todos;
