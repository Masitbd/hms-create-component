import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  testName: string;
  quantity: number;
  remark: string;
}

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ showModal, setShowModal }: ModalProps) {
  const [posts, setPosts] = useState([]);
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data, event) => {
    console.log(data);
  };
  const handleModalClose = () => {
    setShowModal(false);
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
    <dialog id="my_modal_4" className="modal" open={showModal}>
      <div className="modal-box w-11/12 max-w-3xl bg-slate-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select Test Name</span>
            </label>
            <select
              className="select select-bordered"
              {...register("testName")}
            >
              {dropdownOption}
            </select>
          </div>

          <div className="flex">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Quantity"
                defaultValue={1}
                className="input input-bordered w-48"
                required
                {...register("quantity", { required: true })}
              />
            </div>
            <div className="form-control ml-20 w-full">
              <label className="label">
                <span className="label-text">Remark</span>
              </label>
              <input
                type="text"
                placeholder="Remark"
                className="input input-bordered "
                required
                {...register("remark")}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" type="button" onClick={handleModalClose}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
