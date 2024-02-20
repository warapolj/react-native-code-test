import React, {PropsWithChildren} from 'react';
import {Text, TextProps} from 'react-native';

export default function Link({
  children,
  ...props
}: PropsWithChildren<TextProps>) {
  return (
    <Text
      {...props}
      style={{textDecorationLine: 'underline', color: '#606367'}}>
      {children}
    </Text>
  );
}
