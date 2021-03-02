import React, { forwardRef } from "react";
import { Loading } from "../index";

const SpotObserver = forwardRef(({ loading }, ref) => (
  <div ref={ref}>{loading && <Loading loading={loading} />}</div>
));

export default SpotObserver;
