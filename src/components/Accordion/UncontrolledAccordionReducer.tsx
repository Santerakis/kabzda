export const TOGGLE_CONSTANT = 'TOGGLE-CONSTANT'

type Action = {
    type: string
}

export type State = {
    collapsed: boolean
}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            const copyState = {...state, collapsed: !state.collapsed}
            console.log(copyState)
            return copyState
        default:
            throw new Error('Bad Action type')
        // return state
    }
}
