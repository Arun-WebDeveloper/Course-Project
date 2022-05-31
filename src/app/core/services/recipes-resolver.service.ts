import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "src/app/export files/recipe.export";
import { DataStorageService } from "./data-storage.service";
import { RecipeService } from "./recipe.service";

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeService.getRecipes()
        if (recipes.length ===0 ){
            return this.dataStorageService.fetchRecipes()
        }else{
            return recipes;
        }
            
    }

}