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
  STARTERS = 'STARTERS',
  SIDEDISHES = 'SIDEDISHES',
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

export enum SOURCE_AMOUNT {
  ORIGINAL_FROM = 'ORIGINAL_FROM',
  INSPIRED_FROM = 'INSPIRED_FROM',
  ORIGINAL = 'ORIGINAL',
  FAMILY_RECIPE = 'FAMILY_RECIPE',
  SOURCE_LOST = 'SOURCE_LOST',
}

export enum SOURCE_TYPE {
  BOOK = 'BOOK',
  WEBSITE = 'WEBSITE',
  RESTAURANT = 'RESTAURANT',
}

export interface Recipe {
  id: string;
  time: number; // In minutes
  portions?: number;
  ingredients: {
    base?: Array<Ingredient>;
    dough?: Array<Ingredient>;
    marinade?: Array<Ingredient>;
    dressing?: Array<Ingredient>;
    jam?: Array<Ingredient>;
    sauce?: Array<Ingredient>;
    frosting?: Array<Ingredient>;
    to_serve?: Array<Ingredient>;
  };
  steps: number;
  image_big?: any; // Any size
  image_small?: any; // Ratio 2:1 (w:h), ex. 200x100
  tags: Tags;
  source: Source;
}

export interface Tags {
  meal_type: MEAL_TYPE;
  main_course_type?: MAIN_COURSE_TYPE;
  diets_occasions: Array<DIETS_OCCASIONS>;
}

export interface Source {
  amount: SOURCE_AMOUNT;
  type?: SOURCE_TYPE;
  name?: string;
  link?: string;
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

/** ---------- RECIPES ---------- */

/**
 * 1. Breakfasts and snacks
 */
const raspberry_chia_pudding: Recipe = {
  id: '1_1_1',
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
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const strawberry_chia_pudding: Recipe = {
  id: '1_1_2',
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
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const very_berry_chia_pudding: Recipe = {
  id: '1_1_3',
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
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const chia_porrige_with_blueberries: Recipe = {
  id: '1_2',
  time: 20,
  portions: 1,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.CHIA_SEEDS], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.BUCKWHEAT_FLAKES], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.PSYLLIUM_HUSK], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.COCONUT_MILK], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.SALT], '1', MEASUREMENT.KRM),
      toIngredient([INGREDIENT.BLUEBERRIES], '1/4', MEASUREMENT.DL),
      toIngredient([INGREDIENT.BANANA_RIPE], '1/2', MEASUREMENT.ST, true),
      toIngredient([INGREDIENT.MAPLE_SYRUP], '1/2', MEASUREMENT.MSK, true),
      toIngredient([INGREDIENT.PEANUT_BUTTER], '1', MEASUREMENT.MSK, true),
      toIngredient([INGREDIENT.CINNAMON], '1', MEASUREMENT.KRM, true),
    ],
  },
  steps: 6,
  tags: {
    meal_type: MEAL_TYPE.BREAKFASTS_SNACKS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Annies fodmap',
    link: 'http://anniesfodmap.for.me/2016/februari/chiapudding-chiagrot.html',
  },
};

const buckwheat_porrige: Recipe = {
  id: '1_3',
  time: 15,
  portions: 2,
  ingredients: {
    base: [
      toIngredient(
        [INGREDIENT.BUCKWHEAT_FLAKES, INGREDIENT.BUCKWHEAT_GROATS],
        '1',
        MEASUREMENT.DL
      ),
      toIngredient([INGREDIENT.PSYLLIUM_HUSK], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SUNFLOWER_SEEDS], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SALT], '1', MEASUREMENT.KRM),
      toIngredient([INGREDIENT.CINNAMON], '1', MEASUREMENT.KRM),
      toIngredient([INGREDIENT.WATER], '2 1/2', MEASUREMENT.DL),
    ],
    to_serve: [
      toIngredient([INGREDIENT.FRUIT], undefined, undefined, true),
      toIngredient([INGREDIENT.BERRIES], undefined, undefined, true),
      toIngredient([INGREDIENT.NUTS], undefined, undefined, true),
      toIngredient([INGREDIENT.SEEDS], undefined, undefined, true),
      toIngredient([INGREDIENT.VEGAN_MILKS], undefined, undefined, true),
    ],
  },
  steps: 2,
  tags: {
    meal_type: MEAL_TYPE.BREAKFASTS_SNACKS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'ICA',
    link: 'https://www.ica.se/recept/bovetegrot-gluten-och-mjolkfri-716042/',
  },
};

const crackers_with_olives_and_thyme: Recipe = {
  id: '1_4',
  time: 30,
  ingredients: {
    base: [
      toIngredient(
        [INGREDIENT.BUCKWHEAT_FLOUR],
        '2 1/2',
        MEASUREMENT.DL,
        false,
        100
      ),
      toIngredient([INGREDIENT.ALMOND_FLOUR], '1 1/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.SALT], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.ROSEMARY], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.THYME], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.BAKING_POWDER], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.NUTRITIONAL_YEAST], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.OLIVE_OIL], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.WATER], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.OLIVES], '10', MEASUREMENT.ST),
    ],
  },
  steps: 8,
  tags: {
    meal_type: MEAL_TYPE.BREAKFASTS_SNACKS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Lazy Cat Kitchen',
    link: 'https://www.lazycatkitchen.com/buckwheat-crackers-olives-herbs',
  },
};

const chocolate_granola: Recipe = {
  id: '1_5',
  time: 100,
  portions: 8,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.QUINOA_FLAKES], '1/2', MEASUREMENT.L),
      toIngredient([INGREDIENT.QUINOA_PUFFS], '2 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.SUNFLOWER_SEEDS], '2 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.PUMPKIN_SEEDS], '2 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.COCONUT_SHREDDED], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CACAO], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WHITE_SUGAR], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LIGHT_SYRUP], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.VANILLA_EXTRACT], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.CANOLA_OIL], '3/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.SALT], '1', MEASUREMENT.KRM),
    ],
  },
  steps: 5,
  tags: {
    meal_type: MEAL_TYPE.BREAKFASTS_SNACKS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'A little Bit Yummy',
    link:
      'https://alittlebityummy.com/recipe/en-us/low-fodmap-dark-chocolate-granola-recipe',
  },
};

const berry_squares: Recipe = {
  id: '1_6',
  time: 40,
  portions: 8,
  ingredients: {
    jam: [
      toIngredient([INGREDIENT.BERRIES_FROZEN], '350', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.LIGHT_SYRUP], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.CHIA_SEEDS], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.VANILLA_EXTRACT], '1/2', MEASUREMENT.TSK),
    ],
    dough: [
      toIngredient([INGREDIENT.CHIA_SEEDS], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.WATER], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.COCONUT_OIL], '4/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LIGHT_SYRUP], '4/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.VANILLA_EXTRACT], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.BUCKWHEAT_FLOUR], '70', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.BUCKWHEAT_FLAKES], '250', MEASUREMENT.GRAM),
      toIngredient(
        [INGREDIENT.ALMOND_FLOUR, INGREDIENT.OAT_FLOUR],
        '100',
        MEASUREMENT.GRAM
      ),
      toIngredient([INGREDIENT.BAKING_POWDER], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT], '1/2', MEASUREMENT.TSK),
    ],
  },
  steps: 8,
  tags: {
    meal_type: MEAL_TYPE.BREAKFASTS_SNACKS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Oh She Glows',
    link:
      'https://ohsheglows.com/2014/09/09/raspberry-chia-seed-jam-oat-crumble-squares-vegan-gluten-free',
  },
};

/** 2. Starters */
const thai_soup_with_carrot_and_coconut_milk: Recipe = {
  id: '2_1',
  time: 30,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.CARROTS], '3', MEASUREMENT.ST),
      toIngredient([INGREDIENT.WATER], '1', MEASUREMENT.L),
      toIngredient([INGREDIENT.COCONUT_MILK], '3', MEASUREMENT.DL),
      toIngredient([INGREDIENT.GINGER_POWDER], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.COCONUT_AMINOS], '3', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SAMBAL_OELEK], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT]),
    ],
  },
  steps: 4,
  tags: {
    meal_type: MEAL_TYPE.STARTERS,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const root_vegetables_soup: Recipe = {
  id: '2_2',
  time: 30,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.CARROTS], '8', MEASUREMENT.ST),
      toIngredient([INGREDIENT.PARSNIPS], '4', MEASUREMENT.ST),
      toIngredient([INGREDIENT.GINGER_POWDER], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.WATER], '1', MEASUREMENT.L),
      toIngredient([INGREDIENT.VEGETABLE_CUBES], '2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.COCONUT_MILK], '3/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WHITE_WINE_VINEGAR], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.TURMERIC], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.RED_PEPPER_POWDER], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
  },
  steps: 4,
  tags: {
    meal_type: MEAL_TYPE.STARTERS,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const fried_asparagus_with_balsamic_vinegar: Recipe = {
  id: '2_3',
  time: 20,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.ASPARAGUS], '250', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.OLIVE_OIL], '2', MEASUREMENT.MSK),
    ],
    dressing: [
      toIngredient([INGREDIENT.BALSAMIC_VINEGAR], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.OLIVE_OIL], '3', MEASUREMENT.MSK),
    ],
    to_serve: [toIngredient([INGREDIENT.SEA_SALT], '1', MEASUREMENT.MSK)],
  },
  steps: 4,
  tags: {
    meal_type: MEAL_TYPE.STARTERS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Zeta',
    link:
      'https://www.zeta.nu/recept/stekt-sparris-med-balsamvinager-och-parmesan',
  },
};

const crostini_with_tapenade: Recipe = {
  id: '2_4',
  time: 10,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.GLUTEN_FREE_CROSTINI]),
      toIngredient([INGREDIENT.TAPENADE]),
    ],
  },
  steps: 1,
  tags: {
    meal_type: MEAL_TYPE.STARTERS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL,
  },
};

const crostini_with_sundried_tomatoes: Recipe = {
  id: '2_5',
  time: 10,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.GLUTEN_FREE_CROSTINI]),
      toIngredient([INGREDIENT.SUNDRIED_TOMATOES]),
      toIngredient([INGREDIENT.BASIL]),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
  },
  steps: 1,
  tags: {
    meal_type: MEAL_TYPE.STARTERS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL,
  },
};

const crostini_with_seaweed_caviar: Recipe = {
  id: '2_6',
  time: 10,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.GLUTEN_FREE_CROSTINI]),
      toIngredient([INGREDIENT.SEAWEED_CAVIAR]),
    ],
  },
  steps: 1,
  tags: {
    meal_type: MEAL_TYPE.STARTERS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL,
  },
};

/** 3. Sauces */
const condensed_balsamic_vinegar: Recipe = {
  id: '3_1',
  time: 20,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.BALSAMIC_VINEGAR], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.MAPLE_SYRUP], '1/4', MEASUREMENT.DL),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.SAUCES,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const coriander_sauce: Recipe = {
  id: '3_2',
  time: 30,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.SUNFLOWER_SEEDS], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LIME_JUICE], '1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.CARAWAY], '1', MEASUREMENT.KRM),
      toIngredient([INGREDIENT.CHILI_POWDER], '1', MEASUREMENT.KRM),
      toIngredient([INGREDIENT.LIGHT_SYRUP], '1', MEASUREMENT.TSK),
      toIngredient(
        [INGREDIENT.CORIANDER, INGREDIENT.CORIANDER_FROZEN],
        '25',
        MEASUREMENT.GRAM
      ),
      toIngredient([INGREDIENT.SALT], '1', MEASUREMENT.KRM),
      toIngredient([INGREDIENT.BLACK_PEPPER], '1', MEASUREMENT.KRM),
      toIngredient([INGREDIENT.WATER]),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.SAUCES,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Lazy Cat Kitchen',
    link:
      'https://www.lazycatkitchen.com/vegan-roasted-vegetables-coriander-cream',
  },
};

const chives_dip: Recipe = {
  id: '3_3',
  time: 10,
  portions: 2,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.VEGAN_SOUR_CREAM], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.GARLIC_POWDER], '2', MEASUREMENT.TSK),
      toIngredient(
        [INGREDIENT.ITALIAN_DRESSING_SEASONING],
        '2',
        MEASUREMENT.MSK
      ),
      toIngredient([INGREDIENT.CHIVES_FROZEN], '1/2', MEASUREMENT.DL),
    ],
  },
  steps: 1,
  tags: {
    meal_type: MEAL_TYPE.SAUCES,
    diets_occasions: [DIETS_OCCASIONS.QUICK_EASY, DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

/** 4. Side dishes */
const coconut_rice: Recipe = {
  id: '4_1',
  time: 30,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WHITE_RICE], '4', MEASUREMENT.PORTIONS),
      toIngredient([INGREDIENT.COCONUT_OIL], '1', MEASUREMENT.DL),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.SIDEDISHES,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL,
  },
};

const root_vegetables_mush: Recipe = {
  id: '4_2',
  time: 30,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.RUTABAGAS], '500', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.CARROTS], '500', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.VEGETABLE_CUBES], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.VEGAN_BUTTER], '50', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.SIDEDISHES,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Kokaihop',
    link: 'https://www.kokaihop.se/recept/rotmos-utan-potatis',
  },
};

const aubergine_bacon: Recipe = {
  id: '4_3',
  time: 60,
  portions: 2,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.AUBERGINES], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.CANOLA_OIL], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.COCONUT_AMINOS], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.RED_PEPPER_POWDER], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.LIQUID_SMOKE], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.MAPLE_SYRUP], '2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
  },
  steps: 6,
  tags: {
    meal_type: MEAL_TYPE.SIDEDISHES,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Delish',
    link:
      'https://www.delish.com/cooking/recipe-ideas/recipes/a55771/eggplant-bacon-recipe',
  },
};

const almond_bacon: Recipe = {
  id: '4_4',
  time: 40,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.TOMATO_PASTE], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.CANOLA_OIL], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.LIQUID_SMOKE], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.LIGHT_SYRUP], '1 1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.COCONUT_AMINOS], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.ALMOND_FLAKES], '150', MEASUREMENT.GRAM),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.SIDEDISHES,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Lazy Cat Kitchen',
    link: 'https://www.lazycatkitchen.com/vegan-caesar-salad',
  },
};

const lemon_zuccini: Recipe = {
  id: '4_5',
  time: 30,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.ZUCCHINIS], '2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.CANOLA_OIL], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.BASIL_DRIED], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.OREGANO_DRIED], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.THYME_DRIED], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.LEMON_JUICE], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.BLACK_PEPPER], '1', MEASUREMENT.KRM),
    ],
  },
  steps: 5,
  tags: {
    meal_type: MEAL_TYPE.SIDEDISHES,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'The Vegan 8',
    link: 'https://thevegan8.com/lemon-italian-herbed-grilled-zucchini',
  },
};

/*const hummus: Recipe = {
  id: '4_6',
  time: 40,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.CHICKPEAS], '285', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.GARLIC_CLOVES], '2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.LEMON_JUICE_ST], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.OLIVE_OIL], '3', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.TAHINI], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CUMIN], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT], '1/2', MEASUREMENT.TSK),
    ],
  },
  steps: 2,
  tags: {
    meal_type: MEAL_TYPE.SIDEDISHES,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.FODMAP],
  },
};*/

const dragon_fruit_salad: Recipe = {
  id: '4_7',
  time: 30,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.DRAGON_FRUIT], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.MANDARIN_ORANGES], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.KIWIS], '2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.BLUEBERRIES], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LIME_JUICE], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SALT], '1', MEASUREMENT.KRM),
    ],
  },
  steps: 2,
  tags: {
    meal_type: MEAL_TYPE.SIDEDISHES,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Wander Spice',
    link: 'https://wanderspice.com/dragon-fruit-salad',
  },
};

const asian_salad: Recipe = {
  id: '4_8',
  time: 15,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.LETTUCE]),
      toIngredient([INGREDIENT.CUCUMBERS]),
      toIngredient([INGREDIENT.CARROTS]),
      toIngredient([INGREDIENT.LETTUCE]),
    ],
    dressing: [
      toIngredient([INGREDIENT.SESAME_OIL]),
      toIngredient([INGREDIENT.COCONUT_AMINOS]),
      toIngredient([INGREDIENT.SALT]),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.SIDEDISHES,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.RESTAURANT,
    name: 'Aiyara',
    link:
      'https://www.facebook.com/pages/category/Thai-Restaurant/Aiyara-Restaurang-597027423743420',
  },
};

const crispy_sesame_cauliflower: Recipe = {
  id: '4_9',
  time: 60,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.CAULIFLOWERS], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.WHITE_RICE_FLOUR], '2 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WATER], '2 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.GARLIC_POWDER], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SESAME_SEEDS], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
    sauce: [
      toIngredient([INGREDIENT.COCONUT_AMINOS], '1 1/4', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LIGHT_SYRUP], '3/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.SESAME_SEEDS], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.GARLIC_POWDER], '1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SESAME_OIL], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.RICE_WINE_VINEGAR], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.TOMATO_PASTE], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.CHILI_PASTE], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.GINGER_POWDER], '1', MEASUREMENT.TSK),
    ],
  },
  steps: 8,
  tags: {
    meal_type: MEAL_TYPE.SIDEDISHES,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'The First Mess',
    link:
      'https://thefirstmess.com/2018/11/28/vegan-grain-free-sticky-crispy-sesame-cauliflower/',
  },
};

const mushroom_bruschetta: Recipe = {
  id: '4_10',
  time: 30,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.OVEN_BAKED_BREAD_SLICES], '4', MEASUREMENT.ST),
      toIngredient([INGREDIENT.CHAMPIGNONS], '250', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.OLIVE_OIL], '2 1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SHALLOT], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.PARSLEY], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
  },
  steps: 6,
  tags: {
    meal_type: MEAL_TYPE.SIDEDISHES,
    diets_occasions: [DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Zeta',
    link: 'https://www.zeta.nu/recept/svampbruschetta',
  },
};

const italian_cauliflower_rice: Recipe = {
  id: '4_12',
  time: 15,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.CAULIFLOWER_RICE]),
      toIngredient([INGREDIENT.ITALIAN_DRESSING_SEASONING]),
      toIngredient([INGREDIENT.OLIVE_OIL]),
    ],
  },
  steps: 2,
  tags: {
    meal_type: MEAL_TYPE.SIDEDISHES,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL,
  },
};

const oven_baked_root_vegetagles_with_coriander_sauce: Recipe = {
  id: '4_13',
  time: 40,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.CARROTS], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.PARSNIPS], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.ZUCCHINI], '200', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.OLIVE_OIL]),
      toIngredient([INGREDIENT.THYME_DRIED]),
      toIngredient([INGREDIENT.ROSEMARY_DRIED]),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
  },
  steps: 5,
  tags: {
    meal_type: MEAL_TYPE.SIDEDISHES,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Lazy Cat Kitchen',
    link:
      'https://www.lazycatkitchen.com/vegan-roasted-vegetables-coriander-cream',
  },
};

/** 5. Soups */
const cheesy_spinage_soup: Recipe = {
  id: '5_1',
  time: 25,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WATER], '1', MEASUREMENT.L),
      toIngredient([INGREDIENT.SPINAGE_FROZEN_SLICED], '500', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.NUTRITIONAL_YEAST], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.COCONUT_OIL], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.COCONUT_MILK], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CHIVES_FROZEN], '2', MEASUREMENT.MSK),
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
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Maghälsa',
    link: 'https://www.maghalsa.se/low-fodmap-spenatsoppa',
  },
};

/**  6. Pasta dishes and sallads */
const simple_pasta_pesto: Recipe = {
  id: '6_1',
  time: 25,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.BUCKWHEAT_PASTA], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.ZUCCHINI], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.CANOLA_OIL], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.VEGAN_PESTO_BASIL], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.NUTRITIONAL_YEAST], '1/2', MEASUREMENT.DL),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.PASTAS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL,
  },
};

const pasta_pesto_with_kale_and_hemp_seeds: Recipe = {
  id: '6_2',
  time: 40,
  portions: 3,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.BUCKWHEAT_PASTA], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.ZUCCHINI], '1', MEASUREMENT.ST, true),
    ],
    sauce: [
      toIngredient([INGREDIENT.HEMP_SEEDS], '70', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.CURLY_KALE], '100', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.BASIL], '25', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.LEMON_ZEST_ST], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.LEMON_JUICE_ST], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.NUTRITIONAL_YEAST], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WATER], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.OLIVE_OIL], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.SALT], '3/4', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.BLACK_PEPPER], '1', MEASUREMENT.KRM),
      toIngredient([INGREDIENT.BUCKWHEAT_PASTA], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.ZUCCHINI], '1', MEASUREMENT.ST),
    ],
  },
  steps: 4,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.PASTAS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Lazy Cat Kitchen',
    link: 'https://www.lazycatkitchen.com/vegan-pesto-pasta-kale',
  },
};

const pasta_with_herb_sauce_and_mushrooms: Recipe = {
  id: '6_3',
  time: 40,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.CHAMPIGNONS], '500', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.COCONUT_OIL], '3', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.GARLIC_POWDER], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.THYME_DRIED], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.OREGANO_DRIED], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SALT], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
      toIngredient([INGREDIENT.COCONUT_MILK], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.NUTRITIONAL_YEAST], '3/4', MEASUREMENT.DL),
      toIngredient(
        [INGREDIENT.PARSLEY, INGREDIENT.CORIANDER],
        '1',
        MEASUREMENT.MSK
      ),
      {
        ingredientAlternatives: [INGREDIENT.BUCKWHEAT_PASTA],
        amount: '400',
        measurement: MEASUREMENT.GRAM,
        link: 'TODO: Buckwheat link',
      },
    ],
  },
  steps: 6,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.PASTAS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: "It doesn't taste like chicken",
    link:
      'https://itdoesnttastelikechicken.com/creamy-coconut-garlic-mushrooms',
  },
};

const sun_pasta: Recipe = {
  id: '6_4',
  time: 20,
  portions: 4,
  ingredients: {
    base: [
      {
        ingredientAlternatives: [INGREDIENT.BUCKWHEAT_PASTA],
        amount: '400',
        measurement: MEASUREMENT.GRAM,
        link: 'TODO: Buckwheat link',
      },
      {
        ingredientAlternatives: [INGREDIENT.BUCKWHEAT_PASTA],
        amount: '400',
        measurement: MEASUREMENT.GRAM,
        link: 'TODO: Buckwheat link',
      },
      toIngredient([INGREDIENT.WATER], '2 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.NUTRITIONAL_YEAST], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.OLIVE_OIL], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.ONION_POWDER], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.GARLIC_POWDER], '1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.OREGANO_DRIED], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.BLACK_PEPPER], '2', MEASUREMENT.KRM),
      toIngredient([INGREDIENT.CHILI_POWDER], '2', MEASUREMENT.KRM),
      toIngredient([INGREDIENT.SUNDRIED_TOMATOES], '300', MEASUREMENT.GRAM),
    ],
  },
  steps: 5,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.PASTAS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.SEMI_ME_DIET],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'AMY LE CREATIONS',
    link: 'https://amylecreations.com/creamy-spicy-sun-dried-tomato-pasta/',
  },
};

const salad_with_hemp_seed_sauce: Recipe = {
  id: '6_6',
  time: 30,
  portions: 4,
  ingredients: {
    base: [
      {
        ingredientAlternatives: [INGREDIENT.BUCKWHEAT_PASTA],
        amount: '400',
        measurement: MEASUREMENT.GRAM,
        link: 'TODO: Buckwheat link',
      },
      toIngredient(
        [INGREDIENT.BABY_SPINAGE, INGREDIENT.LETTUCE, INGREDIENT.ARUGULAS],
        '130',
        MEASUREMENT.GRAM
      ),
      toIngredient([INGREDIENT.BABY_SPINAGE], '120', MEASUREMENT.GRAM),
      toIngredient(
        [
          INGREDIENT.CUCUMBERS,
          INGREDIENT.CARROTS,
          INGREDIENT.SUNDRIED_TOMATOES,
          INGREDIENT.POMEGRANATE_SEEDS,
          INGREDIENT.MUNG_BEAN_SPROUTS,
          INGREDIENT.CHAMPIGNONS,
          INGREDIENT.BERRIES,
          INGREDIENT.SEEDS,
        ],
        undefined,
        undefined,
        true
      ),
    ],
    dressing: [
      toIngredient([INGREDIENT.HEMP_SEEDS], '1 1/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WATER], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.NUTRITIONAL_YEAST], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.LEMON_JUICE], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SALT], '1/2', MEASUREMENT.TSK),
    ],
  },
  steps: 2,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.PASTAS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const caesar_salad: Recipe = {
  id: '6_7',
  time: 40,
  portions: 4,
  ingredients: {
    base: [
      {
        ingredientAlternatives: [INGREDIENT.ALMOND_BACON],
        amount: 'ALMOND_BACON',
        measurement: MEASUREMENT.BATCH,
        link: 'TODO: Almond bacon link',
      },
      {
        ingredientAlternatives: [INGREDIENT.BUCKWHEAT_PASTA],
        amount: '400',
        measurement: MEASUREMENT.GRAM,
        link: 'TODO: Buckwheat link',
      },
      toIngredient(
        [INGREDIENT.BABY_SPINAGE, INGREDIENT.LETTUCE, INGREDIENT.ARUGULAS],
        '130',
        MEASUREMENT.GRAM
      ),
      toIngredient([INGREDIENT.COCKTAIL_TOMATOES], undefined, undefined, true),
    ],
    dressing: [
      toIngredient([INGREDIENT.HEMP_SEEDS], '45', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.NUTRITIONAL_YEAST], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.LEMON_JUICE], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.THYME], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.OLIVE_OIL], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.LIGHT_SYRUP], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.MUSTARD], '1 1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.CAPERS], '2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.VEGAN_MILK], '4/5', MEASUREMENT.ST),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.PASTAS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Lazy Cat Kitchen',
    link: 'https://www.lazycatkitchen.com/vegan-caesar-salad',
  },
};

/** 7. Rice dishes */
const rice_with_pulled_vegme_and_green_peas: Recipe = {
  id: '7_1',
  time: 25,
  portions: 4,
  ingredients: {
    base: [
      toIngredient(
        [INGREDIENT.VEGME_PULLED_ORIGINAL],
        '300',
        MEASUREMENT.GRAM,
        false,
        undefined,
        'TODO: VegMe Pulled Original link'
      ),
      toIngredient([INGREDIENT.GREEN_PEAS_FROZEN], '500', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.WHITE_RICE], '4', MEASUREMENT.PORTIONS),
      toIngredient([INGREDIENT.COCONUT_AMINOS]),
      toIngredient([INGREDIENT.GARLIC_POWDER]),
      toIngredient([INGREDIENT.SALT]),
    ],
  },
  steps: 4,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.RICE,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL,
  },
};

const oven_baked_root_vegetagles_with_tahini_sauce: Recipe = {
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
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Oh My Veggies',
    link: 'https://ohmyveggies.com/wild-rice-root-vegetable-bowls',
  },
};

const vegetable_teriyaki: Recipe = {
  id: '7_5',
  time: 40,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WHITE_RICE], '4', MEASUREMENT.PORTIONS),
      toIngredient([INGREDIENT.CUCUMBERS], '1/2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.MUNG_BEAN_SPROUTS], '180', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.CARROTS], '4', MEASUREMENT.ST),
      toIngredient([INGREDIENT.COCONUT_AMINOS]),
    ],
    sauce: [
      toIngredient([INGREDIENT.COCONUT_AMINOS], '1 4/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.MAPLE_SYRUP], '3/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WATER], '3/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.GINGER_POWDER], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.CHIVES_FROZEN], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SESAME_SEEDS], '1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.CAYENNE_PEPPER], '1/2', MEASUREMENT.KRM),
      toIngredient([INGREDIENT.WHITE_RICE_FLOUR], '1', MEASUREMENT.MSK),
    ],
  },
  steps: 5,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.RICE,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'The Vegan 8',
    link: 'https://thevegan8.com/sesame-ginger-teriyaki-sauce',
  },
};

/**
 * 8. Wok
 * Not added for now because we never eat this anymore.
 */

/** 9. Pizza */
const pizza_with_pesto_and_sundried_tomatoes: Recipe = {
  id: '9_1',
  time: 60,
  portions: 2,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.VEGAN_PESTO_BASIL]),
      toIngredient([INGREDIENT.BABY_SPINAGE]),
      toIngredient([INGREDIENT.SUNDRIED_TOMATOES]),
      toIngredient([INGREDIENT.NUTRITIONAL_YEAST]),
    ],
    dough: [
      toIngredient([INGREDIENT.YEAST], '12 1/2', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.WATER], '1 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.OLIVE_OIL], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SALT], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.WHEAT_FLOUR], '3 1/2', MEASUREMENT.DL),
    ],
    sauce: [
      toIngredient([INGREDIENT.TOMATOES_CRUSHED], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
  },
  steps: 9,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.PIZZA,
    diets_occasions: [DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Spisa',
    link: 'https://www.spisa.nu/recept/ugnspizza-med-mozzarella-och-pesto-1',
  },
};

/** 10. Sushi */
const sushi_rice: Recipe = {
  id: '10_1',
  time: 90,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.SUSHI_RICE], '500', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.WATER], '6', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WHITE_WINE_VINEGAR], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.WHITE_SUGAR], '2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SESAME_SEEDS], undefined, undefined, true),
    ],
  },
  steps: 13,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SUSHI,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.BOOK,
    name: 'TODO: name',
  },
};

const spicy_sushi_sauce: Recipe = {
  id: '10_2',
  time: 10,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.VEGAN_MAYONNAISE], '3/4', MEASUREMENT.DL),
      toIngredient([INGREDIENT.SRIRACHA_SAUCE], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.LEMON_JUICE], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SESAME_OIL], '1/2', MEASUREMENT.TSK),
    ],
  },
  steps: 1,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SUSHI,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Simply Whisked',
    link: 'https://www.simplywhisked.com/spicy-sushi-sauce/',
  },
};

const japanese_tuna_stuffing: Recipe = {
  id: '10_3',
  time: 10,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.TUNA_CANNED], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.VEGAN_MAYONNAISE], '1 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WASABI], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.CAYENNE_PEPPER], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.COCONUT_AMINOS], '2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.BLACK_PEPPER], '1', MEASUREMENT.TSK),
    ],
  },
  steps: 1,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SUSHI,
    diets_occasions: [DIETS_OCCASIONS.QUICK_EASY, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const green_maki: Recipe = {
  id: '10_4',
  time: 100,
  ingredients: {
    base: [
      toIngredient(
        [INGREDIENT.SUSHI_RICE_DONE],
        undefined,
        undefined,
        false,
        undefined,
        'TODO: Sushi rice link'
      ),
      toIngredient([INGREDIENT.AVOCADOS]),
      toIngredient([INGREDIENT.CUCUMBERS]),
      toIngredient([INGREDIENT.SEAWEED_SALAD]),
      toIngredient([INGREDIENT.NORI]),
    ],
  },
  steps: 5,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SUSHI,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL,
  },
};

const sun_maki: Recipe = {
  id: '10_5',
  time: 100,
  ingredients: {
    base: [
      toIngredient(
        [INGREDIENT.SUSHI_RICE_DONE],
        undefined,
        undefined,
        false,
        undefined,
        'TODO: Sushi rice link'
      ),
      toIngredient([INGREDIENT.SUNDRIED_TOMATOES]),
      toIngredient([INGREDIENT.CUCUMBERS]),
      toIngredient([INGREDIENT.SEAWEED_SALAD]),
      toIngredient([INGREDIENT.NORI]),
    ],
  },
  steps: 5,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SUSHI,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.RESTAURANT,
    name: 'Sushi Yama',
    link: 'https://www.sushiyama.se/',
  },
};

const mushroom_maki: Recipe = {
  id: '10_6',
  time: 100,
  ingredients: {
    base: [
      toIngredient(
        [INGREDIENT.SUSHI_RICE_DONE],
        undefined,
        undefined,
        false,
        undefined,
        'TODO: Sushi rice link'
      ),
      toIngredient([INGREDIENT.CHAMPIGNONS]),
      toIngredient([INGREDIENT.VEGAN_BUTTER]),
      toIngredient([INGREDIENT.CUCUMBERS]),
      toIngredient([INGREDIENT.LETTUCE]),
      toIngredient([INGREDIENT.NORI]),
    ],
  },
  steps: 8,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SUSHI,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL,
  },
};

const japanese_tuna_stuffing_maki: Recipe = {
  id: '10_8',
  time: 100,
  ingredients: {
    base: [
      toIngredient(
        [INGREDIENT.SUSHI_RICE_DONE],
        undefined,
        undefined,
        false,
        undefined,
        'TODO: Sushi rice link'
      ),
      toIngredient(
        [INGREDIENT.JAPANESE_TUNA_STUFFING],
        undefined,
        undefined,
        false,
        undefined,
        'TODO: Japanese tuna stuffing rice link'
      ),
      toIngredient([INGREDIENT.CUCUMBERS]),
      toIngredient([INGREDIENT.SCALLIONS_GREEN_PARTS]),
      toIngredient([INGREDIENT.NORI]),
    ],
  },
  steps: 5,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SUSHI,
    diets_occasions: [DIETS_OCCASIONS.FODMAP, DIETS_OCCASIONS.SEMI_ME_DIET],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const seaweed_nigiri: Recipe = {
  id: '10_9',
  time: 100,
  ingredients: {
    base: [
      toIngredient(
        [INGREDIENT.SUSHI_RICE_DONE],
        undefined,
        undefined,
        false,
        undefined,
        'TODO: Sushi rice link'
      ),
      toIngredient([INGREDIENT.SEAWEED_SALAD]),
      toIngredient([INGREDIENT.NORI]),
    ],
  },
  steps: 2,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SUSHI,
    diets_occasions: [
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.RESTAURANT,
    name: 'Ichiban Sushibar',
    link: 'https://www.ichibansushi.se',
  },
};

const avocado_nigiri: Recipe = {
  id: '10_10',
  time: 100,
  ingredients: {
    base: [
      toIngredient(
        [INGREDIENT.SUSHI_RICE_DONE],
        undefined,
        undefined,
        false,
        undefined,
        'TODO: Sushi rice link'
      ),
      toIngredient([INGREDIENT.AVOCADOS]),
      toIngredient([INGREDIENT.NORI]),
    ],
  },
  steps: 2,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SUSHI,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.RESTAURANT,
    name: 'Ichiban Sushibar',
    link: 'https://www.ichibansushi.se',
  },
};

/** 11. Seafood */
const snacks_with_tuna_and_mustard: Recipe = {
  id: '11_1',
  time: 5,
  ingredients: {
    base: [
      toIngredient([
        INGREDIENT.PUFFED_RICE_CAKES,
        INGREDIENT.PUFFED_BUCKWHEAT_CAKES,
      ]),
      toIngredient([INGREDIENT.TUNA_CANNED]),
      toIngredient([INGREDIENT.MUSTARD]),
      toIngredient([INGREDIENT.CUCUMBERS], undefined, undefined, true),
      toIngredient([INGREDIENT.SALT], undefined, undefined, true),
      toIngredient([INGREDIENT.BLACK_PEPPER], undefined, undefined, true),
    ],
  },
  steps: 1,
  tags: {
    meal_type: MEAL_TYPE.BREAKFASTS_SNACKS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL,
  },
};

const tuna_mush: Recipe = {
  id: '11_2',
  time: 20,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.TUNA_CANNED], '150', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.VEGAN_MAYONNAISE], '1 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.PICKLED_CUCUMBER], '1 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.SRIRACHA_SAUCE], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.SIDEDISHES,
    diets_occasions: [DIETS_OCCASIONS.QUICK_EASY, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const orange_and_oregano_marinated_tuna: Recipe = {
  id: '11_3',
  time: 60,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WHITE_RICE], '4', MEASUREMENT.PORTIONS),
      toIngredient([INGREDIENT.TUNA_FILLETS], '4', MEASUREMENT.ST),
      toIngredient([INGREDIENT.COCONUT_AMINOS], '3/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.ORANGE_JUICE], '3/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CANOLA_OIL], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.PARSLEY_DRIED], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.OREGANO_DRIED], '1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.BLACK_PEPPER], '1/2', MEASUREMENT.TSK),
    ],
    marinade: [],
  },
  steps: 7,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SEAFOOD,
    diets_occasions: [DIETS_OCCASIONS.FODMAP, DIETS_OCCASIONS.SEMI_ME_DIET],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const asian_marinated_tuna: Recipe = {
  id: '11_4',
  time: 60,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WHITE_RICE], '4', MEASUREMENT.PORTIONS),
      toIngredient([INGREDIENT.TUNA_FILLETS], '4', MEASUREMENT.ST),
      toIngredient([INGREDIENT.COCONUT_AMINOS], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.CANOLA_OIL], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.GINGER_POWDER], '2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.WATER], '4', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.LIME_ZEST_ST], '1/2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.LIME_JUICE_ST], '1/2', MEASUREMENT.ST),
    ],
  },
  steps: 7,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SEAFOOD,
    diets_occasions: [DIETS_OCCASIONS.FODMAP, DIETS_OCCASIONS.SEMI_ME_DIET],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const wasabi_sauce: Recipe = {
  id: '11_5',
  time: 15,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.COCONUT_AMINOS], '3/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.ORANGE_JUICE], '3/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CANOLA_OIL], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.LEMON_ZEST], '2', MEASUREMENT.TSK, true),
      toIngredient([INGREDIENT.LEMON_JUICE], '1', MEASUREMENT.MSK, true),
      toIngredient(
        [INGREDIENT.SCALLIONS_GREEN_PARTS],
        '2',
        MEASUREMENT.MSK,
        true
      ),
      toIngredient([INGREDIENT.RICE_WINE_VINEGAR], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.WHITE_SUGAR], '2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.LIGHT_SYRUP], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.WASABI], '2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.GINGER_POWDER], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT], '1/2', MEASUREMENT.TSK),
    ],
  },
  steps: 2,
  tags: {
    meal_type: MEAL_TYPE.SAUCES,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const cod_with_coconut_and_lime: Recipe = {
  id: '11_9',
  time: 40,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WHITE_RICE], '4', MEASUREMENT.PORTIONS),
      toIngredient([INGREDIENT.COD], '450', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.COCONUT_SHREDDED], '3/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.COCONUT_OIL], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SCALLIONS_GREEN_PARTS], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CHILI_FLAKES], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.LIME_ZEST_ST], '1', MEASUREMENT.ST),
    ],
  },
  steps: 6,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SEAFOOD,
    diets_occasions: [DIETS_OCCASIONS.FODMAP, DIETS_OCCASIONS.ME_DIET],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'A Little Bit Yummy',
    link:
      'https://alittlebityummy.com/recipe/en-us/low-fodmap-chilli-coconut-crusted-fish-with-salad',
  },
};

const tomato_cod_soup: Recipe = {
  id: '11_10',
  time: 25,
  portions: 3,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.COD], '600', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.WATER], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CARROTS], '2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.ZUCCHINI], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.BAMBOO_SHOOTS], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.COCONUT_MILK], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.TOMATOES_CRUSHED], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.GINGER_POWDER], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SAMBAL_OELEK], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.CHILI_POWDER]),
      toIngredient([INGREDIENT.CORIANDER_DRIED]),
      toIngredient([INGREDIENT.SALT]),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SEAFOOD,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const tuna_noodle_stew: Recipe = {
  id: '11_12',
  time: 25,
  portions: 3,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.RICE_NOODLES], '4', MEASUREMENT.PORTIONS),
      toIngredient([INGREDIENT.TUNA_CANNED], '200', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.ZUCCHINIS], '2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.GINGER_POWDER], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.RED_CURRY_PASTE], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.COCONUT_MILK], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.LIME_JUICE_ST], '2', MEASUREMENT.ST),
    ],
  },
  steps: 8,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SEAFOOD,
    diets_occasions: [DIETS_OCCASIONS.QUICK_EASY, DIETS_OCCASIONS.SEMI_ME_DIET],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const creamy_coconut_cod_soup: Recipe = {
  id: '11_13',
  time: 25,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.RICE_NOODLES], '4', MEASUREMENT.PORTIONS),
      toIngredient([INGREDIENT.COD], '600', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.CARROTS], '3', MEASUREMENT.ST),
      toIngredient([INGREDIENT.ZUCCHINIS], '2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.COCONUT_MILK], '800', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.WATER], '8', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LIME_JUICE_ST], '2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.GINGER_POWDER], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SAMBAL_OELEK], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.COCONUT_AMINOS], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.RED_PEPPER_POWDER], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SEAFOOD,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const curry_soup_with_cod: Recipe = {
  id: '11_14',
  time: 25,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WHITE_RICE], '4', MEASUREMENT.PORTIONS),
      toIngredient([INGREDIENT.COD], '600', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.COCONUT_MILK], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.SAMBAL_OELEK], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.CURRY], '1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.TOMATO_PASTE], '2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT], '1/2', MEASUREMENT.TSK),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SEAFOOD,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'ICA',
    link: 'https://www.ica.se/recept/fiskcurry-med-kokosmjolk-och-lime-721882',
  },
};

const shrimp_pasta_with_lemon_and_chili: Recipe = {
  id: '11_15',
  time: 20,
  portions: 4,
  ingredients: {
    base: [
      {
        ingredientAlternatives: [INGREDIENT.BUCKWHEAT_PASTA],
        amount: '400',
        measurement: MEASUREMENT.GRAM,
        link: 'TODO: Buckwheat link',
      },
      toIngredient([INGREDIENT.SHRIMP], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.LEMON_JUICE_ST], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.OLIVE_OIL], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.CHILI_POWDER], '1', MEASUREMENT.KRM),
    ],
  },
  steps: 5,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SEAFOOD,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL,
  },
};

const mussels_tomato_pasta: Recipe = {
  id: '11_16',
  time: 20,
  portions: 4,
  ingredients: {
    base: [
      {
        ingredientAlternatives: [INGREDIENT.BUCKWHEAT_PASTA],
        amount: '400',
        measurement: MEASUREMENT.GRAM,
        link: 'TODO: Buckwheat link',
      },
      toIngredient([INGREDIENT.MUSSELS], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.TOMATOES_CRUSHED], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.OLIVE_OIL], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.WHITE_SUGAR], '1', MEASUREMENT.KRM),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
  },
  steps: 2,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SEAFOOD,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL,
  },
};

/** 12. Legumes */
const curry_lentils_soup: Recipe = {
  id: '12_1',
  time: 15,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.CARROTS], '4', MEASUREMENT.ST),
      toIngredient([INGREDIENT.LENTILS_RED], '4', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WATER], '1 1/2', MEASUREMENT.L),
      toIngredient([INGREDIENT.VEGETABLE_CUBES], '3', MEASUREMENT.ST),
      toIngredient([INGREDIENT.CURRY], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.ONION_POWDER], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.OLIVE_OIL], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.BAY_LEAF], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
  },
  steps: 4,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.LEGUMES,
    diets_occasions: [DIETS_OCCASIONS.QUICK_EASY, DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const curry_lentils_stew_with_coconut_and_lime: Recipe = {
  id: '12_2',
  time: 25,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WHITE_RICE], '4', MEASUREMENT.PORTIONS),
      toIngredient([INGREDIENT.LENTILS_RED], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WATER], '1/2', MEASUREMENT.L),
      toIngredient([INGREDIENT.COCONUT_MILK], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.VEGETABLE_CUBES], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.CURRY], '1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.ONION_POWDER], '1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.GINGER_POWDER], '1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.COCONUT_OIL], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.GARLIC_POWDER], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SAMBAL_OELEK], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.TOMATO_PASTE], '2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SPINAGE_FROZEN], '50', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.CHERRY_TOMATOES], '250', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
  },
  steps: 4,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.LEGUMES,
    diets_occasions: [DIETS_OCCASIONS.QUICK_EASY, DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'ICA',
    link: 'https://www.ica.se/recept/linscurry-med-kokosmjolk-och-lime-720274',
  },
};

const creamy_coconut_lentils_soup: Recipe = {
  id: '12_3',
  time: 25,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.LENTILS_RED], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WATER], '1', MEASUREMENT.L),
      toIngredient([INGREDIENT.COCONUT_MILK], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.GARLIC_POWDER], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.GINGER_POWDER], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.RED_CURRY_PASTE], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SAMBAL_OELEK], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.ONION_POWDER], '1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.COCONUT_OIL], '1', MEASUREMENT.MSK),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.LEGUMES,
    diets_occasions: [DIETS_OCCASIONS.QUICK_EASY, DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const tomato_lentils_soup: Recipe = {
  id: '12_4',
  time: 25,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.LENTILS_RED], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WATER], '1', MEASUREMENT.L),
      toIngredient([INGREDIENT.VEGETABLE_CUBES], '2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.TOMATOES_CRUSHED], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.ONION_POWDER], '1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.RED_WINE_VINEGAR], '1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.OLIVE_OIL], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.RED_PEPPER_POWDER], '2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.GARLIC_POWDER], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.THYME_DRIED], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.BASIL_DRIED], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.BAY_LEAF], '2', MEASUREMENT.ST),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.LEGUMES,
    diets_occasions: [DIETS_OCCASIONS.QUICK_EASY, DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'ICA',
    link: 'https://www.ica.se/recept/linssoppa-med-tomat-541439',
  },
};

const swedish_yellow_pea_soup: Recipe = {
  id: '12_5',
  time: 480,
  portions: 6,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.YELLOW_PEAS_DRIED], '500', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.WATER], '1 1/2', MEASUREMENT.L),
      toIngredient([INGREDIENT.VEGETABLE_CUBES], '2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.ONION_POWDER], '2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.THYME_DRIED], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.MARJORAM_DRIED], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.BAY_LEAF], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
  },
  steps: 5,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.LEGUMES,
    diets_occasions: [DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const black_bean_salad: Recipe = {
  id: '12_6',
  time: 20,
  portions: 2,
  ingredients: {
    base: [
      {
        ingredientAlternatives: [INGREDIENT.BUCKWHEAT_PASTA],
        amount: '200',
        measurement: MEASUREMENT.GRAM,
        link: 'TODO: Buckwheat link',
      },
      toIngredient([INGREDIENT.BLACK_BEANS], '230', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.CORN_KERNELS], '140', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.BABY_SPINAGE], '50', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.SUNDRIED_TOMATOES], '100', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.NUTRITIONAL_YEAST], '1/2', MEASUREMENT.DL),
      toIngredient(
        [INGREDIENT.ITALIAN_DRESSING_SEASONING],
        '1',
        MEASUREMENT.MSK
      ),
      toIngredient([INGREDIENT.GARLIC_POWDER], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.OLIVE_OIL], '2', MEASUREMENT.MSK),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.LEGUMES,
    diets_occasions: [DIETS_OCCASIONS.QUICK_EASY, DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL,
  },
};

const beluga_patties: Recipe = {
  id: '12_7',
  time: 60,
  portions: 2,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.BELUGA_LENTILS], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WATER], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.VEGETABLE_POWDER], '3/4', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.CARROTS], '50', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.ONION_POWDER], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.GARLIC_POWDER], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SUNDRIED_TOMATOES], '3', MEASUREMENT.ST),
      toIngredient([INGREDIENT.POTATOES], '100', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.DIJON_MUSTARD], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT]),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
      toIngredient([INGREDIENT.WHITE_RICE], '2', MEASUREMENT.PORTIONS),
    ],
  },
  steps: 9,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.LEGUMES,
    diets_occasions: [DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Kung Markatta',
    link:
      'https://www.kungmarkatta.se/recept/middagar/kristinas-linsbiffar-med-belugalinser',
  },
};

const coriander_beans: Recipe = {
  id: '12_8',
  time: 20,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.BLACK_BEANS], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.CORIANDER_DRIED], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.OLIVE_OIL], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.LIME_ZEST_ST], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.LIME_JUICE_ST], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.SALT, '2', MEASUREMENT.KRM]),
      toIngredient([INGREDIENT.BLACK_PEPPER, '1', MEASUREMENT.KRM]),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.SIDEDISHES,
    diets_occasions: [DIETS_OCCASIONS.QUICK_EASY, DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.BOOK,
    name: 'TODO: name',
  },
};

const tacos_with_crispy_tahini_balls: Recipe = {
  id: '12_9',
  time: 40,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.ONION], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.GARLIC_CLOVES], '2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.WHITE_BEANS], '800', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.TAHINI], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CORN_STARCH], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CUMIN], '1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.PARSLEY], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SALT], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.BLACK_PEPPER]),
    ],
    dressing: [
      toIngredient([INGREDIENT.TAHINI], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WATER], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.OLIVE_OIL], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LEMON_JUICE], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.GARLIC_CLOVE], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.SALT], '1', MEASUREMENT.KRM),
    ],
    to_serve: [
      toIngredient([INGREDIENT.RED_CABBAGE], '400', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.LETTUCE]),
      toIngredient([INGREDIENT.CUCUMBERS]),
      toIngredient([INGREDIENT.CARROTS]),
      toIngredient([INGREDIENT.TACO_SHELLS, INGREDIENT.NACHOS]),
    ],
  },
  steps: 8,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.LEGUMES,
    diets_occasions: [DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Köket',
    link: 'https://www.koket.se/tacos-med-frasiga-tahinibonbollar',
  },
};

/** 13. Deserts */
const fried_pineapple: Recipe = {
  id: '13_1',
  time: 20,
  portions: 2,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.PINEAPPLE], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.VEGAN_BUTTER], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.MAPLE_SYRUP], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.CINNAMON], '1', MEASUREMENT.TSK),
    ],
  },
  steps: 4,
  tags: {
    meal_type: MEAL_TYPE.DESERTS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Cooktoria',
    link: 'https://cooktoria.com/cinnamon-fried-pineapple/',
  },
};

const blueberry_cupcakes: Recipe = {
  id: '13_3',
  time: 30,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.BUCKWHEAT_FLOUR], '2 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.ALMOND_FLOUR], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.PSYLLIUM_HUSK], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.BAKING_POWDER], '2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.SALT], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.LIGHT_SYRUP], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.VANILLA_POWDER], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.ALMOND_MILK], '4/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.BLUEBERRIES], '1 1/2', MEASUREMENT.DL),
    ],
  },
  steps: 5,
  tags: {
    meal_type: MEAL_TYPE.DESERTS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'The Vegan 8',
    link: 'https://thevegan8.com/vegan-blueberry-muffins',
  },
};

const chocolate_cupcakes: Recipe = {
  id: '13_4',
  time: 25,
  ingredients: {
    base: [
      toIngredient(
        [INGREDIENT.VEGAN_BUTTER, INGREDIENT.COCONUT_OIL],
        '100',
        MEASUREMENT.GRAM
      ),
      toIngredient([INGREDIENT.CHIA_SEEDS], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.WATER], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WHITE_SUGAR], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.BUCKWHEAT_FLOUR], '1', MEASUREMENT.DL),
      toIngredient(
        [INGREDIENT.ALMOND_FLOUR, INGREDIENT.COCONUT_FLOUR],
        '1',
        MEASUREMENT.DL
      ),
      toIngredient([INGREDIENT.CACAO], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.VANILLA_POWDER], '1', MEASUREMENT.KRM),
      toIngredient([INGREDIENT.BAKING_POWDER], '1', MEASUREMENT.TSK),
    ],
  },
  steps: 6,
  tags: {
    meal_type: MEAL_TYPE.DESERTS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.BOOK,
    name: '"Sju sorters kakor"',
  },
};

const chocolate_sauce: Recipe = {
  id: '13_5',
  time: 25,
  portions: 2,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WHITE_SUGAR], '4/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CACAO], '3/5', MEASUREMENT.DL),
      toIngredient(
        [INGREDIENT.ALMOND_MILK, INGREDIENT.COCONUT_MILK],
        '3 1/2',
        MEASUREMENT.DL
      ),
      toIngredient([INGREDIENT.COCONUT_OIL], '3', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.VANILLA_EXTRACT], '1', MEASUREMENT.TSK),
    ],
  },
  steps: 4,
  tags: {
    meal_type: MEAL_TYPE.DESERTS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'A Little Bit Yummy',
    link:
      'https://alittlebityummy.com/recipe/en-us/low-fodmap-chocolate-coconut-fudge-sauce',
  },
};

const swedish_chocolate_balls: Recipe = {
  id: '13_7',
  time: 40,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.VEGAN_BUTTER], '100', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.WHITE_SUGAR], '3/4', MEASUREMENT.DL),
      toIngredient([INGREDIENT.VANILLA_SUGAR], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.CACAO], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.OAT_FLAKES], '3', MEASUREMENT.DL),
      toIngredient([INGREDIENT.COFFEE], '2', MEASUREMENT.MSK, true),
      toIngredient([INGREDIENT.PEARL_SUGAR, INGREDIENT.COCONUT_SHREDDED]),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.DESERTS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.BOOK,
    name: '"Sju sorters kakor"',
  },
};

const cherry_cheese_cake: Recipe = {
  id: '13_8',
  time: 210,
  portions: 10,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.DIGESTIVE_BISQUITS], '350', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.VEGAN_BUTTER], '200', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.VEGAN_CREAM_CHEESE], '300', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.POWDERED_SUGAR], '3/4', MEASUREMENT.DL),
      toIngredient([INGREDIENT.VANILLA_SUGAR], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.LEMON_JUICE], '1/2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.VEGAN_WHIPPED_CREAM], '3', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CHERRY_MARMALADE], '300', MEASUREMENT.GRAM),
    ],
  },
  steps: 8,
  tags: {
    meal_type: MEAL_TYPE.DESERTS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Köket',
    link:
      'https://www.koket.se/nigella_lawson/efterratter_och_godis/agg_och_mejeri/cheesecake_med_korsbar/',
  },
};

const choco_coco_squares: Recipe = {
  id: '13_9',
  time: 60,
  portions: 10,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.VEGAN_BUTTER], '150', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.CHIA_SEEDS], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.WATER], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WHITE_SUGAR], '2 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.VANILLA_SUGAR], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.CACAO], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.WHEAT_FLOUR], '1 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.BUCKWHEAT_FLOUR], '1 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.COCONUT_FLOUR], '1 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.BAKING_POWDER], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.COCONUT_MILK], '1 1/2', MEASUREMENT.DL),
    ],
    frosting: [
      toIngredient([INGREDIENT.VEGAN_BUTTER], '75', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.CACAO], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.COFFEE], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.VANILLA_SUGAR], '2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.POWDERED_SUGAR], '2 1/2', MEASUREMENT.DL),
    ],
  },
  steps: 9,
  tags: {
    meal_type: MEAL_TYPE.DESERTS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.BOOK,
    name: 'Sju sorters kakor',
  },
};

/**
 * 14. Drinks
 */
const lavender_lemonade: Recipe = {
  id: '14_1',
  time: 150,
  portions: 4,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WATER], '2 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WHITE_SUGAR], '3/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LAVENDER_DRIED], '1 1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.LIGHT_SYRUP], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.LEMON_JUICE_ST], '2', MEASUREMENT.ST),
    ],
  },
  steps: 5,
  tags: {
    meal_type: MEAL_TYPE.DRINKS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.FODMAP],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'The cookie rookie',
    link: 'https://www.thecookierookie.com/lavender-lemonade',
  },
};

const ginger_lemonade: Recipe = {
  id: '14_2',
  time: 5,
  portions: 1,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WATER], '3', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LEMON_JUICE_ST], '1', MEASUREMENT.ST),
      toIngredient(
        [
          INGREDIENT.WHITE_SUGAR,
          INGREDIENT.LIGHT_SYRUP,
          INGREDIENT.MAPLE_SYRUP,
        ],
        '1/2',
        MEASUREMENT.MSK
      ),
      toIngredient([INGREDIENT.GINGER_POWDER], '1', MEASUREMENT.TSK),
    ],
  },
  steps: 1,
  tags: {
    meal_type: MEAL_TYPE.DRINKS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.SOURCE_LOST,
  },
};

const mojito: Recipe = {
  id: '14_5',
  time: 15,
  portions: 1,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.LIME_JUICE_ST], '1/2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.MINT_LEAVES], '6', MEASUREMENT.ST),
      toIngredient([INGREDIENT.WHITE_SUGAR], '1/4', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WATER], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.SUGAR_SODA], '3/4', MEASUREMENT.DL),
      toIngredient([INGREDIENT.VODKA], undefined, undefined, true),
    ],
  },
  steps: 2,
  tags: {
    meal_type: MEAL_TYPE.DRINKS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Tasteline',
    link: 'https://www.tasteline.com/recept/mojito/',
  },
};

const coconut_mojito: Recipe = {
  id: '14_6',
  time: 15,
  portions: 1,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.LIME_JUICE_ST], '1/2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.MINT_LEAVES], '8', MEASUREMENT.ST),
      toIngredient([INGREDIENT.WHITE_SUGAR], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.LIGHT_RUM], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.COCONUT_RUM], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.COCONUT_MILK], '3/5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.POMEGRANATE_SEEDS], '1', MEASUREMENT.MSK),
    ],
  },
  steps: 4,
  tags: {
    meal_type: MEAL_TYPE.DRINKS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.CHRISTMAS,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Halfbaked Harvest',
    link: 'https://www.halfbakedharvest.com/white-christmas-mojito',
  },
};

const oreo_milkshake: Recipe = {
  id: '14_7',
  time: 10,
  portions: 2,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.OREOS], '150', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.VEGAN_MILK], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.VEGAN_VANILLA_ICE_CREAM], '3/4', MEASUREMENT.L),
      toIngredient([INGREDIENT.LIGHT_RUM], undefined, undefined, true),
    ],
  },
  steps: 2,
  tags: {
    meal_type: MEAL_TYPE.DRINKS,
    diets_occasions: [DIETS_OCCASIONS.QUICK_EASY, DIETS_OCCASIONS.VEGAN],
  },
  source: {
    amount: SOURCE_AMOUNT.INSPIRED_FROM,
    type: SOURCE_TYPE.RESTAURANT,
    name: "TGI Friday's",
  },
};

const hot_chocolate: Recipe = {
  id: '14_8',
  time: 5,
  portions: 1,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.VEGAN_MILK], '3', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CACAO], '1', MEASUREMENT.MSK),
      toIngredient(
        [INGREDIENT.WHITE_SUGAR, INGREDIENT.LIGHT_SYRUP],
        '1/2',
        MEASUREMENT.MSK
      ),
      toIngredient([INGREDIENT.CINNAMON], undefined, undefined, true),
    ],
  },
  steps: 2,
  tags: {
    meal_type: MEAL_TYPE.DRINKS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.FAMILY_RECIPE,
  },
};

const cinnamon_latte: Recipe = {
  id: '14_9',
  time: 5,
  portions: 1,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.VEGAN_MILK], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.CINNAMON], '1', MEASUREMENT.KRM),
      toIngredient(
        [INGREDIENT.WHITE_SUGAR, INGREDIENT.LIGHT_SYRUP],
        '1/2',
        MEASUREMENT.MSK
      ),
    ],
  },
  steps: 2,
  tags: {
    meal_type: MEAL_TYPE.DRINKS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'The Indian Spot',
    link:
      'https://theindianspot.com/cinnamon-milk-benefits-and-remedies-along-with-recipe',
  },
};

const lavender_latte: Recipe = {
  id: '14_10',
  time: 5,
  portions: 1,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.VEGAN_MILK], '3', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LAVENDER_DRIED], '1', MEASUREMENT.TSK),
      toIngredient(
        [INGREDIENT.WHITE_SUGAR, INGREDIENT.LIGHT_SYRUP],
        '1/2',
        MEASUREMENT.MSK
      ),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.DRINKS,
    diets_occasions: [
      DIETS_OCCASIONS.QUICK_EASY,
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Brewing Happiness',
    link:
      'https://www.brewinghappiness.com/lavender-moon-milk-30screenlessnights-recap',
  },
};

/**
 * 15. Christmas
 */
const christmas_porrige: Recipe = {
  id: '15_1',
  time: 70,
  portions: 6,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.ROUND_RICE], '2 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WATER], '5', MEASUREMENT.DL),
      toIngredient([INGREDIENT.VEGAN_BUTTER], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SALT], '3/4', MEASUREMENT.TSK),
      toIngredient(
        [INGREDIENT.RICE_MILK, INGREDIENT.ALMOND_MILK],
        '8',
        MEASUREMENT.DL
      ),

      toIngredient([INGREDIENT.CINNAMON_STICK], '1', MEASUREMENT.ST),
      toIngredient([INGREDIENT.WHITE_SUGAR], '1', MEASUREMENT.MSK),
    ],
  },
  steps: 6,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.STEWS,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.CHRISTMAS,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.FAMILY_RECIPE,
  },
};

const christmas_salad: Recipe = {
  id: '15_2',
  time: 40,
  portions: 6,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.CURLY_KALE], '200', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.POMEGRANATE_SEEDS], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.ORANGES], '2', MEASUREMENT.ST),
      toIngredient([INGREDIENT.DRIED_CRANBERRIES], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LEMON_JUICE], '1 1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.OLIVE_OIL], '1 1/2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SALT], '1', MEASUREMENT.KRM),
      toIngredient([INGREDIENT.BLACK_PEPPER], '1', MEASUREMENT.KRM),
    ],
  },
  steps: 5,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SALLADS,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.CHRISTMAS,
      DIETS_OCCASIONS.ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'ICA',
    link: 'https://www.ica.se/recept/kalsallad-med-granatapple-714460',
  },
};

const orange_sallad_with_pomegranate_and_cinnamon: Recipe = {
  id: '15_3',
  time: 10,
  portions: 2,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.POMEGRANATE_SEEDS], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.ORANGES], '4', MEASUREMENT.ST),
      toIngredient(
        [INGREDIENT.MAPLE_SYRUP, INGREDIENT.LIGHT_SYRUP],
        '2',
        MEASUREMENT.MSK
      ),
      toIngredient([INGREDIENT.CINNAMON], '1', MEASUREMENT.TSK),
    ],
  },
  steps: 4,
  tags: {
    meal_type: MEAL_TYPE.MAIN_COURSES,
    main_course_type: MAIN_COURSE_TYPE.SALLADS,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.CHRISTMAS,
      DIETS_OCCASIONS.ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'ICA',
    link:
      'https://www.ica.se/recept/apelsinsallad-med-granatapple-honung-och-kanel-715483',
  },
};

const chocolate_dipped_clementines: Recipe = {
  id: '15_4',
  time: 10,
  portions: 2,
  ingredients: {
    base: [
      toIngredient(
        [INGREDIENT.CHOCOLATE_DARK, INGREDIENT.CHOCOLATE_LIGHT],
        '100',
        MEASUREMENT.GRAM
      ),
      toIngredient([INGREDIENT.CLEMENTINES], '3', MEASUREMENT.ST),
    ],
  },
  steps: 5,
  tags: {
    meal_type: MEAL_TYPE.DESERTS,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.CHRISTMAS,
      DIETS_OCCASIONS.SEMI_ME_DIET,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'ICA',
    link: 'https://www.ica.se/recept/chokladdoppade-clementiner-721235/',
  },
};

const christmas_butterscotch: Recipe = {
  id: '15_5',
  time: 30,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WHITE_SUGAR], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LIGHT_SYRUP], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.ALMOND_MILK], '2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.VEGAN_BUTTER], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.SWEET_ALMONDS_UNSHELLED], '2', MEASUREMENT.DL),
    ],
  },
  steps: 7,
  tags: {
    meal_type: MEAL_TYPE.DESERTS,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.CHRISTMAS,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.INSPIRED_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'ICA',
    link: 'https://www.ica.se/recept/vegansk-knack-725944',
  },
};

const saffron_caramels: Recipe = {
  id: '15_6',
  time: 30,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WHITE_SUGAR], '3', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LIGHT_SYRUP], '1 1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.COCONUT_MILK], '3', MEASUREMENT.DL),
      toIngredient([INGREDIENT.VEGAN_BUTTER], '50', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.SAFFRON], '1', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.COCONUT_SHREDDED], '1 1/2', MEASUREMENT.DL),
    ],
  },
  steps: 8,
  tags: {
    meal_type: MEAL_TYPE.DESERTS,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.CHRISTMAS,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'ICA',
    link: 'https://www.ica.se/recept/saffranskola-med-kokos-647870',
  },
};

const saffron_biscuits: Recipe = {
  id: '15_7',
  time: 30,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.VEGAN_BUTTER], '100', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.WHITE_SUGAR], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.VANILLA_SUGAR], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.LIGHT_SYRUP], '2', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.COCONUT_FLOUR], '1 1/2', MEASUREMENT.DL),
      toIngredient(
        [INGREDIENT.ALMOND_FLOUR, INGREDIENT.BUCKWHEAT_FLOUR],
        '2',
        MEASUREMENT.DL
      ),
      toIngredient([INGREDIENT.PSYLLIUM_HUSK], '1', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.BAKING_POWDER], '1', MEASUREMENT.TSK),
    ],
  },
  steps: 7,
  tags: {
    meal_type: MEAL_TYPE.DESERTS,
    diets_occasions: [
      DIETS_OCCASIONS.VEGAN,
      DIETS_OCCASIONS.FODMAP,
      DIETS_OCCASIONS.CHRISTMAS,
    ],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'ICA',
    link: 'https://www.ica.se/recept/saffranssnittar-722928',
  },
};

const gingerbread_cake_with_lingonberry_frosting: Recipe = {
  id: '15_8',
  time: 30,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.WHEAT_FLOUR], '3', MEASUREMENT.DL),
      toIngredient([INGREDIENT.WHITE_SUGAR], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.GINGERBREAD_SPICE], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.BAKING_POWDER], '1', MEASUREMENT.MSK),
      toIngredient([INGREDIENT.VEGAN_BUTTER], '100', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.OAT_CREAM], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.OAT_MILK], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LIGHT_SYRUP], '1/2', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LINGONBERRY_JAM], '2', MEASUREMENT.MSK),
    ],
    frosting: [
      toIngredient([INGREDIENT.VEGAN_CREAM_CHEESE], '225', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.POWDERED_SUGAR], '1', MEASUREMENT.DL),
      toIngredient([INGREDIENT.LEMON_JUICE], '2', MEASUREMENT.TSK),
      toIngredient([INGREDIENT.LINGONBERRIES], '2', MEASUREMENT.MSK),
    ],
  },
  steps: 7,
  tags: {
    meal_type: MEAL_TYPE.DESERTS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.CHRISTMAS],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL_FROM,
    type: SOURCE_TYPE.WEBSITE,
    name: 'Välj Vego',
    link: 'https://www.valjvego.se/recept/mjuk-pepparkaka-med-lingonfrosting',
  },
};

const gingerbread_milkshake: Recipe = {
  id: '15_9',
  time: 10,
  ingredients: {
    base: [
      toIngredient([INGREDIENT.GINGERBREAD_COOKIES], '200', MEASUREMENT.GRAM),
      toIngredient([INGREDIENT.SOY_MILK], '3', MEASUREMENT.DL),
      toIngredient([INGREDIENT.VEGAN_VANILLA_ICE_CREAM], '3', MEASUREMENT.DL),
      toIngredient(
        [INGREDIENT.LIGHT_RUM, INGREDIENT.DARK_RUM],
        undefined,
        undefined,
        true
      ),
    ],
  },
  steps: 3,
  tags: {
    meal_type: MEAL_TYPE.DESERTS,
    diets_occasions: [DIETS_OCCASIONS.VEGAN, DIETS_OCCASIONS.CHRISTMAS],
  },
  source: {
    amount: SOURCE_AMOUNT.ORIGINAL,
  },
};

export const recipes: Array<Recipe> = [
  /** 1. Breakfasts and snacks */
  raspberry_chia_pudding,
  strawberry_chia_pudding,
  very_berry_chia_pudding,
  chia_porrige_with_blueberries,
  buckwheat_porrige,
  crackers_with_olives_and_thyme,
  chocolate_granola,
  berry_squares,

  /** 2. Starters */
  thai_soup_with_carrot_and_coconut_milk,
  root_vegetables_soup,
  fried_asparagus_with_balsamic_vinegar,
  crostini_with_tapenade,
  crostini_with_sundried_tomatoes,
  crostini_with_seaweed_caviar,

  /** 3. Sauces */
  condensed_balsamic_vinegar,
  coriander_sauce,
  chives_dip,

  /** 4. Side dishes and extras */
  coconut_rice,
  root_vegetables_mush,
  aubergine_bacon,
  almond_bacon,
  lemon_zuccini,
  //hummus,
  dragon_fruit_salad,
  asian_salad,
  crispy_sesame_cauliflower,
  mushroom_bruschetta,
  italian_cauliflower_rice,

  /** 5. Soups */
  cheesy_spinage_soup,

  /** 6. Pastas and salads */
  simple_pasta_pesto,
  pasta_pesto_with_kale_and_hemp_seeds,
  pasta_with_herb_sauce_and_mushrooms,
  sun_pasta,
  salad_with_hemp_seed_sauce,
  caesar_salad,

  /** 7. Rice dishes */
  rice_with_pulled_vegme_and_green_peas,
  oven_baked_root_vegetagles_with_tahini_sauce,
  vegetable_teriyaki,

  /**
   * 8. Wok
   * Not added for now because we never eat this anymore.
   */

  /** 9. Pizza */
  pizza_with_pesto_and_sundried_tomatoes,

  /** 10. Sushi */
  sushi_rice,
  spicy_sushi_sauce,
  japanese_tuna_stuffing,
  green_maki,
  sun_maki,
  mushroom_maki,
  japanese_tuna_stuffing_maki,
  seaweed_nigiri,
  avocado_nigiri,

  /** 11. Seafood */
  snacks_with_tuna_and_mustard,
  tuna_mush,
  orange_and_oregano_marinated_tuna,
  asian_marinated_tuna,
  wasabi_sauce,
  cod_with_coconut_and_lime,
  tomato_cod_soup,
  tuna_noodle_stew,
  creamy_coconut_cod_soup,
  curry_soup_with_cod,
  //shrimp_pasta_with_lemon_and_chili,
  //mussels_tomato_pasta,

  /** 12. Legumes */
  curry_lentils_soup,
  curry_lentils_stew_with_coconut_and_lime,
  creamy_coconut_lentils_soup,
  tomato_lentils_soup,
  swedish_yellow_pea_soup,
  black_bean_salad,
  beluga_patties,
  coriander_beans,
  tacos_with_crispy_tahini_balls,

  /** 13. Deserts*/
  fried_pineapple,
  blueberry_cupcakes,
  chocolate_cupcakes,
  chocolate_sauce,
  swedish_chocolate_balls,
  cherry_cheese_cake,
  choco_coco_squares,

  /** 14. Drinks */
  lavender_lemonade,
  ginger_lemonade,
  mojito,
  coconut_mojito,
  oreo_milkshake,
  hot_chocolate,
  cinnamon_latte,
  lavender_latte,

  /** 15. Christmas */
  christmas_porrige,
  christmas_salad,
  orange_sallad_with_pomegranate_and_cinnamon,
  chocolate_dipped_clementines,
  christmas_butterscotch,
  saffron_caramels,
  saffron_biscuits,
  gingerbread_cake_with_lingonberry_frosting,
  gingerbread_milkshake,

  /** 16. Extra  (buckwheat pasta, etc) */
  // TODO
];
