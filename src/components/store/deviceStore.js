import { createContext } from "react";

const DeviceStore = createContext(deviceInfo);

export const deviceInfo = {
  dimensions: {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  }
}

export default DeviceStore;