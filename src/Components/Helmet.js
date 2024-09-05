/** @format */

import { Helmet as ReactHelmet } from "react-helmet"; // Rename to avoid name clash
import React from "react";

const Helmet = (props) => {
  const { title, description } = props;  
  return (
    <ReactHelmet>
      <title>{title || "NXT ELD"}</title> 
      <meta name="description" content={description || ""} /> 
    </ReactHelmet>
  );
};

export default Helmet;
