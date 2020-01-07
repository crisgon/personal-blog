import React from "react";

import Layout from "../components/Layout";
import PostList from "../components/PostList";

import SEO from "../components/seo";

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <PostList />
    </Layout>
  );
};

export default Home;
