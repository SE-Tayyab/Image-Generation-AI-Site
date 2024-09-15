import React from "react";
import { downloadImage } from "../utils";
import { download } from "../assets";
import { mediumGray } from "../constents/colors";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div
      key={_id}
      className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white"
    >
      <img className="w-full h-48 object-cover" src={photo} alt={prompt} />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-700 text-base">{prompt}</p>
      </div>
      <button
        className="m-5 p-3 rounded"
        style={{ background: mediumGray }}
        onClick={() => downloadImage(_id, photo)}
      >
        Download
      </button>
    </div>
  );
};

export default Card;
