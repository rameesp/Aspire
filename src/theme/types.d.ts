type IFontType = {
  [key in FontType]: IFontTypeProp;
};
type IFontTypeProp = {fontFamily: string; fontSize: number};
type FontType =
  | 'BOLD_24'
  | 'BOLD_22'
  | 'BOLD_12'
  | 'MEDIUM_14'
  | 'MEDIUM_12'
  | 'MEDIUM_13'
  | 'MEDIUM_09'
  | 'REGULAR_13'
  | 'REGULAR_12';
interface IFont {
  [key: string]: number;
}
