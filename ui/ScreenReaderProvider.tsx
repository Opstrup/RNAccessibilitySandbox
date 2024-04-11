import React, {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {AccessibilityInfo} from 'react-native';

export type FunctionComponentWithChildren<P = {}> = FunctionComponent<
  PropsWithChildren<P>
>;

const ScreenReaderContext = createContext(false);

export const ScreenReaderProvider: FunctionComponentWithChildren = ({
  children,
}) => {
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] = useState<boolean>();

  useEffect(() => {
    const screenReaderListener = AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      setIsScreenReaderEnabled,
    );

    // Make sure we always set initial screen reader status
    AccessibilityInfo.isScreenReaderEnabled().then(setIsScreenReaderEnabled);

    return () => {
      screenReaderListener.remove();
    };
  }, []);

  return typeof isScreenReaderEnabled !== 'undefined' ? (
    <ScreenReaderContext.Provider value={isScreenReaderEnabled}>
      {children}
    </ScreenReaderContext.Provider>
  ) : null;
};

export const useScreenReaderStatus = () => {
  const isScreenReaderEnabled = useContext(ScreenReaderContext);
  return {isScreenReaderEnabled};
};
