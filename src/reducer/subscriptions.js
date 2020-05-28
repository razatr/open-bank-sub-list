import { LOAD_SUBSCRIPTION, SUCCESS, START, FAIL, SUB_REVIEWED } from '../constants'
import { Record, List } from 'immutable'
import newSub from '../data/new-sub'
import subscriptions from '../data/subscriptions'

const subRecord = Record({
    loading: false,
    loaded: false,
    error: false,
    entities: subscriptions,
    newSub: new List(newSub)
})

export default (state = new subRecord(), action) => {
    const { type, response, payload } = action

    switch (type) {
        /*case LOAD_SUBSCRIPTION + START:
            return state.set('loading', true)
                .set('loaded', false)

        case LOAD_SUBSCRIPTION + SUCCESS:
            return state.set('loading', false)
                .set('loaded', true)
                .set('entities', response)

        case LOAD_SUBSCRIPTION + FAIL:
            return state.set('error', true)*/

        case SUB_REVIEWED:
            const key = state.get('newSub').keyOf(payload)
            return state
                .set('newSub', state.get('newSub').delete(key))
    }

    return state
}