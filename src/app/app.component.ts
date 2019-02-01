import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'diploma-music';
    loading: boolean;
    
    constructor(private router: Router) { }
        
    ngOnInit() {
        this.router.events.subscribe((value: any) => this.checkRouterEvent(value));
      }
    
      private checkRouterEvent(routerEvent: Event): void {
        if (routerEvent instanceof NavigationStart) {
          this.loading = true;
        } else if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
          this.loading = false;
        }
      }
}
