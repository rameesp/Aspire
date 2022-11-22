import {StyleSheet} from 'react-native';
import { colors } from '../../../theme/color';

const styles = StyleSheet.create({
    scrollView:{flex: 1},
    container:{flex: 1, backgroundColor: colors.dark_blue, marginBottom: 32},
    middleContainer:{
        backgroundColor: colors.white,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        justifyContent:"center"
      }
});
export default styles;
