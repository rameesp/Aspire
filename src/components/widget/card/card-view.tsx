import * as React from 'react';
import {Text, View, StyleSheet, ViewStyle} from 'react-native';
import styles from './styles';

interface UICardProps {
  children: React.ReactNode;
  cardStyles?: ViewStyle;
}

const UICard:React.FC<UICardProps> = ({children, cardStyles}) => {
  return <View style={[styles.container, cardStyles]}>{children}</View>;
};

export default UICard;
