import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Recipe } from '../../export files/recipe.export';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.recipes = this.recipeService.getRecipes();
  }
  newRecipe() {
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}