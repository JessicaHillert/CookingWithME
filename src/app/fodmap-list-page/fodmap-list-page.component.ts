import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import {
  fodmapAnimalProducts,
  fodmapBerries,
  fodmapFruits,
  fodmapGrains,
  FodmapIngredient,
  fodmapNutsLegumesSeeds,
  fodmapOthers,
  FodmapSection,
  fodmapVegetables,
  MEDietLevel,
} from 'src/assets/fodmap';

@Component({
  selector: 'app-fodmap-list-page',
  templateUrl: './fodmap-list-page.component.html',
  styleUrls: ['./fodmap-list-page.component.scss'],
})
export class FodmapListPageComponent implements OnInit {
  constructor(private translate: TranslateService) {}
  sections!: Array<FodmapSection>;
  filteredLists!: BehaviorSubject<Array<FodmapSection>>;

  me_filter = new FormControl(false);
  semi_me_filter = new FormControl(false);

  async ngOnInit() {
    /** Wait for TranslateService to load */
    const sleep = (m: any) => new Promise((r) => setTimeout(r, m));
    (async () => {
      await sleep(200);
      this.sections = [
        this.sortList(fodmapFruits),
        this.sortList(fodmapBerries),
        this.sortList(fodmapVegetables),
        this.sortList(fodmapGrains),
        this.sortList(fodmapNutsLegumesSeeds),
        this.sortList(fodmapAnimalProducts),
        this.sortList(fodmapOthers),
      ];
      this.filteredLists = new BehaviorSubject(this.sections);
    })();

    this.me_filter.valueChanges.subscribe(() => {
      this.filterLists();
    });
    this.semi_me_filter.valueChanges.subscribe(() => {
      this.filterLists();
    });
  }

  sortList(section: FodmapSection): FodmapSection {
    return {
      title: section.title,
      low: section.low.sort(this.sortTranslateFunc),
      medium: section.medium.sort(this.sortTranslateFunc),
      high: section.high.sort(this.sortTranslateFunc),
    };
  }

  sortTranslateFunc = (a: any, b: any): any => {
    if (
      this.translate.instant('INGREDIENT.' + a.ingredient) <
      this.translate.instant('INGREDIENT.' + b.ingredient)
    ) {
      return -1;
    }
    if (a.ingredient > b.ingredient) {
      return 1;
    }
    return 0;
  };

  filterLists() {
    const newList: Array<FodmapSection> = [];
    this.sections.forEach((section) =>
      newList.push({
        title: section.title,
        low: this.filterList(section.low),
        medium: this.filterList(section.medium),
        high: this.filterList(section.high),
      } as FodmapSection)
    );
    this.filteredLists.next(newList);
  }

  /** Checks if ingredient is in one of the selected filters */
  filterList(list: Array<FodmapIngredient>) {
    return list.filter((ingredient) => {
      /** No filter */
      if (!this.me_filter.value && !this.semi_me_filter.value) {
        return true;
      }

      /** Checks if ME diet is selected and adds ingredients with the diet is so */
      if (this.me_filter.value && ingredient.MEDiet === MEDietLevel.FULL) {
        return true;
      }

      /** Checks if semi ME diet is selected and adds ingredients with the diet is so */
      if (this.semi_me_filter.value && ingredient.MEDiet === MEDietLevel.SEMI) {
        return true;
      }

      /** Filter is used and ingredient does not match any selected */
      return false;
    });
  }
}
