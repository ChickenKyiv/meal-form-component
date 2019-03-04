import React, { Component, Fragment } from 'react';
import _ from "lodash";

// import {
//   HeaderShowcase,
//   LoadMoreList
// } from '@groceristar/antd-showcase-components';
//
// import {
//   Card1,
//   Card2,
//   Card3,
//   Card4,
//   Card5,
//
//   ClearCardsExample,
//   DefaultCardsExample
// } from '@groceristar/cards-wrapper'



// import RecipeListExample from './components/RecipeList/RecipeList'




// import RecipeListExample from './components/RecipeList/RecipeList'


import "antd/dist/antd.css";
// import "./../styles.css";

// import {
//   getFirstFiveRecipes
// } from "../selector";


// const list = getFirstFiveRecipes()

class ExampleCardsView extends Component {

    state = {
      // data: getGroceryCollection(), //Did we need it here? i think we didn use all data from this method

    };

  render() {


    const list = this.props.list;

    return (
      <Fragment>
        <div className="main">



        </div>
      </Fragment>

    );
  }
}

export default ExampleCardsView;
