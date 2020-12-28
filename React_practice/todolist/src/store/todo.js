const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return state
        }
        case DELETE_TODO: {
            return state
        }
        default: {
            return state
        }
    }
}

export default todoReducer;