import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {LayoutModule} from '@angular/cdk/layout';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,MatTabsModule,LayoutModule,FlexLayoutModule,MatBadgeModule,MatToolbarModule,MatMenuModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent }
    ])
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  exports: [HomeComponent]
})
export class BooksDashboardModule {}
