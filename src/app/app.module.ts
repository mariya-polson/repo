import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaselayoutComponent } from './components/baselayout/baselayout.component';
import { HeaderComponent } from './components/header/header.component';
import { TabComponent } from './components/tab/tab.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    BaselayoutComponent,HeaderComponent,TabComponent, TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatSidenavModule,MatIconModule,MatToolbarModule,MatMenuModule,MatSlideToggleModule
 ,MatButtonModule,MatTabsModule,MatFormFieldModule,MatInputModule,MatTableModule,MatPaginatorModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
