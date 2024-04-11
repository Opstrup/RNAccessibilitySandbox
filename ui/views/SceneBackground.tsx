import React, {FunctionComponent, ReactNode} from 'react';
import {SafeAreaView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
  children: ReactNode;
}

const SceneBackground: FunctionComponent<Props> = ({children}) => (
  <SafeAreaView style={{flex: 1, backgroundColor: Colors.lighter}}>
    {children}
  </SafeAreaView>
);

export default SceneBackground;
