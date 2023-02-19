import { configureStore } from '@reduxjs/toolkit'
import { user } from './domain'

import { loadState, saveState } from './persistence'

export const store = configureStore({
	reducer: {
		user: user.reducer,
	},
	preloadedState: loadState(),
})

window.onbeforeunload = () => {
	saveState(store.getState())
}


export const SaveState = () => {
	saveState(store.getState())
}

export const User = user.module