import React, { forwardRef } from "react";
import { Loading } from "../index";

const SpotObserver = forwardRef(({ loading }, ref) => (
  <div ref={ref}>
    <p style={{ opacity: "0" }}>observer</p>
    <Loading loading={loading} />
  </div>
));

export default SpotObserver;
