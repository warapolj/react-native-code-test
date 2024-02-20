import React, {PropsWithChildren} from 'react';
import {View, ViewProps} from 'react-native';

export function Row({children, style, ...props}: PropsWithChildren<ViewProps>) {
  return (
    <View style={[{flexDirection: 'row'}, style]} {...props}>
      {children}
    </View>
  );
}
