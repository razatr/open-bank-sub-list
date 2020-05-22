import { START, SUCCESS, FAIL } from '../constants'

export default store => next => async action => {
    const { callAPI, type, ...rest } = action
    if (!callAPI) return next(action)
    next({
        type: type + START,
        ...rest
    })

    //dev only
    const res = await fetch(callAPI)

    const json = await res.json()
    next({ ...rest, type: type + SUCCESS, response: json })
}