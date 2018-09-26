import config, { getCurrentTheme } from './config';
// import actions from './actions';

import { APP } from '../constants';

const initialState = {
  sidebarCollapsed: false,
  layoutTheme: getCurrentTheme('layoutTheme', config.layoutTheme.defaultTheme || 'themedefault'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed,
      };
    case APP.SWITCH_THEME:
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed,
      };
    default:
      return state;
  }
};
