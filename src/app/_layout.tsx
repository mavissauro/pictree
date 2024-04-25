import '../translation';

import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ToastViewport } from '~/utils/toast/toast.viewport';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack />
      <ToastViewport />
    </GestureHandlerRootView>
  );
}
