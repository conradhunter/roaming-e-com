import React from "react";
import { riders } from "../data/riders";

function Team() {

  // Add blur/gray-scale filter to rider images on hover for better contrast on rider information

  return (
    <main className="row mx-auto">
        <h1 className="my-12 text-4xl text-center">Riders.</h1>
      <section className="flex items-center justify-center flex-wrap gap-8 my-8">
        {riders.map((rider) => {
          return (
            <div id="rider-wrapper" key={rider.id} className="border-black border-2 relative">
              <div id="rider-info" className="w-full h-full flex-col flex items-center justify-center absolute">
                <h1 className="text-xl">{rider.name}</h1>
                <a
                  href={rider.instagramLink}
                  className="text-xs"
                  target="_blank"
                >
                  {rider.instagramLink}
                </a>
              </div>
              <img
                src={rider.riderImg}
                alt="Team Rider"
                className="w-72 h-72 object-cover"
                id="rider-img"
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Team;
