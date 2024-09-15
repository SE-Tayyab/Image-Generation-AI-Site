import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { preview } from "../assets";
import {
  Loader,
  Card,
  Form as FormField,
  ShowingResults,
} from "../componenets";
import { getRandomPrompt } from "../utils";
import { darkGray, mediumGray } from "../constents/colors";

function CreatePost() {
  const navigate = useNavigate();
  const [generatingImage, setGeneratingImage] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const Navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "A stained glass window depicting a hamburger and french fries",
    photo: "",
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "POST", // Correct HTTP method and URL
          headers: {
            "Content-Type": "application/json", // Fixed content-type typo
          },
          body: JSON.stringify({
            name: form.name,
            prompt: form.prompt,
            photo: form.photo,
          }),
        });

        await response.json();
        Navigate("/");
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("please fill the detail to proceed");
    }
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateFakeImage = () => {
    setGeneratingImage(true);
    const randomUrl = getRandomPrompt();
    setImageUrl(randomUrl);
    setForm({ ...form, photo: randomUrl });
    setGeneratingImage(false); // Ideally should delay or wait for image to load
  };

  const generateImage = async () => {
    try {
      if (form.prompt) {
        setGeneratingImage(true);
        const response = await fetch("http://localhost:8080/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } else {
        alert("Please enter a prompt");
      }
    } catch (e) {
      alert(`Error: ${e.message}`);
    } finally {
      setGeneratingImage(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 style={{ color: darkGray }} className="font-extrabold text-[32px]">
          Create
        </h1>
        <p className="mt-2" style={{ color: mediumGray }}>
          Create imaginary and visually stunning images through EngiSkills AI
          and share them with the community.
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            LabelName="Your Name"
            value={form.name}
            type="text"
            name="name"
            placeholder="Tayyab Sattar"
            handleChange={changeHandler}
          />

          <FormField
            LabelName="Prompt"
            value={form.prompt}
            type="text"
            name="prompt"
            placeholder="A stained glass window depicting a hamburger and french fries"
            handleChange={changeHandler}
            isSurprisMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 h-64 p-3 flex items-center justify-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Image Not Found"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}
            {generatingImage && (
              <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center"
            type="button"
            onClick={generateFakeImage}
          >
            {generatingImage ? "Generating..." : "Generate Image"}
          </button>
        </div>

        <div className="mt-10 text-[14px]">
          <p style={{ color: mediumGray }}>
            Once you have created the image you want, you can share it with
            others in the community
          </p>

          <button
            type="submit"
            className="mt-3 font-medium text-sm w-full sm:w-auto px-5 py-2 text-center text-white bg-[#6469ff] rounded-md"
          >
            Share with the community
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreatePost;
