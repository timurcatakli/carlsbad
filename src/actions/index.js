import { APP } from '../constants';

// APP ACTIONS
const toggleSidebar = () => ({
  type: APP.TOGGLE_SIDEBAR,
});

const switchTheme = () => ({
  type: APP.SWITCH_THEME,
});

export { toggleSidebar, switchTheme };
