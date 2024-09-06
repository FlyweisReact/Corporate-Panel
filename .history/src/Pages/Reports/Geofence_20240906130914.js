/** @format */

import React, { useState } from "react";
import Helmet from "../../Components/Helmet";
import { AlertDateSelector } from "../../Components/Modal/Modal";

const Geofence = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="p-5 geofence-report">
      <AlertDateSelector show={open} handleClose={() => setOpen(false)} />
      <Helmet title={"Geofence"} />

      <p className="heading">Reports Demo</p>
      <p className="sub-heading">
        You are viewing a TruckX placeholder powered by a sample data set as a
        part of the demo experience!
      </p>

      <div className="bg-white rounded-xl mt-3">
        
      </div>
    </section>
  );
};

export default Geofence;
