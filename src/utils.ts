import { NativeMouseEvent, NativeTouchEvent } from "react-native";
import { TIME_FORMAT } from "./types";

type ThrottleFunction<T> = (arg: T) => void;
export const getPosX = (event: NativeMouseEvent | NativeTouchEvent): number => {
  return event.pageX;
};

const addHeadingZero = (num: number): string => {
  return num > 9 ? num.toString() : `0${num}`;
};

export const getDisplayTimeBySeconds = (seconds: number, totalSeconds: number, timeFormat: TIME_FORMAT): string => {
  if (!isFinite(seconds)) {
    return "";
  }

  const min = Math.floor(seconds / 60);
  const minStr = addHeadingZero(min);
  const secStr = addHeadingZero(Math.floor(seconds % 60));
  const minStrForHour = addHeadingZero(Math.floor(min % 60));
  const hourStr = Math.floor(min / 60);

  const mmSs = `${minStr}:${secStr}`;
  const hhMmSs = `${hourStr}:${minStrForHour}:${secStr}`;

  if (timeFormat === "auto") {
    if (totalSeconds >= 3600) {
      return hhMmSs;
    }
    else {
      return mmSs;
    }
  }
  else if (timeFormat === "mm:ss") {
    return mmSs;
  }
  else if (timeFormat === "hh:mm:ss") {
    return hhMmSs;
  }
  else {
    return mmSs;
  }
};

export function throttle<K>(func: ThrottleFunction<K>, limit: number): ThrottleFunction<K> {
  let inThrottle = false;
  return (arg) => {
    if (!inThrottle) {
      func(arg);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
