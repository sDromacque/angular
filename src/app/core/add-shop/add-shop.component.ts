import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ValdemortConfig } from 'ngx-valdemort';
import { debounceTime, distinct, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.scss'],
})
export class AddShopComponent {
  passwordGroup: FormGroup;
  userForm: FormGroup;
  usernameCtrl: FormControl;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmCtrl: FormControl;
  passwordStrength = 0;

  static passwordMatch(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')!.value;
    const confirm = group.get('confirm')!.value;
    return password === confirm ? null : { matchingError: true };
  }

  constructor(fb: FormBuilder, valdemortConfig: ValdemortConfig) {
    this.usernameCtrl = fb.control('', Validators.required);
    this.emailCtrl = fb.control('', [Validators.required, Validators.email]);
    this.passwordCtrl = fb.control('', Validators.required);
    this.confirmCtrl = fb.control('', Validators.required);

    valdemortConfig.errorsClasses = 'invalid-feedback';
    valdemortConfig.shouldDisplayErrors = (control, form) => control.dirty;

    this.passwordGroup = fb.group(
      { password: this.passwordCtrl, confirm: this.confirmCtrl },
      { validators: AddShopComponent.passwordMatch }
    );
    this.userForm = fb.group({
      username: this.usernameCtrl,
      email: this.emailCtrl,
      passwordForm: this.passwordGroup,
    });

    this.passwordCtrl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((newValue) => (this.passwordStrength = newValue.length));
  }

  register(): void {
    console.log(this.userForm.value);
  }
}
