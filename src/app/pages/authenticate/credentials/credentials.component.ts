import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service';
import { get } from 'lodash-es';

@Component({
	selector: 'app-credentials',
	templateUrl: './credentials.component.html',
	styleUrls: ['./credentials.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CredentialsComponent implements OnInit {
	@Input() isLogin: boolean = true;

	form: FormGroup;

	private readonly minEmailLength: number = 1;
	private readonly minPasswordLength: number = 1;
	private readonly maxPasswordLength: number = 12;
	private readonly strongPasswordRegex: RegExp = /^(?=.*[A-Z])(?=.*\d)(?!.*(.)\1\1)[a-zA-Z0-9@]{6,12}$/;
	private readonly loginGroup: any = {
		email: [
			null,
			Validators.compose([Validators.required, Validators.email, Validators.minLength(this.minEmailLength)]),
		],
		password: [
			null,
			Validators.compose([
				Validators.required,
				Validators.minLength(this.minPasswordLength),
				Validators.maxLength(this.maxPasswordLength),
				Validators.pattern(this.strongPasswordRegex),
			]),
		],
	};

	private readonly createGroup: any = {
		...this.loginGroup,
		retypedPassword: [
			null,
			Validators.compose([
				Validators.required,
				Validators.minLength(this.minPasswordLength),
				Validators.maxLength(this.maxPasswordLength),
				Validators.pattern(this.strongPasswordRegex),
				this.retypedPasswordValidator,
			]),
		],
	};

	constructor(private loginService: LoginService, private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		if (this.isLogin === true) {
			this.form = this.formBuilder.group(this.loginGroup);
		} else {
			this.form = this.formBuilder.group(this.createGroup);
		}
	}

	login(): void {
		this.loginService.loginWithGoogle();
	}

	signIn(): void {
		// shouldn't be able to access this method as the button will be disabled if the form is invalid.
		const { email, password } = this.form.value;
		if (this.isLogin === true) {
			this.loginService.loginWithEmailAndPassword(email, password);
		} else {
			this.loginService.createWithEmailAndPassword(email, password);
		}
	}

	retypedPasswordValidator(control: AbstractControl): { [key: string]: any } | null {
		const originalPassword: string = get(this, 'form.value.password', null);
		const retypedPassword: string = get(this, 'form.value.retypedPassword', null);

		return originalPassword === retypedPassword ? { noPasswordMatch: { value: control.value } } : null;
	}
}
