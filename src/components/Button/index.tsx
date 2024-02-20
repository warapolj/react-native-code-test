import React, {PropsWithChildren} from 'react';
import {Pressable, PressableProps, Text, View} from 'react-native';

export default function Button(props: PropsWithChildren<PressableProps>) {
  return (
    <Pressable {...props}>
      {({pressed}) => {
        return (
          <View
            style={{
              transform: [{scale: pressed ? 0.99 : 1}],
              backgroundColor: '#3F78E1',
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 6,
            }}>
            {typeof props.children === 'string' ? (
              <Text style={{fontWeight: '600', fontSize: 15, color: '#FFFFFF'}}>
                {props.children}
              </Text>
            ) : (
              props.children
            )}
          </View>
        );
      }}
    </Pressable>
  );
}
