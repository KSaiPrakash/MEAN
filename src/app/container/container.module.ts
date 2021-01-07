import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/** Components */
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';

/** Services */
import { RegistrationService } from '../services/registration.service';

/** Reducers */
import { registrationReducer } from '../store/reducers/registration.reducer';

/** Effects */
import { RegistrationEffects } from '../store/effects/registration.effect';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    CommonComponentsModule,
    HttpClientModule,
    StoreModule.forRoot({ registration: registrationReducer }),
    EffectsModule.forRoot([RegistrationEffects]),
  ],
  exports : [
    RegistrationComponent
  ],
  providers: [
    RegistrationService
  ]
})
export class ContainerModule { }