import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function TopStatusBar() {
  return (
    <View>
        <StatusBar style="light" backgroundColor="#0296F0" hidden={false} />
    </View>
  );
}


