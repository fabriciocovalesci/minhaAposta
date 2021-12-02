
import React from 'react';
import { NativeBaseProvider, View } from 'native-base';
import { NavigationContainer } from '@react-navigation/native'

import TabNavigation from './src/Routes/router.Tab';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}