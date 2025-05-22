import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SavedPalettesProvider } from './src/context/SavedPalettesContext';

import HomeScreen from './src/screens/HomeScreen';
import SavedColorScreen from './src/screens/SavedColorsScreen';
import CameraScreen from './src/screens/CameraScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SavedPalettesProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Saved Colors" component={SavedColorScreen} />
          <Tab.Screen name="Camera" component={CameraScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SavedPalettesProvider>
  );
}

