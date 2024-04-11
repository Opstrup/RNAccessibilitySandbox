import React, {FunctionComponent, ReactNode, useState} from 'react';
import {AccessibilityProps, StyleSheet, Switch, Text, View} from 'react-native';
import SceneBackground from '../views/SceneBackground';

const SwitchesScene: FunctionComponent = () => {
  const [simpleSwitchState, setSimpleSwitchState] = useState(false);
  const [
    simpleSwitchTextNotAccessibleState,
    setSimpleSwitchTextNotAccessibleState,
  ] = useState(false);
  const [semanticSwitchState, setSemanticSwitchState] = useState(false);

  return (
    <SceneBackground>
      <SwitchRow description="Text element will be read seperatly from switch.">
        <Text>Simple switch (text accessible)</Text>
        <Switch
          onValueChange={() => setSimpleSwitchState(!simpleSwitchState)}
          value={simpleSwitchState}
          accessibilityLabel="Simple switch"
        />
      </SwitchRow>
      <SwitchRow description="Consider making the switch text not accessible to avoid the issue.">
        <Text accessible={false}>Simple switch (text not accessible)</Text>
        <Switch
          onValueChange={() =>
            setSimpleSwitchTextNotAccessibleState(
              !simpleSwitchTextNotAccessibleState,
            )
          }
          value={simpleSwitchTextNotAccessibleState}
          accessibilityLabel="Simple switch"
        />
      </SwitchRow>
      <SwitchRow
        description="Semantic layered switches can also be a solution."
        accessibilityLabel={'Semantic layered switch'}
        accessible={true}
        accessibilityState={{checked: semanticSwitchState}}
        accessibilityRole="switch"
        accessibilityActions={[{name: 'activate', label: 'activate'}]}
        onAccessibilityAction={event => {
          switch (event.nativeEvent.actionName) {
            case 'activate':
              setSemanticSwitchState(!semanticSwitchState);
              break;
          }
        }}>
        <Text>Semantic layered switch</Text>
        <Switch
          onValueChange={() => setSemanticSwitchState(!semanticSwitchState)}
          value={semanticSwitchState}
        />
      </SwitchRow>
    </SceneBackground>
  );
};

const SwitchRow: FunctionComponent<
  {description: string; children: ReactNode} & AccessibilityProps
> = ({description, children}) => (
  <View>
    <Text
      accessible={false}
      style={{paddingHorizontal: 10, paddingTop: 5, fontStyle: 'italic'}}>
      {description}
    </Text>
    <View style={styles.row}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
});

export default SwitchesScene;
