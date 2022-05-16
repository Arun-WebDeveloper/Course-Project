import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../core/services/recipe.service';
import { Recipe } from '../export files/recipe.export';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  //providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
  }

}
