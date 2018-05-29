"use strict";

import React from "react";
import { View } from "react-native";
const CustomCopilot = ({ copilot, children }) => {
  // debugger
  return <View {...copilot}>{children}</View>;
};

export default CustomCopilot;
