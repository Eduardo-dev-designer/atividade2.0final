import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#176B45' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '800' },
          contentStyle: { backgroundColor: '#F4F8F4' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Bom Leite', headerShown: false }} />
        <Stack.Screen name="produtos" options={{ title: 'Nossos produtos' }} />
        <Stack.Screen name="promocoes" options={{ title: 'Ofertas especiais' }} />
      </Stack>
    </>
  );
}
