import React from 'react';
import "./Idcard.css"

const IdCard = (props) => {
  return (
    <div className="info-container">
      <img className="profile-pic" src={props.picture} alt="pic"/>
      <div className="info">
        <p><strong>First name:</strong> {props.firstName}</p>
        <p><strong>Last name:</strong> {props.lastName}</p>
        <p><strong>Gender: </strong>{props.gender}</p>
        <p><strong>Height: </strong>{props.height}</p>
        <p><strong>Birthday: </strong>{props.birth}</p>
      </div>
    </div>
  );
};

export default IdCard;