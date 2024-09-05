/** @format */

import { Helmet } from "react-helmet";
import React from "react";

const Helmet = (props) => {
    {title , description} = props
  return (
    <Helmet>
      <title>Nested Title</title>
      <meta name="description" content="Nested component" />
    </Helmet>
  );
};

export default Helmet;
