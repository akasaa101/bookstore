import user from '../domain/user/initial'

const _loadState = () => {
	try {
		const state = JSON.parse(localStorage.getItem('state'))
		state.user = { ...user, ...state.user }
		return state
	} catch (err) {
		return undefined
	}
}
export default _loadState