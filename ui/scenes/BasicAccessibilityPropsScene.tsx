import {useNavigation} from '@react-navigation/native';
import React, {FunctionComponent, ReactNode, useCallback} from 'react';
import {
  AccessibilityProps,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SceneBackground from '../views/SceneBackground';

const BasicAccessibilityPropsScene: FunctionComponent = () => {
  const navigation = useNavigation();
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SceneBackground>
      <Row description="Default text elements is read line by line.">
        <View>
          <Text>Seperate text line one</Text>
          <Text>Seperate text line two</Text>
        </View>
      </Row>
      <Row description="Consider using the accessible prop to group elements.">
        <View accessible={true}>
          <Text>Grouped text line one</Text>
          <Text>Grouped text line two</Text>
        </View>
      </Row>
      <Row description="The aria-hidden prop can be used to hide elements and all descendants.">
        <View aria-hidden={true}>
          <Text>Hidden text line one</Text>
          <Text>Hidden text line two</Text>
        </View>
      </Row>
      <Row description="Consider using the accessibilityHint prop to provide context.">
        <TouchableOpacity
          style={styles.button}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          accessibilityHint="Navigates to the previous screen"
          onPress={goBack}>
          <View>
            <Text style={styles.text}>Back</Text>
          </View>
        </TouchableOpacity>
      </Row>
      <Row description="The accessibilityState can be used to describe current state of a component.">
        <TouchableOpacity
          style={styles.button}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Press me"
          accessibilityHint="Try me!"
          accessibilityState={{disabled: true}}
          disabled={true}>
          <View>
            <Text style={styles.text}>Press me</Text>
          </View>
        </TouchableOpacity>
      </Row>
      <Row description="The accessibilityLabel can overright some of the other accesibility prop, consider using accessibilityHint in these cases.">
        <ActivityIndicator
          size="large"
          // aria-busy={true} <- The accessibilityLabel prop is overrighting the busy prop (which the ActivityIndicator uses as default)
          accessibilityHint="Waiting for something to load"
        />
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

export default BasicAccessibilityPropsScene;
