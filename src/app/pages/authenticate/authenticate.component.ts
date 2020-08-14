import { Component, OnInit } from '@angular/core';
import { TeslaApiService } from 'src/app/services/tesla-api/tesla-api.service';

@Component({
	selector: 'app-authenticate',
	templateUrl: './authenticate.component.html',
	styleUrls: ['./authenticate.component.scss'],
})
export class AuthenticateComponent implements OnInit {
	email: string;
	password: string;

	constructor(private teslaApi: TeslaApiService) {}

	ngOnInit(): void {
		// empty.
	}

	signIn(): void {
		this.teslaApi.authenticatePassword(this.email, this.password).subscribe(_ => {
			// no-op.
		});
	}
}
