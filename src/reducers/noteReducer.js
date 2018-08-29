import { ADD_TEXT, REM_TEXT } from './../actions/actions'

const initialState = [
    {
        type: ADD_TEXT,
        text:'hello world'
    },
    {
        type: ADD_TEXT,
        text:'tsup dog?'
    }
];

export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            return [
                ...state,
                {
                    type: action.type,
                    text: action.text
                }
            ]
        case REM_TEXT:
            const numIndex = Number(action.index);
            return [...state.slice(0, numIndex), ...state.slice(numIndex + 1)];
        default:
            return state
    }
}