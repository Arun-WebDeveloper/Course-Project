import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../core/services/shopping-list.service';
import { Ingredient } from '../export files/ingredients.export';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription=this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => { this.ingredients = ingredients }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index)
  }
}
