import React from "react";
import "css/Style.css";

export default function Layout(props) {
  console.log(props);
  return <div className="layout">{props.children}</div>;
}
