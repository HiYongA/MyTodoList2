import React from "react";
import "css/Style.css";

/**
 * 레이아웃 컴포넌트
 * @param props - pages/main.js 컴포넌트 속성(props)
 * @param props.children - `Layout` 컴포넌트 내에서 렌더링되는 자식 컴포넌트
 * @returns {JSX.Element}
 */
export default function Layout(props) {
  console.log(props);
  return <div className="layout">{props.children}</div>;
}
