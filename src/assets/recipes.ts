import {
  Ingredient,
  INGREDIENT,
  MEASUREMENT,
  SECTION,
  toIngredient,
} from './ingredients';

export enum TAGS_MEAL_TYPE {
  BREAKFAST_SNACK,
  DESERT,
  DRINKS,
  MAIN_COURSE,
  SAUCE,
  STARTER_SIDEDISH,
}

export enum TAGS_MAIN_COURSE_TYPE {
  LEGUMES,
  PASTA,
  PIZZA,
  RICE,
  SALLAD,
  SEAFOOD,
  SOUP,
  STEW,
  SUSHI,
  WOK,
}

export enum TAGS_GENRE {
  CHRISTMAS,
  FODMAP,
  QUICK_EASY,
  VEGAN,
  ME_DIET,
}

export interface Recipe {
  id: number;
  time: number; // In minutes
  portions?: number;
  ingredients: Array<Ingredient>;
  steps: number;
  tags: {
    mealType: TAGS_MEAL_TYPE;
    mainCourseType?: TAGS_MAIN_COURSE_TYPE;
    genre: Array<TAGS_GENRE>;
  };
}

export interface Steps {
  steps: number;
  sections?: Array<{ section: SECTION; steps: number }>;
}

export const recipes: Array<Recipe> = [
  {
    /** CHIA PUDDING */
    id: 1,
    time: 10,
    portions: 1,
    ingredients: [
      toIngredient('1', MEASUREMENT.DL, [INGREDIENT.COCONUT_MILK]),
      toIngredient('1', MEASUREMENT.DL, [INGREDIENT.FROZEN_BERRIES]),
      toIngredient('1', MEASUREMENT.MSK, [INGREDIENT.CHIA_SEEDS]),
    ],
    steps: 3,
    tags: {
      mealType: TAGS_MEAL_TYPE.MAIN_COURSE,
      genre: [TAGS_GENRE.QUICK_EASY, TAGS_GENRE.VEGAN, TAGS_GENRE.FODMAP],
    },
  },
  {
    /** Cheesy spinage soup */
    id: 0,
    time: 25,
    portions: 4,
    ingredients: [
      toIngredient('1', MEASUREMENT.L, [INGREDIENT.WATER]),
      toIngredient('500', MEASUREMENT.GRAM, [INGREDIENT.FROZEN_SLICED_SPINAGE]),
      toIngredient('1', MEASUREMENT.DL, [INGREDIENT.NUTRITIONAL_YEAST]),
      toIngredient('1/2', MEASUREMENT.DL, [INGREDIENT.COCONUT_OIL]),
      toIngredient('1', MEASUREMENT.DL, [
        INGREDIENT.ALMOND_CREAM,
        INGREDIENT.COCONUT_MILK,
      ]),
      toIngredient('2', MEASUREMENT.MSK, [INGREDIENT.FROZEN_CHIVES]),
      toIngredient('2', MEASUREMENT.ST, [INGREDIENT.VEGETABLE_CUBES]),
      toIngredient('1/2', MEASUREMENT.TSK, [INGREDIENT.SALT]),
      toIngredient('1', MEASUREMENT.KRM, [INGREDIENT.BLACK_PEPPER]),
    ],
    steps: 2,
    tags: {
      mealType: TAGS_MEAL_TYPE.BREAKFAST_SNACK,
      mainCourseType: TAGS_MAIN_COURSE_TYPE.SOUP,
      genre: [TAGS_GENRE.QUICK_EASY, TAGS_GENRE.VEGAN, TAGS_GENRE.FODMAP],
    },
  },
];
