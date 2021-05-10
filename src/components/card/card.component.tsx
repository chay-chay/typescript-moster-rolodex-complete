import React from "react";

import "./card.styles.css";

interface Props {
  monster: MonsterType;
}

export type MonsterType = {
  address: {
    street: string; suite: string; city: string; zipcode: string; geo: { lat: string; lng: string; };
  };
    company: { name: string; catchPhrase: string; bs: string };
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
 
}

export const Card: React.FC<Props> = (props) => {
  // console.log(props.monster)

  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2> {props.monster.name} </h2>
      <p> {props.monster.email} </p>
    </div>
  );
};
