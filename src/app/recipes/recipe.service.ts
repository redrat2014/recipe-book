import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Chicken and prosciutto parmiggiana', 
  //     'Try our favourite new way to eat chicken parmigiana', 
  //     'https://img.taste.com.au/4-rDZU7z/w643-h428-cfill-q90/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg',
  //     [
  //       new Ingredient('Chicken', 1),
  //       new Ingredient('Prosciutto', 2),
  //       new Ingredient('Lamb', 1),
  //     ]),
  //   new Recipe(
  //     'Greek lamb meatball salad', 
  //     'Throw together a Greek-style salad that packs flavour', 
  //     'https://img.taste.com.au/JhSGbWiB/w643-h428-cfill-q90/taste/2016/11/greek-lamb-meatball-salad-73779-1.jpeg', 
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('Salad', 1),
  //       new Ingredient('Tomatoes', 2),
  //     ]),
  //   new Recipe(
  //     'Greek salad with smoked chicken', 
  //     'Slices of protein-packed chicken are a healthy.', 
  //     'https://img.taste.com.au/M29ZGDua/w643-h428-cfill-q90/taste/2016/11/greek-salad-with-smoked-chicken-and-eggplant-32671-1.jpeg', 
  //     [
  //       new Ingredient('Chicken', 1),
  //       new Ingredient('Tomatoes', 10),
  //       new Ingredient('Onion', 1),
  //     ])
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
