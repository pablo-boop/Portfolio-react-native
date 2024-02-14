import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { H1, H2, H3, H4 } from 'tamagui'


export default function App() {
  return (
    <View className={`flex-1 items-center bg-slate-700`}>
      <View>
        <H1>Pablo Daniel Couto</H1>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
