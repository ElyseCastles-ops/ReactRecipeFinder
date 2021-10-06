export const SET_RECIPES = 'SET_RECIPES';

export const FAVORITE = 'FAVORITE';
export const UNFAVORITE = 'UNFAVORITE';

export function setRecipes(items) {
    return {
        type: SET_RECIPES,
        items
    }
}

export function favoriteRecipe(recipe) {
    return {
        type: FAVORITE,
        recipe
    }
}

export function unFavoriteRecipe(recipe) {
    return {
        type: UNFAVORITE,
        recipe
    }
}