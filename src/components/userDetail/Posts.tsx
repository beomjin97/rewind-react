import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  posts: { _id: string; imgUrl: string[] }[] | undefined;
}

const Post = ({ posts }: Props) => {
  const navigate = useNavigate();

  return posts ? (
    <div className="flex md:w-[90vw] md:h-auto w-[900px] h-[350px] justify-around flex-wrap mx-auto overflow-auto scrollbar-hide">
      {posts.map((item, idx) => (
        <div
          key={idx}
          className="md:w-[120px] md:h-[120px] w-[150px] h-[150px] bg-[#00000030] m-5 overflow-hidden cursor-pointer"
          onClick={() => navigate(`/post/${item._id}`)}
        >
          <img src={item.imgUrl[0]} alt="test" />
        </div>
      ))}
    </div>
  ) : (
    <div className="">No Post not yet</div>
  );
};

export default Post;
