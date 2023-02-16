import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.scss']
})
export class BaselayoutComponent implements OnInit {

  isExpanded: boolean = false;
  // styleBasePath: string = environment.styleBasePath;  

  constructor(private renderer: Renderer2) { }
  ngOnInit(): void {
    
  }

  toggleClass(event: any, className: string) {
      const hasClass = event.currentTarget.classList.contains(className);    
      if(hasClass) {
          this.renderer.removeClass(event.currentTarget, className);
      } else {
          this.renderer.addClass(event.currentTarget, className);
      }
  }
}
