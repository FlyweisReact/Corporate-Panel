/** @format */

import { Helmet } from "react-helmet";
import React from "react";

const Helmet = () => {
  return (
    <Helmet>
      <title>Nested Title</title>
      <meta name="description" content="Nested component" />
    </Helmet>
  );
};

export default Helmet;
