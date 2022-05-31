
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Recipe } from 'src/app/export files/recipe.export';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  food: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //subscribe will allow to display the details while clicking
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.food = this.recipeService.getRecipe(this.id)
    })
  }
  onAddToShoppingList() {
    this.recipeService.addIngToShoppingList(this.food.ingredients)
    this.router.navigate(['/shopping-list'],{queryParams:{toShoppingList:'itemsInShopping'},fragment:'loadingToShoppingPage'})
  }
  newEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route })
    //alternate method:
    //this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'],{queryParams:{backToPage:'deletedRecipe'},fragment:'loadingBackToSelectRecipes'})
  }
  
}
