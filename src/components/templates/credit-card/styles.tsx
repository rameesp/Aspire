import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/color';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.brand_green,
    marginTop: -48,
    marginHorizontal: 16,
  },
  visaIconContainer: {justifyContent: 'flex-end', marginBottom: 16},
  aspireIconContainer:{justifyContent: 'flex-end', width: '100%'},
  cardViewContainer:{marginTop: 12},
  cardDateDetails:{marginVertical: 12}
});
export default styles;
