import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This Is Simply A Test',
      'https://thecozycook.com/wp-content/uploads/2023/02/Homemade-Ramen-1-.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This Is Simply A Test',
      'https://thecozycook.com/wp-content/uploads/2023/02/Homemade-Ramen-1-.jpg'
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
