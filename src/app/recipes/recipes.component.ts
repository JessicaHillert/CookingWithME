import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {
  getTags,
  Recipe,
  recipes,
  DIETS_OCCASIONS,
  MAIN_COURSE_TYPE,
  MEAL_TYPE,
} from 'src/assets/recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  diets_occasions = new FormGroup({
    christmas: new FormControl(false),
    fodmap: new FormControl(false),
    quick_easy: new FormControl(false),
    vegan: new FormControl(false),
    me_diet: new FormControl(false),
    semi_me_diet: new FormControl(false),
  });

  meal_type = new FormGroup({
    breakfasts_snacks: new FormControl(false),
    deserts: new FormControl(false),
    drinks: new FormControl(false),
    main_courses: new FormControl(false),
    sauces: new FormControl(false),
    starters_sidedishes: new FormControl(false),
  });

  main_course_type = new FormGroup({
    legumes: new FormControl(false),
    pastas: new FormControl(false),
    pizza: new FormControl(false),
    rice: new FormControl(false),
    sallads: new FormControl(false),
    seafood: new FormControl(false),
    soups: new FormControl(false),
    stews: new FormControl(false),
    sushi: new FormControl(false),
    wok: new FormControl(false),
  });

  diets_occasions_empty = true;
  diets_occasions_selected: string[] = [];
  diets_occasions_both_me_filters = false;
  meal_type_empty = true;
  main_course_type_empty = true;

  recipes: BehaviorSubject<Array<Recipe>> = new BehaviorSubject(recipes);

  getTags = getTags;

  ngOnInit(): void {
    this.diets_occasions.valueChanges.subscribe((change) => {
      this.filterList(DIETS_OCCASIONS);
    });
    this.meal_type.valueChanges.subscribe((change) => {
      this.filterList(MEAL_TYPE);
    });
    this.main_course_type.valueChanges.subscribe((change) => {
      this.filterList(MAIN_COURSE_TYPE);
    });
  }

  filterList(change_type: any) {
    switch (change_type) {
      case DIETS_OCCASIONS:
        this.diets_occasions_selected = [];
        this.diets_occasions_empty = true;
        this.diets_occasions_both_me_filters = false;
        let me_filters = 0;
        Object.keys(this.diets_occasions.controls).forEach((control_name) => {
          if (this.diets_occasions.get(control_name)?.value === true) {
            this.diets_occasions_selected.push(control_name);
            this.diets_occasions_empty = false;
            const control_name_uppercase = control_name.toUpperCase();
            if (
              control_name_uppercase === DIETS_OCCASIONS.ME_DIET ||
              control_name_uppercase === DIETS_OCCASIONS.SEMI_ME_DIET
            ) {
              me_filters += 1;
            }
          }
        });
        if (me_filters === 2) {
          this.diets_occasions_both_me_filters = true;
        }
        break;
      case MEAL_TYPE:
        Object.values(this.meal_type.value).some((tag) => tag === true)
          ? (this.meal_type_empty = false)
          : (this.meal_type_empty = true);
        break;
      case MAIN_COURSE_TYPE:
        Object.values(this.main_course_type.value).some((tag) => tag === true)
          ? (this.main_course_type_empty = false)
          : (this.main_course_type_empty = true);
    }

    this.recipes.next(
      recipes.filter((recipe) => {
        /** Meal type */
        if (
          !this.meal_type_empty &&
          !this.meal_type.get(recipe.tags.meal_type.toLowerCase())?.value
        ) {
          return false;
        }

        /** Main course type */
        if (
          recipe.tags.main_course_type &&
          !this.main_course_type_empty &&
          !this.main_course_type.get(recipe.tags.main_course_type.toLowerCase())
            ?.value
        ) {
          return false;
        }

        /** Diet and occasion */
        if (
          // Only check if diets_occasions filter is used
          !this.diets_occasions_empty &&
          // Check if recipe has any diets_occasions tags
          recipe.tags.diets_occasions.length &&
          // Go through all the selected tags in filter
          !this.diets_occasions_selected.every((selected_tag) =>
            // Go through all the recipe's tags and find each selected tag
            {
              const selected_tag_uppercase = selected_tag.toUpperCase();
              if (
                this.diets_occasions_both_me_filters &&
                (selected_tag_uppercase === DIETS_OCCASIONS.ME_DIET ||
                  selected_tag_uppercase === DIETS_OCCASIONS.SEMI_ME_DIET)
              ) {
                return true;
              }
              return recipe.tags.diets_occasions.find(
                (recipe_tag) => recipe_tag === selected_tag_uppercase
              );
            }
          )
        ) {
          return false;
        }

        return true;
      })
    );
  }
}
