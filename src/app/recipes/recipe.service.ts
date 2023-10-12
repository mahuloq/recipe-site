import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This Is Simply A Test',
      'https://thecozycook.com/wp-content/uploads/2023/02/Homemade-Ramen-1-.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Another Test Recipe',
      'This Is Simply A Test',
      'https://thecozycook.com/wp-content/uploads/2023/02/Homemade-Ramen-1-.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
