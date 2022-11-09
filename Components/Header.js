import React from "react";

export const Header = () => {
  return (
    <>
      <div className="Header pb-32">
        <img
          src="header.jpg"
          className="bg-cover min-w-full absolute mix-blend-overlay"
        />
        <div className="text-center pt-32 text-6xl font-bold">
          <p>
            Konsultasikan <span className="text-green">masalah hukum</span>
          </p>
          <p className="pt-2">Anda dengan mudah</p>
        </div>
      </div>
    </>
  );
};
