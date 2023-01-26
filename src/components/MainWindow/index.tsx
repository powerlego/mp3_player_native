import React, { PropsWithChildren } from "react";
import { View } from "react-native";

type MainWindowProps = PropsWithChildren<{
  style?: string;
}>;

function MainWindow({ children, style }: MainWindowProps): JSX.Element {
  return <View className={style}>{children}</View>;
}
