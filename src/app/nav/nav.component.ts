import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() dark_mode: boolean = false;
  @Output() toogle_dark_mode = new EventEmitter<boolean>();
  flag!: string;
  current_path: any;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'sv']);
    translate.setDefaultLang('en');
    const browser_lang = translate.getBrowserLang();
    translate.use(browser_lang.match(/en|sv/) ? browser_lang : 'en');
    this.setFlag(browser_lang);

    this.current_path = window.location.pathname;
  }

  setFlag(browser_lang: string) {
    switch (browser_lang) {
      case 'sv':
        return (this.flag = '/assets/images/flag_swedish.jpg');
      case 'en':
        return (this.flag = '/assets/images/flag_english.jpg');
      default:
        return (this.flag = '/assets/images/flag_english.jpg');
    }
  }

  selectLang(value: string) {
    this.translate.use(value);
    this.setFlag(value);
  }

  toggleDarkMode() {
    this.dark_mode = !this.dark_mode;
    this.toogle_dark_mode.emit(this.dark_mode);
    localStorage.setItem('dark_mode', this.dark_mode.toString());
  }
}
