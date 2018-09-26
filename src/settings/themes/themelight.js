import clone from 'clone';
import themedark from './themedark';

const theme = clone(themedark);
theme.palette.primary = ['#f00'];
theme.palette.secondary = ['#0f0'];
theme.palette.background = [
  '#f5f5f5', // 0: Default
];

export default theme;
