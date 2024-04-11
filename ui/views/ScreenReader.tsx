import React, {FunctionComponent, PropsWithChildren} from 'react';
import {useScreenReaderStatus} from '../ScreenReaderProvider';

const On: FunctionComponent<PropsWithChildren> = ({children}) => {
  const {isScreenReaderEnabled} = useScreenReaderStatus();
  return isScreenReaderEnabled ? <>{children}</> : null;
};

const Off: FunctionComponent<PropsWithChildren> = ({children}) => {
  const {isScreenReaderEnabled} = useScreenReaderStatus();
  return !isScreenReaderEnabled ? <>{children}</> : null;
};

export default {
  On,
  Off,
};
