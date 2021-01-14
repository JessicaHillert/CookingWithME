import { INGREDIENT } from './ingredients';

export interface FodmapSection {
  title: string;
  good: Array<FodmapIngredient>;
  medium: Array<FodmapIngredient>;
  bad: Array<FodmapIngredient>;
}

export enum MEDietLevel {
  FULL,
  SEMI,
  NO,
}

export interface FodmapIngredient {
  ingredient: INGREDIENT;
  MEDiet: MEDietLevel;
}

export const fodmapFruits: FodmapSection = {
  title: 'FODMAP_LIST.FRUITS',
  good: [
    { ingredient: INGREDIENT.BANANAS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.BARBARY_FIGS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.CANTALOUPE_MELONS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.COCONUT_OIL, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.DRAGON_FRUITS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.DURIANS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.GRAPEFRUITS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.GRAPES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.HONEYDEW_MELONS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.JACKFRUITS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.KIWIS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.LEMONS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.MANDARIN_ORANGES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.OLIVE_OIL, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.ORANGES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.PASSION_FRUITS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.PAWPAWS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.PINEAPPLES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.PITAYAS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.RHUBARBS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.STAR_FRUITS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.TANGELOS, MEDiet: MEDietLevel.FULL },
  ],
  medium: [
    { ingredient: INGREDIENT.AVOCADOS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.COCONUTS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.DRIED_CRANBERRIES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.LYCHEES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.POMEGRANATES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.RAMBUTANS, MEDiet: MEDietLevel.FULL },
  ],
  bad: [
    { ingredient: INGREDIENT.APPLES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.APRICOTS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.CHERIMOYAS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.CHERRIES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.MANGOS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.NECTARINE, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.OTHER_DRIED_FRUITS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.PEACHES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.PEARS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.PERSIMMONS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.PLUMS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.PRUNES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.TAMARILLOS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.WATERMELONS, MEDiet: MEDietLevel.FULL },
  ],
};

export const fodmapBerries: FodmapSection = {
  title: 'FODMAP_LIST.BERRIES',
  good: [
    { ingredient: INGREDIENT.ACAI, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.BLUEBERRIES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.CLOUDBERRIES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.LINGONBERRIES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.MULBERRIES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.RASPBERRIES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.STRAWBERRIES, MEDiet: MEDietLevel.FULL },
  ],
  medium: [],
  bad: [
    { ingredient: INGREDIENT.BLACKBERRIES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.BOYSENBERRIES, MEDiet: MEDietLevel.FULL },
  ],
};

export const fodmapVegetables: FodmapSection = {
  title: 'FODMAP_LIST.VEGETABLES',
  good: [
    { ingredient: INGREDIENT.ALFALFAS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.ARUGULAS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.AUBERGINES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.BAMBOO_SHOOTS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.BELL_PEPPERS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.BOK_CHOY, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.BROCCOLI, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.BRUSSELS_SPROUTS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.CANNED_CHAMPIGNONS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.CARROTS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.CHARDS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.CHIVES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.CUCUMBERS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.CURLY_KALE, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.DAIKONS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.ENDIVES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.GARLIC_OLIVE_OIL, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.GINGER, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.HERBS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.LETTUCE, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.MUNG_BEAN_SPROUTS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.MUSTARD, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.OLIVES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.OYSTER_MUSHROOMS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.PARSNIPS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.POTATOES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.PUMPKINS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.RUTABAGAS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.SCALLIONS_WHITE_PARTS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.SEAWEEDS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.SPICES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.SPINAGES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.TOMATOES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.WASABI, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.ZUCCHINIS, MEDiet: MEDietLevel.FULL },
  ],
  medium: [
    { ingredient: INGREDIENT.BEETS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.CELERIES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.FENNELS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.GREEN_PEAS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.SAVOY_CABBAGES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.SUNDRIED_TOMATOES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.SWEET_CORNS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.SWEET_POTATOES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.WINTER_SQUASHES, MEDiet: MEDietLevel.FULL },
  ],
  bad: [
    { ingredient: INGREDIENT.ARTICHOKES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.ASPARAGUS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.CAULIFLOWERS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.CHAMPIGNONS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.GARLICS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.ONIONS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.SCALLIONS_WHITE_PARTS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.SHALLOTS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.SHIITAKES, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.SNOW_PEAS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.LEEKS, MEDiet: MEDietLevel.FULL },
  ],
};

export const fodmapNutsLegumesSeeds: FodmapSection = {
  title: 'FODMAP_LIST.NUTS_SEEDS_LEGUMES',
  good: [
    { ingredient: INGREDIENT.BRAZIL_NUTS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.CACAO, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.CANOLA_OIL, MEDiet: MEDietLevel.SEMI },
    { ingredient: INGREDIENT.CHESTNUTS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.CHIA_SEEDS, MEDiet: MEDietLevel.SEMI },
    { ingredient: INGREDIENT.FLAX_SEEDS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.HEMP_SEEDS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.MACADAMIA_NUTS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.PEANUTS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.PECANS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.PINE_NUTS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.POPPY_SEEDS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.PSYLLIUM_SEEDS, MEDiet: MEDietLevel.SEMI },
    { ingredient: INGREDIENT.PUMPKIN_SEEDS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.SESAME_SEEDS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.SUNFLOWER_SEEDS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.WALNUTS, MEDiet: MEDietLevel.NO },
  ],
  medium: [
    { ingredient: INGREDIENT.ALMONDS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.CANNED_CHICKPEAS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.FIRM_TOFU, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.GREEN_PEAS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.HAZEL_NUTS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.TAHINI, MEDiet: MEDietLevel.NO },
  ],
  bad: [
    { ingredient: INGREDIENT.CASHEW_NUTS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.CHICKPEAS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.KIDNEY_BEANS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.LENTILS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.PISTACHIOS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.RED_BEANS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.SOFT_TOFU, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.SOY_BEANS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.YELLOW_PEAS, MEDiet: MEDietLevel.NO },
  ],
};

export const fodmapGrains: FodmapSection = {
  title: 'FODMAP_LIST.GRAINS',
  good: [
    { ingredient: INGREDIENT.AMARANTH, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.BROOM_CORN, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.BROWN_RICE, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.BUCKWHEAT, MEDiet: MEDietLevel.SEMI },
    { ingredient: INGREDIENT.DEHULLED_QUINOA, MEDiet: MEDietLevel.SEMI },
    { ingredient: INGREDIENT.MILLET, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.OAT_BRAN, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.OATS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.TEFF, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.WHITE_RICE, MEDiet: MEDietLevel.SEMI },
  ],
  medium: [],
  bad: [
    { ingredient: INGREDIENT.BARLEY, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.JUICE_CONCENTRATES, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.RYE, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.WHEAT, MEDiet: MEDietLevel.NO },
  ],
};

export const fodmapAnimalProducts: FodmapSection = {
  title: 'FODMAP_LIST.ANIMAL_PRODUCTS',
  good: [
    { ingredient: INGREDIENT.BUTTER, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.FISH, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.HARD_CHEESES, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.SHELLFISH, MEDiet: MEDietLevel.FULL },
    {
      ingredient: INGREDIENT.LACTOSE_FREE_MILK_PRODUCTS,
      MEDiet: MEDietLevel.NO,
    },
    { ingredient: INGREDIENT.EGGS, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.INDUSTRIAL_MEATS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.GRASS_FED_MEATS, MEDiet: MEDietLevel.SEMI },
    { ingredient: INGREDIENT.WILD_MEATS, MEDiet: MEDietLevel.SEMI },
  ],
  medium: [
    { ingredient: INGREDIENT.SOFT_CHEESES, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.CREAM, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.ANIMAL_YOGHURTS, MEDiet: MEDietLevel.NO },
  ],
  bad: [
    { ingredient: INGREDIENT.ANIMAL_MILKS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.ICE_CREAMS, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.PROCESSED_MEATS, MEDiet: MEDietLevel.NO },
  ],
};

export const fodmapOthers: FodmapSection = {
  title: 'FODMAP_LIST.OTHERS',
  good: [
    { ingredient: INGREDIENT.ARROWROOT, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.BAKING_SODA, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.BLACK_TEA, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.BROWN_SUGAR, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.COCONUT_SUGAR, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.DARK_SYRUP, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.GREEN_TEA, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.LIGHT_SYRUP, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.MAPLE_SYRUP, MEDiet: MEDietLevel.SEMI },
    { ingredient: INGREDIENT.NUTRITIONAL_YEAST, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.ROOIBOS_TEA, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.SALT, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.SWEETENERS_NOT_OL, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.TAPIOKA, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.VINEGAR, MEDiet: MEDietLevel.FULL },
    { ingredient: INGREDIENT.WHITE_SUGAR, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.WHITE_TEA, MEDiet: MEDietLevel.NO },
  ],
  medium: [
    { ingredient: INGREDIENT.BEER, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.GIN, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.VODKA, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.WINES, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.WHISKEYS, MEDiet: MEDietLevel.NO },
  ],
  bad: [
    { ingredient: INGREDIENT.AGAVE, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.CIDER, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.HONEY, MEDiet: MEDietLevel.SEMI },
    { ingredient: INGREDIENT.RUM, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.SWEETENERS_OL, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.CHAMOMILE_TEA, MEDiet: MEDietLevel.NO },
    { ingredient: INGREDIENT.OOLONG_TEA, MEDiet: MEDietLevel.NO },
  ],
};
