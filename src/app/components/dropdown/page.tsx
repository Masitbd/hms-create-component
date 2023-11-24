"use client";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  name: string;
  gender: GenderEnum;
}

export default function Dropdown() {
  const [posts, setPosts] = useState([]);
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    return console.log(data);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const dropdownOption = posts?.map((post: any) => {
    return (
      <option key={post.id} value={post.id}>
        {post.title}
      </option>
    );
  });

  return (
    <div className="flex items-center justify-center mt-11">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="lSSS">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered w-full max-w-xs"
            {...register("name")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select gender</span>
          </label>
          <select
            className="select select-bordered w-48 text-black"
            {...register("gender")}
            /*  onChange={(e) => {
              console.log("Selected gender:", e.target.value);
            }} */
          >
            {dropdownOption}
          </select>
        </div>
        <button className="btn btn-success my-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
