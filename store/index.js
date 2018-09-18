import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      theme: {
        '--txtColor': '#040000',
        '--bgc': '#fff'
      }
    },
    mutations: {
      changeWhite(state) {
        state.theme['--txtColor'] = '040000';
        state.theme['--bgc'] = '#fff';
      },
      changeDark(state) {
        state.theme['--txtColor'] = '#fff';
        state.theme['--bgc'] = '#040000';
      }
    }
  });
};

export default createStore;
