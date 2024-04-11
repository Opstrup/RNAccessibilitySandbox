import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import SceneBackground from '../views/SceneBackground';
import ScreenReader from '../views/ScreenReader';

const AlternativeUIScene: FunctionComponent = () => (
  <SceneBackground>
    <ScreenReader.Off>
      <Text>
        This text should only be visible when the screen reader is off
      </Text>
    </ScreenReader.Off>
    <ScreenReader.On>
      <Text>This text should only be visible when the screen reader is on</Text>
    </ScreenReader.On>
  </SceneBackground>
);

export default AlternativeUIScene;
