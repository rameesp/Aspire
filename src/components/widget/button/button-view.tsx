import * as React from 'react';
import {Pressable, ViewStyle} from 'react-native';
import styles from './styles';

interface UIButtonProps {
  children: React.ReactNode;
  buttonStyle: ViewStyle;
  onPress: () => void;
}

const UIButton = ({children, buttonStyle,onPress}: UIButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, buttonStyle]}>
      {children}
    </Pressable>
  );
};

export default UIButton;
