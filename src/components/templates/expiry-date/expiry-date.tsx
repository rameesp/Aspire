import * as React from 'react';
import { STRINGS } from '../../../resources/strings';
import { colors } from '../../../theme/color';
import { FONT_TYPE } from '../../../theme/font';
import UIText from '../../widget/text/UIText';

interface ExpiryDateViewProps {
  expiryDate: string;
}

const ExpiryDateView: React.FC<ExpiryDateViewProps> = ({expiryDate}) => {
  return <UIText color={colors.white} FontType={FONT_TYPE.MEDIUM_13} text={`${STRINGS.expThru}${expiryDate}`} />;
};

export default ExpiryDateView;
