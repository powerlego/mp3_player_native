/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import MainWindow from "./components/MainWindow";
import { SafeAreaView, Text, View } from "react-native";
import Sidebar from "./components/Sidebar";
import MediaControlsBar from "./components/MediaControlsBar";

function App(): JSX.Element {
  return (
    <SafeAreaView className="web:overflow-y-hidden overflow-hidden flex-[4]">
      <View className="flex-row flex-shrink">
        {/*Should be a drawer for mobile devices*/}
        <Sidebar className="z-20 m-0 w-56 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod</Text>
        </Sidebar>
        <View className="h-full w-full bg-gray-300 dark:bg-gray-700 flex-[3] overflow-hidden">
          <MainWindow className="relative flex flex-col h-full w-full bg-gray-300 dark:bg-gray-700" />
        </View>
      </View>
      <MediaControlsBar
        className="absolute bottom-0 left-0 z-30 h-[90px] w-full bg-gray-350 dark:bg-gray-750 px-4 min-h-[90px]"
        src="HelloWorld"
      />
    </SafeAreaView>
  );
}

export default App;
