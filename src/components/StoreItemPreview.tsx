import React from "react";
import { Link } from "react-router-dom";
import blackHoodie from "../assets/black-hoodie.webp";

function StoreItemPreview() {

  return (
    <div>
      <Link to="/">
        <img src={blackHoodie} alt="" className="w-56 mb-3" />
        <h4 className="pl-3">Black Logo Hoodie</h4>
        <h6 className="pl-3">$60</h6>
      </Link>
    </div>
  );
}

export default StoreItemPreview;
