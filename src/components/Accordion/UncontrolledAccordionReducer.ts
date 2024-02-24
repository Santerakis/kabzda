export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

type Action = {
    type: string
}

export type State = {
    collapsed: boolean
}

export const reducer = (state: State, action: Action) => {
    console.log()
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            const copyState = {...state, collapsed: !state.collapsed}
            console.log(copyState)
            return copyState
        default:
            throw new Error('Bad Action type')
        // return state
    }
}
