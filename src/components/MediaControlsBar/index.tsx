import { styled } from "nativewind";
import React, { ReactNode } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { TIME_FORMAT } from "../../types";

type IMediaControlsBarProps = {
  src?: string;
  progressUpdateInterval?: number;
  defaultCurrentTime?: ReactNode;
  defaultDuration?: ReactNode;
  timeFormat?: TIME_FORMAT;
  volume?: number;
  muted?: boolean;
  style?: StyleProp<ViewStyle>;
};

function MediaControlsBar({
  src,
  progressUpdateInterval,
  defaultCurrentTime,
  defaultDuration,
  timeFormat,
  volume,
  muted,
  style,
}: IMediaControlsBarProps): JSX.Element {
  return (
    <View style={style}>
      <Text>{src}</Text>
      <Text>{progressUpdateInterval}</Text>
      <Text>{defaultCurrentTime}</Text>
      <Text>{defaultDuration}</Text>
      <Text>{timeFormat}</Text>
      <Text>{volume}</Text>
      <Text>{muted}</Text>
    </View>
  );
}

MediaControlsBar.defaultProps = {
  src: "",
  progressUpdateInterval: 1000,
  defaultCurrentTime: "--:--",
  defaultDuration: "--:--",
  timeFormat: "auto" as TIME_FORMAT,
  volume: 1,
  muted: false,
};

export default styled(MediaControlsBar);
