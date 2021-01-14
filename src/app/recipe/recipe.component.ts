import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getRecipe, getTags, Recipe } from 'src/assets/recipes';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent {
  recipe: Recipe;
  getTags = getTags;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.recipe = getRecipe(id);
  }
}
