import { createSlice } from '@reduxjs/toolkit'

import initialState from './initial'
import reducers from './reducers'
import selectors from './selectors'

const _user = createSlice({ name: 'user', initialState, reducers })
_user.selectors = selectors

_user.module = {
    selectors,
    actions: {
        setToken: _user.actions.SET_TOKEN,
    }
}

export default _user