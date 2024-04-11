import React, {FunctionComponent, ReactNode, useCallback, useRef} from 'react';
import {
  AccessibilityProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  screenReaderSetFocus,
  useSetScreenReaderFocusOnMount,
} from '../../accessibilityUtil';
import SceneBackground from '../views/SceneBackground';

const FocusControlScene: FunctionComponent = () => {
  const focusOnMount = useRef<Text>(null);
  const focusOnPress = useRef<Text>(null);
  useSetScreenReaderFocusOnMount(focusOnMount);

  const onPress = useCallback(() => {
    screenReaderSetFocus(focusOnPress);
  }, []);

  return (
    <SceneBackground>
      <Row description="Even though this is top most element, it should not be in focus on mount.">
        <Text>Simple text</Text>
      </Row>
      <Row description="Force focus on this element on mount.">
        <Text ref={focusOnMount}>Focus on me</Text>
      </Row>
      <Row description="Change focus on user interaction.">
        <TouchableOpacity
          style={styles.button}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Press me"
          accessibilityHint="Im going to change the focus"
          onPress={onPress}>
          <View>
            <Text style={styles.text}>Press me</Text>
          </View>
        </TouchableOpacity>
      </Row>
      <Row description="">
        <Text>Random text</Text>
      </Row>
      <Row description="Force focus on this element on user interaction.">
        <Text ref={focusOnPress}>Focus on me</Text>
      </Row>
    </SceneBackground>
  );
};

const Row: FunctionComponent<
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'grey',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
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

export default FocusControlScene;
