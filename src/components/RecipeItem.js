import { React, Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe, unFavoriteRecipe } from '../actions';

class RecipeItem extends Component {

    constructor() {
        super();

        this.state = {
            favourited: false,
        }

        
    }

    componentWillMount() {
        if (this.props.favoriteList) {
            this.setState({ favourited: true })
        }
    }

    handleOnclick(recipe) {
        
        if (this.state.favourited) {
            this.props.unFavoriteRecipe(recipe);
            this.setState({ favourited: false });
        }
        else {
            this.props.favoriteRecipe(recipe);
            this.setState({ favourited: true });
        }
        
    }

    render() {
        let { recipe } = this.props;
        
        return (
            <div className="recipe-item">
                <div
                    className={"star"}
                    onClick={() => this.handleOnclick(recipe)}>
                    { this.state.favourited ? <div>&#9733;</div>: <div>&#9734;</div>}
                </div>
                <div className="recipe-text">
                    <a href={recipe.url}>
                        <h4>{recipe.label}</h4>
                    </a>
                    <p>{recipe.ingredientLines}</p>
                </div>
                <img
                    src={recipe.image}
                    alt={recipe.label}
                    className="recipe-img"
                />
            </div>
        )
    }
}

export default connect(null, { favoriteRecipe, unFavoriteRecipe })(RecipeItem);