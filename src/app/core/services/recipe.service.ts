
import { Injectable } from '@angular/core';

import { Ingredient } from 'src/app/export files/ingredients.export';
import { Recipe } from 'src/app/export files/recipe.export';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {

  recipes: Recipe[] = [
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
  ];
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index]
  }
  addIngToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsMethod(ingredients);
  }
}
