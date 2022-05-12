import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../core/services/shopping-list.service';
import { Ingredient } from '../export files/ingredients.export';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[])=>{this.ingredients = ingredients}
    );
  }
}