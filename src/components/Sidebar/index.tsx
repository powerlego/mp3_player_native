import { styled } from "nativewind";
import React, { PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

type SidebarProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle> | undefined;
}>;

function Sidebar({ children, style }: SidebarProps): JSX.Element {
  return (
    <View style={style}>
      <View className="top-0 bottom-0 flex flex-col">{children}</View>
    </View>
  );
}

export default styled(Sidebar);
