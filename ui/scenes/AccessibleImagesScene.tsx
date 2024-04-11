import React, {FunctionComponent, ReactNode} from 'react';
import {
  AccessibilityProps,
  Image,
  ImageProps,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SceneBackground from '../views/SceneBackground';

const AccessibleImagesScene: FunctionComponent = () => {
  return (
    <SceneBackground>
      <ScrollView>
        <Row description="Default image import, no accessibility added">
          <Image
            source={require('../../img/puppy.jpeg')}
            style={{width: 200, height: 200}}
          />
        </Row>
        <Row description="Image with minimum accessible info">
          <Image
            source={require('../../img/puppy.jpeg')}
            style={{width: 200, height: 200}}
            accessible
            accessibilityRole="image"
          />
        </Row>
        <Row description="Consider using the accessibilityLabel as img alt text">
          <Image
            source={require('../../img/frenchBulldog.jpeg')}
            style={{width: 200, height: 200}}
            accessible
            accessibilityRole="image"
            accessibilityLabel="French bulldog poppy"
          />
        </Row>
        <Row description="Since images not are accessible by default and maybe not all images should be accessible, consider making a component for accessible images to keep to code clean.">
          <ImageAccessible
            source={require('../../img/frenchBulldog.jpeg')}
            style={{width: 200, height: 200}}
            accessibilityLabel="Accessible image of a French bulldog poppy"
          />
        </Row>
      </ScrollView>
    </SceneBackground>
  );
};

interface Props extends ImageProps {
  accessibilityLabel: string;
}

const ImageAccessible: FunctionComponent<Props> = props => (
  <Image {...props} accessibilityRole="image" accessible />
);

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

export default AccessibleImagesScene;
