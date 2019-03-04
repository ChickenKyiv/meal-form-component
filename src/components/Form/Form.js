import React, {
   Component
 } from 'react';

import {
  // Allergy,
  Attribute,
  // Course,
  // Cuisine,
  // Diets,
  // Holiday,
  Ingredient,
  MealDay,
  Description,
  ImageURL,
  MealName,
  Steps
} from '~/Fields'

class MealForm extends Component {

  render() {
    return(
        <div>

          <MealName    changeHandle={this.props.changeHandle} />
          <ImageURL    handleImage={this.props.handleImage} />

          {/*
          <Ingredient  handleIngredients={this.props.handleIngredients} />
          */}

          <Steps       handleSteps={this.props.handleSteps} />
          <Description handleDescription={this.props.handleDescription} />

          { /*
          <Attribute type='Diets' handleAttribute={this.props.handleDiet} />
          <Attribute type='Allergy' handleAttribute={this.props.handleAllergy} />
          <Attribute type='Course' handleAttribute={this.props.handleCourse} />
          <Attribute type='Cuisine' handleAttribute={this.props.handleCuisine} />
          */ }

          <MealDay   handleDays={this.props.handleDays} />

          <Attribute
            type='Holidays'
            handleAttribute={this.props.handleHoliday} />

        </div>
    );
  }
}

export { MealForm }
