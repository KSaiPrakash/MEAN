import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as RegistrationActions from '../../store/actions/registration.action';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [     
    {       provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => RegistrationComponent),
            multi: true     
    }   
    ]
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  registrationState$: Observable<any[]>;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.registrationForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });
    
    this.registrationState$ = this.store.select('registration');
   }

  ngOnInit(): void {
    
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registrationForm.value);
    this.store.dispatch(new RegistrationActions.GetProfile(this.registrationForm.value));
    
  }
}
