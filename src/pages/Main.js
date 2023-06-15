import React from "react";
import Header from "components/common/Header";
import Layout from "components/common/Layout";
import AddTodo from "components/AddTodo";

export default function Main() {
  return (
    <Layout>
      <Header />
      <AddTodo />
    </Layout>
  );
}
