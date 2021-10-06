import { React, Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearchRecipes extends Component {

    constructor() {
        super();

        this.state = {
            origin: '',
            dish: ''
        }
    }

    search() {
        let { origin, dish } = this.state;
        let app_id = 'f2778055';
        let app_key = '68fba6a247cb6a805d3f0f5c2a31f1eb';
        const url = `https://api.edamam.com/search?q=${dish}&app_id=${app_id}&app_key=${app_key}&cuisineType=${origin}`;
        console.log('origin', origin);
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => this.props.setRecipes(json.hits));

    }

    render() {
        return (
            <Form inline>
                <FormGroup>
                    <FormLabel>Origin</FormLabel>
                    {' '}
                    <FormControl
                        type="text"
                        placeholder="american"
                        onChange={event => this.setState({ origin: event.target.value})}
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <FormLabel>Dish</FormLabel>
                    {' '}
                    <FormControl
                        type="text"
                        placeholder="adobo"
                        onChange={event => this.setState({dish: event.target.value})}
                    />
                    {' '}
                    <Button onClick={ () => this.search()}>Submit</Button>
                </FormGroup>
            </Form>
        )
    }

}

export default connect(null, {setRecipes})(SearchRecipes);