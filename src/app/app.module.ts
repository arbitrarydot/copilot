import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashComponent } from './pages/dash/dash.component';

import { TeslaApiInterceptor } from './interceptors/tesla-api.interceptor';
import { firebaseConfig } from '../../firebase-api-keys';
import { CredentialsComponent } from './pages/authenticate/credentials/credentials.component';

@NgModule({
	declarations: [AppComponent, AuthenticateComponent, DashComponent, CredentialsComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatSlideToggleModule,
		MatToolbarModule,
		MatInputModule,
		MatCardModule,
		MatIconModule,
		FormsModule,
		MatSelectModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TeslaApiInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
