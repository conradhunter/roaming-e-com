import React from "react";
import { Link } from "react-router-dom";
import blackHoodie from "../assets/black-hoodie.webp";

function StoreItemPreview() {

  return (
    <div>
      <Link to="/">
        <img src={'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc9%2F65%2Fc965cd1a4f69f7d0260d5f955eb9605de03639ef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]'} alt="" className="w-56 mb-3" />
        <h4 className="pl-3">Black Logo Hoodie</h4>
        <h6 className="pl-3">$60</h6>
      </Link>
    </div>
  );
}

export default StoreItemPreview;
