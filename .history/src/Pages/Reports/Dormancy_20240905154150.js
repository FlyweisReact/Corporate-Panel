/** @format */

import React , { useState} from "react";
import Helmet from "../../Components/Helmet";

const Dormancy = () => {
    const [ open ,setOpen ] = useState(false)
  return (
    <section className="dormancy-report-page">
      <Helmet title={"Dormancy Report"} />
      <AlertDateSelector show={open} handleClose={() => setOpen(false)} />
     
    </section>

  );
};

export default Dormancy;
