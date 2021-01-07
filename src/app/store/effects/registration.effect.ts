import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as RegistrationActions from './../actions/registration.action';
import { RegistrationActionTypes } from './../actions/registration.action';
import { RegistrationService } from 'src/app/services/registration.service';

@Injectable()
export class RegistrationEffects {
  constructor(private action$: Actions, private registrationService: RegistrationService) {}

  @Effect()
  loadProfiles$: Observable<Action> = this.action$.pipe(
    ofType<RegistrationActions.GetProfile>(
        RegistrationActionTypes.Profile_Get
    ),
    mergeMap((action: RegistrationActions.GetProfile) =>
      this.registrationService.postProfile(action.payload).pipe(
        map(
          (profile: any) =>
            {
              return new RegistrationActions.GetProfileSuccess(profile);
            }
        ),
        catchError(err => of(new RegistrationActions.GetProfileFailure(err)))
      )
    )
  );

}