import { Component } from '@angular/core';
import {
  fodmapAnimalProducts,
  fodmapBerries,
  fodmapFruits,
  fodmapGrains,
  fodmapNutsLegumesSeeds,
  fodmapOthers,
  fodmapVegetables,
} from 'src/assets/fodmap';

@Component({
  selector: 'app-fodmap-list-page',
  templateUrl: './fodmap-list-page.component.html',
  styleUrls: ['./fodmap-list-page.component.scss'],
})
export class FodmapListPageComponent {
  sections = [
    fodmapFruits,
    fodmapBerries,
    fodmapVegetables,
    fodmapGrains,
    fodmapNutsLegumesSeeds,
    fodmapAnimalProducts,
    fodmapOthers,
  ];
}
