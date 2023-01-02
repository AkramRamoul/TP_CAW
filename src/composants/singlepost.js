import React from "react";
import "./singlepost.css";
import { blogpost } from "./assets/myposts";
import { AiOutlineClockCircle, AiOutlineLike } from "react-icons/ai";
blogpost.map((singlepost) => console.log(singlepost));
export const Singlepost = () => {
  return (
    <>
      <section className="post">
        <div className="grid3">
          {blogpost.map((singlepost) => (
            <div className="boxItems" key={singlepost.id}>
              <div>
                <img src={singlepost.image} alt="" />
              </div>
              <div className="desc">
                <div></div>
                <h3>{singlepost.title}</h3>
                <p>{singlepost.description}</p>
                <div className="date">
                  <AiOutlineClockCircle className="icons" />{" "}
                  <label htmlFor="">{singlepost.date}</label>
                  <AiOutlineLike className="icons" />{" "}
                  <label htmlFor="">4</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
