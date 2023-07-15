import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

import { MatNativeDateModule, MatRippleModule,} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTreeModule} from '@angular/material/tree';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    DragDropModule,
    MatTooltipModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTreeModule,
    MatSnackBarModule,
    MatMenuModule,
    MatNativeDateModule ,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatSlideToggleModule
  ],
  exports:[
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    DragDropModule,
    MatTooltipModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTreeModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatSlideToggleModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class MaterialModule { }