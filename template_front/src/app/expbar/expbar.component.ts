
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-expbar',
  templateUrl: './expbar.component.html',
  styleUrls: ['./expbar.component.css']
})
export class ExpbarComponent  implements OnInit
{  userName: string = 'John Doe';
  userRole: string = 'Admin';
  avatarUrl: string = '../assets/img/avatars/5.png';
  notificationsCount: number = 4;
  isDropdownOpen: boolean = false;
  isUserDropdownOpen: boolean = false;

  selectedLanguage!: { name: string, img: string } ;


  languages = [
    { name: 'Français', img: '../assets/img/France.jpg' ,lang:'fr'},
    { name: 'English', img: '../assets/img/English.webp' ,lang:'en'},
    { name: 'العربية', img: '../assets/img/saoudite.jpg',lang:'ar' }
  ];


  toggleDropdown(event: Event, dropdownType: string): void {
    event.preventDefault();
    if (dropdownType === 'language') {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.isUserDropdownOpen = false;
    } else if (dropdownType === 'user') {
      this.isUserDropdownOpen = !this.isUserDropdownOpen;
      this.isDropdownOpen = false;
    }
  }

  selectLanguage(language: { name: string, img: string, lang: string }): void {
    this.selectedLanguage = { name: language.name, img: language.img };
    this.isDropdownOpen = false;
    this.clicklang(language.lang);
  }
  

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    const languageDropdown = document.querySelector('.dropdown-language');
    const userDropdown = document.querySelector('.dropdown-user');
    if (languageDropdown && !languageDropdown.contains(target)) {
      this.isDropdownOpen = false;
    }
    if (userDropdown && !userDropdown.contains(target)) {
      this.isUserDropdownOpen = false;
    }
  }











  id!: number;

  open!: boolean;
  public y!: string;
  currentLang: string;



  arabicLanguage: boolean = false
  openMenuLang: boolean = false
  




  constructor( public translate: TranslateService, private router: Router,) {
    window.addEventListener('refreshHeader', (evt: any) => {
      if (evt.detail == true) {
     
      }
    });
    this.currentLang = localStorage.getItem('currentLang') || 'fr';
    this.translate.use(this.currentLang);

    this.selectedLanguage = this.languages.find(lang => lang.lang === this.currentLang) || this.languages[0];

  }

  ngOnInit() {

 

    this.getConfiguration()

    //this.name = this.getCookie('nameUser');
    this.EventLang();
    this.setSelectedLang();
  }

  navigateToProfile() {
    this.router.navigate(["/setting/profile"])
  }

  clicklang(lang: any) {
  
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang)
    if (lang == "ar") {
      localStorage.setItem("y", "rtl");
    } else {
      localStorage.setItem('y', 'ltr');
    }
    this.currentLang = localStorage.getItem('currentLang') || 'fr';
    this.enleverSelectedLanguage()
    this.setSelectedLang()
  }




  setMenuLang() {
    this.openMenuLang = !this.openMenuLang;
  }
  enleverSelectedLanguage() {
    for (
      let index = 0;
      index < document.getElementsByClassName("language-icon").length;
      index++
    ) {
      const element = document.getElementsByClassName("language-icon")[index];
      element?.classList.remove("selected");
    }
  }
  setSelectedLang() {
    for (
      let index = 0;
      index < document.getElementsByClassName("language-icon").length;
      index++
    ) {
      const element = document.getElementsByClassName("language-icon")[index];
      if (element.id === this.currentLang) {
        element?.classList.add("selected");
      }
    }
  }






  getConfiguration() {

  }



  async onSearchChange(args: string) {
    if (window.location.pathname != '/search') {
      await this.router.navigate(['/search']);
    }
  
    var event = new CustomEvent('findAction', { 'detail': args });
    window.dispatchEvent(event);
  }
  btnToggle() {
    this.open = true
  }
  EventLang() {
    let lang = localStorage.getItem('currentLang')
    if (lang == 'ar') {
      this.arabicLanguage = true;
    } else {
      this.arabicLanguage = false;
    }
  }
  changeEventLang(event: any) {
    this.translate.use(event.target.value);
    if (event.target.value == 'ar') {
      this.arabicLanguage = true
    } else {
      this.arabicLanguage = false
    }
  }
 


}

