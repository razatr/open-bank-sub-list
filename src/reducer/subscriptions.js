import {LOAD_SUBSCRIPTION, SUCCESS, START, FAIL } from '../constants'
import {Record} from 'immutable'

const subRecord = Record({
    loading: false,
    loaded: false,
    error: false,
    entities: {}
})

export default (state = new subRecord(), action) => {
    const { type, error, response } = action

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
    }

    return state
}