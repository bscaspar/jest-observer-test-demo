import * as React from 'react';
import { Text } from 'react-native';
import { Observer, observer } from 'mobx-react-lite';

export function MonoText() {
  // return <Text style={{ fontFamily: 'space-mono' }} />;
  return <Observer>{() => <Text style={{ fontFamily: 'space-mono' }} />}</Observer>;
}
