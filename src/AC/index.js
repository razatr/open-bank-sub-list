import { LOAD_SUBSCRIPTION, SUB_REVIEWED } from "../constants"

export function loadSubscriptions() {
    return {
        type: LOAD_SUBSCRIPTION,
        callAPI: `/api/subscriptions`
    }
}

export function removeIdFromNewSub(id) {
    return {
        type: SUB_REVIEWED,
        payload: id
    }
}