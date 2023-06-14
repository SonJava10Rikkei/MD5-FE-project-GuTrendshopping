import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  // isMenuSrolled=false;
  // isSidebarShowing = false;
  // @HostListener('window:scroll',['$event'])
  // scrollCheck(){
  //   console.log('scroll up', window.pageYOffset)
  //
  //   if(window.pageYOffset>100)
  //     this.isMenuSrolled=true;
  //   else
  //     this.isSidebarShowing=false;
  //
  //
  //   console.log('scroll down', this.isMenuSrolled)
  // }

  scrollToTop() {
  document.body.scrollIntoView({behavior:'smooth'})
  }
}
