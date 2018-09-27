import clone from 'clone';
import themedark from './themedark';

const theme = clone(themedark);
theme.palette.primary = ['#f00'];
theme.palette.secondary = ['#0f0'];
theme.palette.background = [
  '#f5f5f5', // 0: Default
];
theme.palette.text = [
  '#323332', // 0: Heading
  '#595959', // 1: HeadingLight
  '#000000', // 2: Text
  '#797979', // 3: TextDark
  '#6a6c6a', // 4: Heading Lighten 22%
];

export default theme;
