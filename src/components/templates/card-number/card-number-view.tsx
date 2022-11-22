import * as React from 'react';
import { colors } from '../../../theme/color';
import { FONT_TYPE } from '../../../theme/font';
import UIRow from '../../widget/row/UIRow';
import UIText from '../../widget/text/UIText';

import styles from './style';

interface CardNumberViewProps {
  cardNumber: string[];
}

/**
 * @param cardNumber is an array of strings the each item is four digit number
 */
const CardNumberView: React.FC<CardNumberViewProps> = ({cardNumber}) => {
  return (
    <UIRow rowStyle={styles.container}>
      <>
        {cardNumber.map(item => (
          <UIText style={styles.priceView} color={colors.white} FontType={FONT_TYPE.MEDIUM_14} key={item} text={item} />
        ))}
      </>
    </UIRow>
  );
};

export default CardNumberView;
