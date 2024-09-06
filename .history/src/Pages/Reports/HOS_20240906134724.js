/** @format */

import React, { useState } from "react";
import Helmet from "../../Components/Helmet";

const HOS = () => {
    const [ open , setOpen ] = useState(false)
  return (
    <section className="p-5">
      <Helmet title={"HOS Report"} />
      <div className="report-btn-container">

      </div>
    </section>
  );
};

export default HOS;
