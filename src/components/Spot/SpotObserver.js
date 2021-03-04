import React, { forwardRef } from "react";
import { Loading } from "../index";

const SpotObserver = forwardRef(({ loading }, ref) => (
  <div ref={ref}>
    <p>test</p>
    {loading && <Loading loading={loading} />}
  </div>
));

export default SpotObserver;
