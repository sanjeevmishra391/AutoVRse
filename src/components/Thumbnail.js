import React from "react";

function Thumbnail(props) {
  return (
    <div
      onClick={() => {
        props.selectModel(props.idx);
      }}
      className={`w-[15rem] h-[20vh] rounded-md drop-shadow-sm hover:cursor-pointer hover:drop-shadow-lg hover:opacity-100 overflow-hidden`}
    >
      <img
        src={props.model.image_path}
        alt="model"
        className={
          "w-full h-full rounded-md " +
          (props.isActive ? "opacity-100 border-2 border-black" : "opacity-60")
        }
      />
    </div>
  );
}

export default Thumbnail;
