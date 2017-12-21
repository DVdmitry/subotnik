import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatMenuModule,
  MatToolbarModule, MatIconModule, MatFormFieldModule,
  MatInputModule, MatDatepickerModule,
  MatNativeDateModule, MatTooltipModule, MatStepperModule,
  MatSelectModule, MatExpansionModule, MatTabsModule,
  MatCheckboxModule, MatSliderModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatCardModule, MatMenuModule,
    MatToolbarModule, MatIconModule, MatFormFieldModule,
    MatInputModule, MatDatepickerModule,
    MatNativeDateModule, MatTooltipModule, MatStepperModule,
    MatSelectModule, MatExpansionModule, MatTabsModule,
    MatCheckboxModule, MatSliderModule
  ],
  exports: [MatButtonModule, MatCardModule, MatMenuModule,
    MatToolbarModule, MatIconModule, MatFormFieldModule,
    MatInputModule, MatDatepickerModule,
    MatNativeDateModule, MatTooltipModule, MatStepperModule,
    MatSelectModule, MatExpansionModule, MatTabsModule,
    MatCheckboxModule, MatSliderModule]
})
export class AppMaterialModule { }
