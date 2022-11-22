import * as React from 'react';
import {Pressable} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {colors} from '../../../theme/color';
import styles from './styles';

interface UISwitchProps {
  onSwitchEnabled: (isEnabled: boolean) => void;
  setSwitchEnabled: any;
  isEnabled: boolean;
}

const UISwitch = ({
  onSwitchEnabled,
  setSwitchEnabled,
  isEnabled,
}: UISwitchProps) => {
  React.useEffect(() => {
    onSwitchEnabled(isEnabled);
  }, [isEnabled]);
  const animatedCircleStyles = useAnimatedStyle(() => {
    return {
      marginLeft: withSpring(isEnabled ? 14 : 2),
    };
  });
  const animatedContainerStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isEnabled ? colors.brand_green : colors.dullGrey,
        {
          duration: 500,
          easing: Easing.out(Easing.exp),
        },
      ),
    };
  });
  return (
    <Pressable
      onPress={() => {
        setSwitchEnabled(!isEnabled);
      }}>
      <Animated.View style={[animatedContainerStyles, styles.switchContainer]}>
        <Animated.View style={[styles.switchCircle, animatedCircleStyles]} />
      </Animated.View>
    </Pressable>
  );
};

export default UISwitch;
