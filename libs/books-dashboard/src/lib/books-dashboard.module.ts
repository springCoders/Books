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

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,MatTabsModule,LayoutModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent }
    ])
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  exports: [HomeComponent]
})
export class BooksDashboardModule {}
