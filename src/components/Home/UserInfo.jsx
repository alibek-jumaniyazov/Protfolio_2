import React from "react";
import userImg from '../../assets/images/userImg.jpg'
export default function UserInfo() {
  return (
    <div className="UserInfo">
      <div className="user__img">
        <img src={userImg} alt="" />
      </div>
      <p className="user__title">
        I do code and make content
        <span className="userTitle__linerColor"> about it!</span>
      </p>
      <span className="userFull__info">
        I am a seasoned full-stack software engineer with over 8 years of
        professional experience, specializing in backend development. My
        expertise lies in crafting robust and scalable SaaS-based architectures
        on the Amazon AWS platform.
      </span>
    </div>
  );
}
