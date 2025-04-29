import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INVEEP';
  


  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fr', 'ar']);
    this.translate.setDefaultLang('en');
    
    const browserLang = this.translate.getBrowserLang();
    const defaultLang = browserLang && browserLang.match(/en|fr|ar/) ? browserLang : 'en';
    this.translate.use(defaultLang);
    this.updateDocumentDirection(defaultLang);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.updateDocumentDirection(lang);
  }

  private updateDocumentDirection(lang: string) {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

}
