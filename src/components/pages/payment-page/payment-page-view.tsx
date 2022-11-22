import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface IPaymentPageViewProps {}

const PaymentPageView = (props: IPaymentPageViewProps) => {
  return (
    <View style={styles.container}>
      <Text>paymentPageView</Text>
    </View>
  );
};

export default PaymentPageView;

const styles = StyleSheet.create({
  container: {},
});
