import React from "react";
import { Header, Footer, Ourblog, Allblogpost } from "../Component";

const Blog = () => {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Header />
      <Ourblog />
      <Allblogpost />
      <Footer />
    </div>
  );
};
export default Blog;
