import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "src/app/export files/ingredients.export";


export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Mangoes', 50),
        new Ingredient('Grapes', 30)
    ];

    constructor() { }

    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());

    }
    addIngredientsMethod(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice())
        //for(let ingredient of ingredients){
        //    this.addIngredients(ingredient);
        //}
    }
}