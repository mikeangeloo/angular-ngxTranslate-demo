import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-translate-demo';
  langs: string[] = [];

  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('es');

    // this.translate.get('HELLO').subscribe((res: string) => {
    //   console.log(res);
    // });

    this.translate.stream('HELLO').subscribe((res: string) => {
      console.log(res);
    });

    this.translate.stream('GREETING', {name: 'nicolas'})
      .subscribe((res: string) => {
        console.log(res);
    });

    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
