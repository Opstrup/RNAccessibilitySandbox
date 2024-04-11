import {RefObject, useState} from 'react';
import {AccessibilityInfo, findNodeHandle} from 'react-native';
import {useScreenReaderStatus} from './ui/ScreenReaderProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSetScreenReaderFocusOnMount = (ref: RefObject<any>) => {
  const {isScreenReaderEnabled} = useScreenReaderStatus();
  const [hasSetFocus, setHasSetFocus] = useState(false);

  if (isScreenReaderEnabled) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!hasSetFocus) {
          setHasSetFocus(true);
          screenReaderSetFocus(ref);
        }
      });
    });
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any, import/no-unused-modules
export const screenReaderSetFocus = (ref: RefObject<any>) => {
  const elementId = findNodeHandle(ref.current);
  if (elementId) {
    AccessibilityInfo.setAccessibilityFocus(elementId);
  }
};
