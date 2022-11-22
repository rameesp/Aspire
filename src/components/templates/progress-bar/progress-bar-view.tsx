import * as React from 'react';
import {View} from 'react-native';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {STRINGS} from '../../../resources/strings';
import {colors} from '../../../theme/color';
import {FONT_TYPE} from '../../../theme/font';
import UIRow from '../../widget/row/UIRow';
import UIText from '../../widget/text/UIText';
import styles from './styles';

interface ProgressBarViewProps {
  progress: number;
  limit: string;
  total: string;
}
interface ProgressValueViewViewProps {
  limit: string;
  total: string;
}
/**
 * @param limit selected user card limit
 * @param total maximum limit
 */
const ProgressValueView: React.FC<ProgressValueViewViewProps> = ({
  limit,
  total,
}) => {
  return (
    <UIRow>
      <UIText
        FontType={FONT_TYPE.MEDIUM_13}
        color={colors.brand_green}
        text={`$${limit} `}
      />
      <UIText
        FontType={FONT_TYPE.MEDIUM_13}
        color={colors.off_white}
        text={`| $${total}`}
      />
    </UIRow>
  );
};
/**
 * @param limit selected user card limit
 * @param total maximum limit
 * @param progress calculated progress from controller
 */
const ProgressBarView: React.FC<ProgressBarViewProps> = ({
  progress,
  limit,
  total,
}) => {
  const barStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(progress),
      backgroundColor: colors.brand_green,
      borderRadius: 24,
    };
  });
  return (
    <View style={styles.container}>
      <UIRow rowStyle={styles.labelContainer}>
        <UIText
          text={STRINGS.debit_spending_limit_label}
          color={colors.dark_blue}
          FontType={FONT_TYPE.MEDIUM_13}
        />
        <ProgressValueView limit={String(limit)} total={String(total)} />
      </UIRow>
      <View style={styles.progressBarContainer}>
        <Animated.View style={[barStyle, {height: 15}]} />
      </View>
    </View>
  );
};

export default ProgressBarView;
