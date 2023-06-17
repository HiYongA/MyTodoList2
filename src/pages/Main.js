import React from "react";
import Header from "components/common/Header";
import Layout from "components/common/Layout";
import TodoList from "components/TodoList";

export default function Main() {
  return (
    <Layout>
      <Header />
      <TodoList />
    </Layout>
  );
}
