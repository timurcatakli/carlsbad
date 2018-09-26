import { APP } from '../constants';

// APP ACTIONS
const toggleSidebar = () => ({
  type: APP.TOGGLE_SIDEBAR,
});

const switchTheme = theme => ({
  type: APP.SWITCH_THEME,
  payload: {
    theme,
  },
});

export { toggleSidebar, switchTheme };
