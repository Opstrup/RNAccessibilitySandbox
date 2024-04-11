import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScreenReaderProvider} from './ui/ScreenReaderProvider';
import AccessibleImagesScene from './ui/scenes/AccessibleImagesScene';
import AlternativeUIScene from './ui/scenes/AlternativeUIScene';
import BasicAccessibilityPropsScene from './ui/scenes/BasicAccessibilityPropsScene';
import FocusControlScene from './ui/scenes/FocusControlScene';
import SwitchesScene from './ui/scenes/SwitchesScene';
import SceneBackground from './ui/views/SceneBackground';

const Stack = createNativeStackNavigator();

enum Scene {
  Sandbox = 'Sandbox',
  BasicAccessibilityProps = 'BasicAccessibilityProps',
  AccessibleImages = 'AccessibleImages',
  Switches = 'Switches',
  AlternativeUI = 'AlternativeUI',
  FocusControl = 'FocusControl',
}

const App: FunctionComponent = () => (
  <ScreenReaderProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Scene.Sandbox}
          component={Home}
          options={{title: Scene.Sandbox}}
        />
        <Stack.Screen
          name={Scene.BasicAccessibilityProps}
          component={BasicAccessibilityPropsScene}
          options={{title: Scene.BasicAccessibilityProps}}
        />
        <Stack.Screen
          name={Scene.AccessibleImages}
          component={AccessibleImagesScene}
          options={{title: Scene.AccessibleImages}}
        />
        <Stack.Screen
          name={Scene.Switches}
          component={SwitchesScene}
          options={{title: Scene.Switches}}
        />
        <Stack.Screen
          name={Scene.AlternativeUI}
          component={AlternativeUIScene}
          options={{title: Scene.AlternativeUI}}
        />
        <Stack.Screen
          name={Scene.FocusControl}
          component={FocusControlScene}
          options={{title: Scene.FocusControl}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </ScreenReaderProvider>
);

const Home: FunctionComponent = () => (
  <SceneBackground>
    <ListNavigationRowItem
      title="Basic Accessibility Props"
      navToScene={Scene.BasicAccessibilityProps}
    />
    <ListNavigationRowItem
      title="Accessible Images"
      navToScene={Scene.AccessibleImages}
    />
    <ListNavigationRowItem title="Switches" navToScene={Scene.Switches} />
    <ListNavigationRowItem
      title="Alternative UI"
      navToScene={Scene.AlternativeUI}
    />
    <ListNavigationRowItem
      title="Focus control"
      navToScene={Scene.FocusControl}
    />
  </SceneBackground>
);

const ListNavigationRowItem: FunctionComponent<{
  title: string;
  navToScene: Scene;
}> = ({title, navToScene}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navToScene)}
      accessibilityRole="menuitem">
      <View
        style={{
          borderColor: 'grey',
          borderBottomWidth: 1,
          paddingTop: 18,
          paddingBottom: 18,
          paddingLeft: 20,
        }}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default App;
