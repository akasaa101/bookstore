const _reducers = {
    SET_TOKEN: (state, { payload } ) => {
        const token = { payload }
        state.token = token.payload
    }
}
export default _reducers