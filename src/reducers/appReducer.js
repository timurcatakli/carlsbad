import update from 'immutability-helper';
import { themeConfig } from '../settings';
import { APP } from '../constants';

const appSwitchTheme = (state, { payload }) => update(state, { theme: { $set: payload.theme } });

const initialState = {
  sidebarCollapsed: false,
  theme: themeConfig.theme,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed,
      };
    case APP.SWITCH_THEME:
      return appSwitchTheme(state, action);
    default:
      return state;
  }
};
