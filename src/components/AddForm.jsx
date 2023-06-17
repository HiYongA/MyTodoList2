import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * 할 일을 추가하는 컴포넌트
 * @returns {JSX.Element}
 */
export default function AddForm({ todos, setTodos }) {
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

  return (
    <div>
      <form className="form-style" onSubmit={onAddBtnHandler}>
        <div className="label-style">
          <label className="input-style">제목</label>
          <input
            className="input"
            type="text"
            name="title"
            value={title}
            onChange={titleChangeHandler}
            autoFocus
            required
          />
          <label className="input-style">내용</label>
          <input
            className="input"
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
    </div>
  );
}
