import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take } from "rxjs";
import { exhaustMap } from "rxjs";
import { map, tap } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { Recipe } from "../../export files/recipe.export";
import { RecipeService } from "./recipe.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }
    //saving data in firebase database
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-storing-recipes-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response => {
            console.log(response);
        })

    }
    //fetching data in firebase database
    fetchRecipes() {
        return this.http.get<Recipe[]>('https://ng-storing-recipes-default-rtdb.firebaseio.com/recipes.json'
        ).pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                })
            }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })

        )



    }
}