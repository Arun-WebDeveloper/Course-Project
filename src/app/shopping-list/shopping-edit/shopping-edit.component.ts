import { ViewChild } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/core/services/shopping-list.service';
import { Ingredient } from 'src/app/export files/ingredients.export';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') slForm: NgForm;
  subscription: Subscription
  editMode = false
  editItemIndex: number;
  editItem: Ingredient
  constructor(private shoppingListService: ShoppingListService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editItemIndex = index;
      this.editItem = this.shoppingListService.getIngredient(index)
      this.slForm.setValue({
         name:this.editItem.name,
         amount:this.editItem.amount
      })
    })

  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editItemIndex,newIngredient)
    }else{
      this.shoppingListService.addIngredients(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset()
  }
  onClear(){
    this.editMode = false;
    this.slForm.reset()
  }
  onDelete(){
    this.onClear();
    this.shoppingListService.delete(this.editItemIndex)
  }
}
