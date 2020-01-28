import React from "react";
import PostCard from "../PostCard";

const Hit = ({ hit }) => (
  <PostCard
    tagColor={hit.tagColor}
    slug={hit.slug}
    title={hit.title}
    date={hit.date}
    category={hit.category}
    resume={hit.resume}
  />
);

export default Hit;
