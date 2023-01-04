import { useContext } from "react";

import { CommerceContext } from "../../context/CommerceContext";

export const Modal = () => {
  const { showModal, Modal, setShowModal } = useContext(CommerceContext);

  return (
    <>
      {showModal ? (
        <div
          className={`fixed z-50 text-xs flex flex-row justify-between pl-5  items-center ${Modal.bg}  ${Modal.hover} text-white font-bold  rounded-md center-absolute min-w-[270px] mid:w-full mid:text-[14px] text-center mid:max-w-[460px]  sm:max-w-[500px] md:max-w-[750px] md:py-2 overflow-hidden`}
        >
          <span>{Modal.text}</span>
          <span onClick={ () => setShowModal(false)} className=" w-[30px]  text-center  flex justify-center items-center h-[40px] hover:cursor-pointer hover:brightness-150 ">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
      ) : null}
    </>
  );
};
