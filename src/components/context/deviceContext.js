import { createContext } from "react";

const DeviceContext = createContext(deviceInfo);

export const deviceInfo = {
  dimensions: {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  }
}

export default DeviceContext;