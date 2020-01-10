import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  
  MatDialogRef,
  MatTabsModule,
  MatListModule,
  MatAutocompleteModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatListModule
  ]
})
export class MaterialModule {
}
