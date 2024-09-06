/** @format */

import React, { useState } from "react";
import Helmet from "../../Components/Helmet";
import { AlertDateSelector } from "../../Components/Modal/Modal";

const HOS = () => {
    const [ open , setOpen ] = useState(false)
  return (
    <section className="p-5">
      <Helmet title={"HOS Report"} />
      <AlertDateSelector show={open} handleClose={() => setOpen(false)} />
      <div className="report-btn-container">
        <div></div>
      </div>
    </section>
  );
};

export default HOS;
