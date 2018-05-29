import { applyMiddleware, createStore } from 'redux';

import reducers from './reducers.js';

const defaultStore = {
	members: {
		1: {
			id: 1,
			name: 'Flieder',
			fname: 'Marvin',
			birthday: '12.02.1958',
			email: 'mflieder@web.de',
		},
		2: {
			id: 2,
			name: 'Ducksch',
			fname: 'Fred',
			birthday: '21.12.1994',
			email: 'duckscher94@gmail.de',
		},
		3: {
			id: 3,
			name: 'Mergel',
			fname: 'Antonia',
			birthday: '03.05.1983',
			email: 'blume0305@gmx.de',
		}
  },
 };


export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware()
  );

  return store;
};

export const store = configureStore(defaultStore);