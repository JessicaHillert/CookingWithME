import {
  Ingredient,
  INGREDIENT,
  MEASUREMENT,
  toIngredient,
} from './ingredients';

export enum MEAL_TYPE {
  BREAKFASTS_SNACKS = 'BREAKFASTS_SNACKS',
  DESERTS = 'DESERTS',
  DRINKS = 'DRINKS',
  MAIN_COURSES = 'MAIN_COURSES',
  SAUCES = 'SAUCES',
  STARTERS_SIDEDISHES = 'STARTERS_SIDEDISHES',
}

export enum MAIN_COURSE_TYPE {
  LEGUMES = 'LEGUMES',
  PASTAS = 'PASTAS',
  PIZZA = 'PIZZA',
  RICE = 'RICE',
  SALLADS = 'SALLADS',
  SEAFOOD = 'SEAFOOD',
  SOUPS = 'SOUPS',
  STEWS = 'STEWS',
  SUSHI = 'SUSHI',
  WOK = 'WOK',
}

export enum DIETS_OCCASIONS {
  CHRISTMAS = 'CHRISTMAS',
  FODMAP = 'FODMAP',
  QUICK_EASY = 'QUICK_EASY',
  VEGAN = 'VEGAN',
  ME_DIET = 'ME_DIET',
  SEMI_ME_DIET = 'SEMI_ME_DIET',
}

export enum SECTION {
  SERVING = 'SERVING',
  JAM = 'JAM',
  DOUGH = 'DOUGH',
  DRESSING = 'DRESSING',
  SAUCE = 'SAUCE',
}

export interface Recipe {
  id: string;
  time: number; // In minutes
  portions?: number;
  ingredients: {
    base?: Array<Ingredient>;
    dough?: Array<Ingredient>;
    dressing?: Array<Ingredient>;
    jam?: Array<Ingredient>;
    sauce?: Array<Ingredient>;
    to_serve?: Array<Ingredient>;
  };
  ovenTemp?: number; // In celsius
  steps: number;
  image_big?: any; // Any size
  image_small?: any; // Ratio 2:1 (w:h), ex. 200x100
  tags: Tags;
}

export interface Tags {
  meal_type: MEAL_TYPE;
  main_course_type?: MAIN_COURSE_TYPE;
  diets_occasions: Array<DIETS_OCCASIONS>;
}

export interface Steps {
  steps: number;
  sections?: Array<{ section: SECTION; steps: number }>;
}

export function getTags(tags: Tags): string[] {
  const list: string[] = [];
  tags.diets_occasions.forEach((tag: DIETS_OCCASIONS) =>
    list.push('TAGS.' + tag)
  );
  list.push('TAGS.' + tags.meal_type);
  if (tags.main_course_type) {
    list.push('TAGS.' + tags.main_course_type);
  }
  return list;
}

export function getRecipe(id: string): Recipe {
  return recipes.find((recipe) => recipe.id === id)!;
}

/** Breakfasts and snacks, 1 */
export const raspberry_chia_pudding: Recipe = {
  id: '1_1',
  time: 10,
  portions: 1,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.COCONUT_MILK], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.RASPBERRIES_FROZEN], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CHIA_SEEDS], '1', MEASUREMENT.MSK),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.BREAKFASTS_SNACKS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
};

export const strawberry_chia_pudding: Recipe = {
  id: '1_2',
  time: 10,
  portions: 1,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.COCONUT_MILK], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.STRAWBERRIES_FROZEN], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CHIA_SEEDS], '1', MEASUREMENT.MSK),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.BREAKFASTS_SNACKS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
};

export const very_berry_chia_pudding: Recipe = {
  id: '1_3',
  time: 10,
  portions: 2,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.COCONUT_MILK], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.RASPBERRIES_FROZEN], '2/3', MEASUREMENT.DL),
      toIngredient([INGREDIENT.STRAWBERRIES_FROZEN], '2/3', MEASUREMENT.DL),
      toIngredient([INGREDIENT.BLUEBERRIES_FROZEN], '2/3', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CHIA_SEEDS], '2', MEASUREMENT.MSK),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.BREAKFASTS_SNACKS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
};

/** Soups, 5 */
export const cheesy_spinage_soup: Recipe = {
  id: '5_1',
  time: 25,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WATER], '1', MEASUREMENT.L),
      toIngredient([INGREDIENT.FROZEN_SLICED_SPINAGE], '500', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.NUTRITIONAL_YEAST], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.COCONUT_OIL], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.COCONUT_MILK], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.FROZEN_CHIVES], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.VEGETABLE_CUBES], '2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.SALT], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.BLACK_PEPPER], '1', MEASUREMENT.KRM),
    ],
  },
  steps: 1,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SOUPS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.ME_DIET,
    ],
  },
};

/** Rice dishes, 7 */
export const oven_baked_root_vegetagles_with_tahini_sauce: Recipe = {
  id: '7_4',
  image_big:
    '/assets/images/oven_baked_root_vegetagles_with_tahini_sauce_big.jpg',
  image_small:
    '/assets/images/oven_baked_root_vegetagles_with_tahini_sauce_small.jpg',
  time: 50,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WHITE_RICE], '4', MEASUREMENT.PORTIONS),
      toIngredient([INGREDIENT.ROOT_VEGETABLES], '1', MEASUREMENT.KG),
      toIngredient(
        [INGREDIENT.OLIVE_OIL, INGREDIENT.CANOLA_OIL],
        '1',
        MEASUREMENT.MSK
      ),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
      toIngredient([INGREDIENT.CURLY_KALE], undefined, undefined, true),
    ],
    sauce: [
      toIngredient([INGREDIENT.TAHINI], '3/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LEMON_JUICE], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.WATER], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.CARAWAY], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT]),
    ],
  },
  steps: 4,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.RICE,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
};

export const recipes: Array<Recipe> = [
  /** Breakfasts and snacks, 1 */
  raspberry_chia_pudding,
  strawberry_chia_pudding,
  very_berry_chia_pudding,

  /** Soups, 5 */
  cheesy_spinage_soup,

  /** Rice dishes, 7 */
  oven_baked_root_vegetagles_with_tahini_sauce,
];
