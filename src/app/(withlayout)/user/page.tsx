"use client";
import Modal from "@/app/components/modal/Modal";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  name: string;
  gender: GenderEnum;
}

const YourComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit } = useForm<IFormInput>();
  // const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.product.products);
  console.log("cart data from redux", cart);
  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <div className="flex items-center justify-center mt-11">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ... your form controls */}
        <button className="btn btn-success my-2" type="submit">
          Submit
        </button>
      </form>
      <button onClick={handleModalOpen} className="btn btn-error mx-2 my-2">
        Add
      </button>

      {showModal && (
        <div>
          {/*  <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
            open={showModal}
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn" onClick={handleModalClose}>
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog> */}
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}
    </div>
  );
};

export default YourComponent;
