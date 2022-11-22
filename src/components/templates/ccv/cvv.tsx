import * as React from 'react';
import {STRINGS} from '../../../resources/strings';
import {colors} from '../../../theme/color';
import {FONT_TYPE} from '../../../theme/font';
import UIText from '../../widget/text/UIText';
import styles from './styles';

interface CvvViewProps {
  cvv: string;
}

/**
 * @param cvv it is the cvv present in a card
 * @returns
 */
const CvvView: React.FC<CvvViewProps> = ({cvv}) => {
  return (
    <UIText
      style={styles.ccvView}
      color={colors.white}
      FontType={FONT_TYPE.MEDIUM_13}
      text={`${STRINGS.cvv} ${cvv}`}
    />
  );
};

export default CvvView;
