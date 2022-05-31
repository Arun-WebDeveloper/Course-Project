
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from 'src/app/export files/ingredients.export';
import { Recipe } from 'src/app/export files/recipe.export';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {

  /**recipes: Recipe[] = [
    new Recipe('Try one',
      'Simple Recipe',
      '../assets/Images/image1.jpg',
      [
        new Ingredient('Chicken', 4),
        new Ingredient('Tomatoes', 6)
      ]),
    new Recipe('Another one Spicy!',
      'Hot Sandwiches',
      'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg',
      [
        new Ingredient("Bread", 4),
        new Ingredient("Cucumber", 10)
      ])
  ];**/
  
  private recipes: Recipe[] = [];

  recipesChanged = new Subject<Recipe[]>();
  constructor(private shoppingListService: ShoppingListService) { }
  //fetching the deleted recipes from backend
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index]
  }
  addIngToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsMethod(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());

  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice())
  }
}
