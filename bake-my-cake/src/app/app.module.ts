import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { CakeRequestViewComponent } from './cake-request-view/cake-request-view.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CakeListComponent } from './cake-list/cake-list.component';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { CakeCardComponent } from './cake-card/cake-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchComponent } from './search/search.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FilterComponent } from './filter/filter.component';
import { ServicesComponent } from './services/services.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CakeCartComponent,
    LoginComponent,
    CakeListComponent,
    CakeCardComponent,
    PageNotFoundComponent,
    SearchComponent,
    CakeRequestViewComponent,
    FilterComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatSortModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
