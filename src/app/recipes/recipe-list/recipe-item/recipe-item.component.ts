import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Recipe } from 'src/app/export files/recipe.export';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() food: Recipe;
  @Input() index:number;
 // @Output() foodSelected = new EventEmitter<void>();
  //constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }
  //onSelected() {
    //this.foodSelected.emit();
   // this.recipeService.recipeSelected.emit(this.food);
//}
}
