import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CreditCardView from './credit-card-view';
import useCreditCardViewController from './credit-card-view-controller';

const CreditCard:React.FC = () => {
  const {userDetails} = useCreditCardViewController();
  return <CreditCardView userDetails={userDetails} />;
};

export default CreditCard;
