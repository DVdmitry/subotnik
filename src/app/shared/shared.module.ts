import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { AppMaterialModule} from '../app-material.module';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBj42L1LGSA875C7wVr9p_Yta2TJeCHKY8',
      libraries: ['places']
    })
  ],
  declarations: [MapComponent],
  exports: [MapComponent],
  providers: [MapComponent]
})
export class SharedModule { }
