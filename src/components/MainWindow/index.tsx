import { styled } from "nativewind";
import React, { PropsWithChildren } from "react";
import { ScrollView, StyleProp, View, ViewStyle } from "react-native";
type MainWindowProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle> | undefined;
}>;

function MainWindow({ children, style }: MainWindowProps): JSX.Element {
  return (
    <ScrollView style={style}>
      <View className="h-16 sticky top-0" />
      <View className="h-full w-full flex flex-col items-start justify-start overflow-y-scroll">
        <View className="w-full text-center text-gray-800 dark:text-white">{children}</View>
      </View>
    </ScrollView>
  );
}

export default styled(MainWindow);
