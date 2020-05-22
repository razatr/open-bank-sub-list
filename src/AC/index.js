import { LOAD_SUBSCRIPTION } from "../constants"

export function loadSubscriptions() {
    return {
        type: LOAD_SUBSCRIPTION,
        callAPI: `/api/subscriptions`
    }
}
