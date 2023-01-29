export interface I18nAriaLabels {
  player?: string;
  progressControl?: string;
  volumeControl?: string;
  play?: string;
  pause?: string;
  previous?: string;
  rewind?: string;
  shuffle?: string;
  shuffleOn?: string;
  next?: string;
  loop?: string;
  loopOnce?: string;
  loopOff?: string;
  volume?: string;
  volumeMute?: string;
}

/* eslint-disable @typescript-eslint/naming-convention */
export type TIME_FORMAT = "auto" | "mm:ss" | "hh:mm:ss";

export type AUDIO_PRELOAD_ATTRIBUTE = "auto" | "metadata" | "none";
