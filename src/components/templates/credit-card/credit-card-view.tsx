import * as React from 'react';
import {View} from 'react-native';
import HomeIcon from '../../../assets/icons/home-icon';
import VisaIcon from '../../../assets/icons/visa';
import {STRINGS} from '../../../resources/strings';
import {colors} from '../../../theme/color';
import {FONT_TYPE} from '../../../theme/font';
import UICard from '../../widget/card/card-view';
import UIRow from '../../widget/row/UIRow';
import UIText from '../../widget/text/UIText';
import CardNumberView from '../card-number/card-number-view';
import CvvView from '../ccv/cvv';
import ExpiryDateView from '../expiry-date/expiry-date';
import IconTextView from '../icon-text/icon-text';
import styles from './styles';

interface CreditCardViewProps {
  userDetails: {
    name: string;
    cardNumber: string[];
    cvv: string;
    dateThru: string;
  };
}
//View will render user details on card
const CreditCardView: React.FC<CreditCardViewProps> = ({userDetails}) => {
  return (
    <UICard cardStyles={styles.container}>
      <UIRow rowStyle={styles.aspireIconContainer}>
        <IconTextView
          Icon={() => <HomeIcon color={colors.white} />}
          text={STRINGS.aspire}
        />
      </UIRow>
      <UIText
        color={colors.white}
        FontType={FONT_TYPE.BOLD_22}
        text={userDetails.name}
      />
      <View style={styles.cardViewContainer}>
        <CardNumberView cardNumber={userDetails.cardNumber} />
      </View>

      <UIRow rowStyle={styles.cardDateDetails}>
        <ExpiryDateView expiryDate={userDetails.dateThru} />
        <CvvView cvv={userDetails.cvv} />
      </UIRow>
      <UIRow rowStyle={styles.visaIconContainer}>
        <VisaIcon />
      </UIRow>
    </UICard>
  );
};

export default CreditCardView;
