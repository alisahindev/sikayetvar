import React, { useEffect } from "react";
import { Spinner } from "reactstrap";

function PageSpinner() {
  return (
    <div className='spinner'>
      <Spinner animation='border' variant='primary' />
    </div>
  );
}

export default PageSpinner;
