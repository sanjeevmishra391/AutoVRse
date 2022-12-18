import React, { useState } from "react";
import Thumbnail from "./components/Thumbnail";
import Window from "./components/Window";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import models from "./utils/loadData";

function App() {
  const [activeModel, setModel] = useState({ idx: 2, model: models[2] });

  const selectModel = (id) => {
    setModel({ idx: id, model: models[id] });
  };

  return (
    <div className="mx-auto container my-10">
      <div className="flex flex-row items-center">
        {/* left arrow */}
        <BsArrowLeft
          onClick={() => {
            setModel((prevState) => ({
              idx: (prevState.idx - 1 + models.length) % models.length,
              model:
                models[(prevState.idx - 1 + models.length) % models.length],
            }));
          }}
          className="hidden md:block w-10 h-10 p-2 m-6 rounded-full bg-white opacity-70 hover:drop-shadow-md hover:cursor-pointer hover:opacity-100"
        />

        {/* canvas in which model will we displayed */}
        <Window model={activeModel.model} />

        {/* right arrow */}
        <BsArrowRight
          onClick={() => {
            setModel((prevState) => ({
              idx: (prevState.idx + 1) % models.length,
              model: models[(prevState.idx + 1) % models.length],
            }));
          }}
          className="hidden md:block w-10 h-10 p-2 m-6 rounded-full bg-white opacity-70 hover:drop-shadow-md hover:cursor-pointer hover:opacity-100"
        />
      </div>

      {/* model thumbnails */}
      <div className="md:w-10/12 w-11/12 mx-auto flex gap-2 my-4 justify-evenly">
        {models.map(({ id, data }) => {
          return (
            <Thumbnail
              key={id}
              idx={id}
              isActive={id === activeModel.idx ? true : false}
              model={data}
              selectModel={selectModel}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
