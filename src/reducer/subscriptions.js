import { LOAD_SUBSCRIPTION, SUCCESS, START, FAIL, SUB_REVIEWED } from '../constants'
import { Record, List } from 'immutable'
import newSub from '../data/new-sub'

const subRecord = Record({
    loading: false,
    loaded: false,
    error: false,
    entities: {},
    newSub: new List(newSub)
})

export default (state = new subRecord(), action) => {
    const { type, error, response, payload } = action

    switch (type) {
        case LOAD_SUBSCRIPTION + START:
            console.log('START')
            return state.set('loading', true)
                .set('loaded', false)

        case LOAD_SUBSCRIPTION + SUCCESS:
            console.log('SUCCES', response)
            return state.set('loading', false)
                .set('loaded', true)
                .set('entities', response)

        case LOAD_SUBSCRIPTION + FAIL:
            console.log('ERROR', error)
            return state.set('error', true)

        case SUB_REVIEWED:
            const { payload } = action
            const key = state.get('newSub').keyOf(payload)
            return state
                .set('newSub', state.get('newSub').delete(key))
    }

    return state
}