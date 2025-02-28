import React from "react";

const Logout = ({ onclickNo, onclickYes }) => {
  return (
    <div className="absolute flex h-full w-screen items-center justify-center">
      <div className="bg-dark text-light rounded-lg px-10 py-8">
        <p className="mb-6">Are you sure you want to log out?</p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onclickNo}
            className="cursor-pointer rounded-md border px-8 py-2 hover:opacity-80"
          >
            No
          </button>
          <button
            onClick={onclickYes}
            className="bg-light text-dark cursor-pointer rounded-md px-7 py-2 hover:opacity-80"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
