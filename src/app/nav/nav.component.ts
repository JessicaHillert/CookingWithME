import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  current_main_path: any; /// recipe:id only update this if refreshing/directly going to the page

  constructor(public translate: TranslateService, private router: Router) {
    translate.addLangs(['en', 'sv']);
    translate.setDefaultLang('en');
    const local_storage_lang = localStorage.getItem('lang');
    const browser_lang = local_storage_lang
      ? local_storage_lang
      : translate.getBrowserLang();
    translate.use(browser_lang.match(/en|sv/) ? browser_lang : 'en');
    this.setFlag(browser_lang);

    this.current_main_path = window.location.pathname;
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
    localStorage.setItem('lang', value);

    /** To trigger recipe amout change */
    const current_exact_path = window.location.pathname;
    if (current_exact_path.slice(0, 7) === '/recipe') {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigateByUrl(current_exact_path);
      });
    }
  }

  toggleDarkMode() {
    this.dark_mode = !this.dark_mode;
    this.toogle_dark_mode.emit(this.dark_mode);
    localStorage.setItem('dark_mode', this.dark_mode.toString());
  }
}
