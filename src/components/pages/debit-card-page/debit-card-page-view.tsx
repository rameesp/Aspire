import * as React from 'react';
import {View, ScrollView} from 'react-native';
import DebitCardHeaderView from '../../templates/debit-card-header/debit-card-header-view';
import ProgressBar from '../../templates/progress-bar/progress-bar';
import styles from './styles';
import {totalDebitLimit} from '../../../resources/constants';
import DebitCardOption from '../../templates/debit-card-option/debit-card-option';
import CreditCard from '../../templates/credit-card/creadit-card';
import {limitContext} from './debit-card-page';

interface DebitCardPageViewProps {}
/**
 * @param limit limit of the credit card
 * @param setLimit for setting the card limit , its a state variable we pass it to context
 */
const DebitCardPageView: React.FC<DebitCardPageViewProps> = ({}) => {
  const contextLimit = React.useContext(limitContext);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View>
          <DebitCardHeaderView />
        </View>
        <View style={styles.middleContainer}>
          <CreditCard />
          <View
            style={
              Number(contextLimit.limit) > 0 ? {marginVertical: 24} : {marginBottom: 24}
            }>
            {Number(contextLimit.limit) > 0 ? (
              <ProgressBar limit={Number(contextLimit.limit)} total={totalDebitLimit} />
            ) : (
              <></>
            )}
          </View>
          <DebitCardOption />
        </View>
      </View>
    </ScrollView>
  );
};

export default DebitCardPageView;
