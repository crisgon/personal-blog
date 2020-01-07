import React from "react";

import PostCard from "../PostCard";

const PostList = () => {
  return (
    <>
      <PostCard
        slug="/sobre"
        title="Tipos de Dados no JS"
        date="06 de janeiro de 2020"
        timeToRead="6"
        tag="JS"
        resume="Teste"
      />
    </>
  );
};

export default PostList;
