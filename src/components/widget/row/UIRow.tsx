import * as React from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';

interface UIRowProps {
  children: React.ReactNode;
  rowStyle?: ViewStyle;
}

const UIRow: React.FC<UIRowProps> = ({children, rowStyle}) => {
  return <View style={[styles.container, rowStyle]}>{children}</View>;
};

export default UIRow;
