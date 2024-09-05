/** @format */

import { Helmet as ReactHelmet } from "react-helmet"; // Rename to avoid name clash
import React from "react";

const Helmet = (props) => {
  const { title, description } = props; // Destructure props correctly

  return (
    <ReactHelmet>
      <title>{title || "Default Title"}</title> {/* Use props or default value */}
      <meta name="description" content={description || "Default description"} /> {/* Use props or default value */}
    </ReactHelmet>
  );
};

export default Helmet;
