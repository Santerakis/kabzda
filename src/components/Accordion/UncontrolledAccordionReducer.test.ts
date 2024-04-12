import {reducer, State, TOGGLE_COLLAPSED} from "./UncontrolledAccordionReducer";

test('collapsed should be true', () => {
    //data
    //action
    //expectation

    /////////
    const state: State = {
        collapsed: false
    }
    /////////
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    /////////
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    const state: State = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error because action type is incorrect', () => {
    const state: State = {
        collapsed: true
    }

    expect(() => {reducer(state, {type: 'FAKE_TYPE'})}).toThrow()
})

//.toThrowError()