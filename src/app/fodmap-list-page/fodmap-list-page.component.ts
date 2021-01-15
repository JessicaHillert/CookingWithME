import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  sections = [
    fodmapFruits,
    fodmapBerries,
    fodmapVegetables,
    fodmapGrains,
    fodmapNutsLegumesSeeds,
    fodmapAnimalProducts,
    fodmapOthers,
  ];

  filteredLists: BehaviorSubject<Array<FodmapSection>> = new BehaviorSubject(
    this.sections
  );

  me_filter = new FormControl(false);
  semi_me_filter = new FormControl(false);

  ngOnInit(): void {
    this.me_filter.valueChanges.subscribe(() => {
      this.filterLists();
    });
    this.semi_me_filter.valueChanges.subscribe(() => {
      this.filterLists();
    });
  }

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
