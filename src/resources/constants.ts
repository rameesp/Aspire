import {SvgProps} from 'react-native-svg';
import DeActivateCardIcon from '../assets/icons/de-activate-card-icon';
import FreezeCardIcon from '../assets/icons/freeze-card-icon';
import GetCardIcon from '../assets/icons/get-new-card-icon';
import TopUpAccountIcon from '../assets/icons/top-up-account-icon';
import WeeklySpendingIcon from '../assets/icons/weekly-spending-icon';

interface debit_optionsTypes {
  heading: string;
  subHeading: string;
  Icon: (props: SvgProps) => JSX.Element;
  isSwitch: boolean;
}
export const debit_options: debit_optionsTypes[] = [
  {
    heading: 'Top-up account',
    subHeading: 'Deposit money to your account to use with card',
    Icon: TopUpAccountIcon,
    isSwitch: false,
  },
  {
    heading: 'Weekly spending limit',
    subHeading: 'You haven’t set any spending limit on card',
    Icon: WeeklySpendingIcon,
    isSwitch: true,
  },
  {
    heading: 'Freeze card',
    subHeading: 'Your debit card is currently active',
    Icon: FreezeCardIcon,
    isSwitch: true,
  },
  {
    heading: 'Get a new card',
    subHeading: 'This deactivates your current card',
    Icon: GetCardIcon,
    isSwitch: false,
  },
  {
    heading: 'Deactivated cards',
    subHeading: 'Your previously deactivated cards',
    Icon: DeActivateCardIcon,
    isSwitch: false,
  },
];
export const chips = ['S$ 5,000', 'S$ 10,000', 'S$ 20,000'];
export const totalDebitLimit = 20000;
export const BASE_URL = __DEV__ ? 'https://mocki.io/' : 'https://mocki.io/';
