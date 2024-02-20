import React, {PropsWithChildren} from 'react';
import {Pressable, PressableProps, Text, View, StyleSheet} from 'react-native';

interface IProps extends PropsWithChildren<PressableProps> {
  variant?: 'solid' | 'outline';
}

export default function Button({variant = 'solid', ...props}: IProps) {
  let variantStyle = {
    button: {},
    text: {},
  };

  if (variant === 'outline') {
    variantStyle = {
      button: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#3F78E1',
      },
      text: {
        color: '#3F78E1',
      },
    };
  } else {
    variantStyle = {
      button: {
        backgroundColor: '#3F78E1',
      },
      text: {
        color: '#FFFFFF',
      },
    };
  }

  return (
    <Pressable {...props}>
      {({pressed}) => {
        return (
          <View
            style={{
              transform: [{scale: pressed ? 0.99 : 1}],
              ...styles.button,
              ...variantStyle.button,
            }}>
            {typeof props.children === 'string' ? (
              <Text style={{...styles.text, ...variantStyle.text}}>
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

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3F78E1',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
    minWidth: 80,
    minHeight: 40,
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 15,
  },
});
