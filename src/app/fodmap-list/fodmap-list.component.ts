import { Component, Input } from '@angular/core';
import { FodmapSection } from 'src/assets/fodmap';

@Component({
  selector: 'app-fodmap-list',
  templateUrl: './fodmap-list.component.html',
  styleUrls: ['./fodmap-list.component.scss'],
})
export class FodmapListComponent {
  @Input() headers?: boolean;
  @Input() section?: FodmapSection;
}
