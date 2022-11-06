import React from "react";
import { riders } from "../data/riders";

function Team() {

  return (
    <main className="flex items-center justify-center flex-wrap gap-8 my-8">
      {riders.map((rider) => {
        return (
          <div key={rider.id} className="border-black border-2 w-fit">
            <h1>{rider.id}</h1>
            <h1>{rider.name}</h1>
            <a href={rider.instagramLink} target="_blank">{rider.instagramLink}</a>
            <img src={rider.riderImg} alt="rider" className="w-96" />
          </div>
        );
      })}
    </main>
  );
}

export default Team;
