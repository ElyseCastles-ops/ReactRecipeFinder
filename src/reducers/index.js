import { combineReducers } from 'redux';
import { SET_RECIPES, FAVORITE, UNFAVORITE } from '../actions';

function recipes(state = [], action) {
    switch (action.type) {
        case SET_RECIPES:
            return action.items;
        default:
            return state;
    }
}

function favoriteRecipes(state = [], action) {
    switch (action.type) {
        case FAVORITE:
            state = [...state, action.recipe];
            return state;
        case UNFAVORITE:
            let idx = 0;
            for (let i = 0; i < state.length; i++) {
                if (state[i].label === action.recipe.label) {
                    idx = i;
                }
            }
            state.splice(idx, 1);
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ recipes, favoriteRecipes });

export default rootReducer;