import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, Renderer2, ChangeDetectorRef } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { ThemePalette } from '@angular/material/core';

@Component({
	selector: 'app-authenticate',
	templateUrl: './authenticate.component.html',
	styleUrls: ['./authenticate.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('login', [
			transition(':enter', [
				animate(
					'2s cubic-bezier(0.86, 0, 0.07, 1)',
					keyframes([
						style({ opacity: 0, transform: 'translate3d(-100vw, 0, 0)', offset: 0 }),
						style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
					])
				),
			]),
			transition(':leave', [
				animate(
					'2s cubic-bezier(0.86, 0, 0.07, 1)',
					keyframes([
						style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
						style({ opacity: 0, transform: 'translate3d(-100vw, 0, 0)', offset: 1 }),
					])
				),
			]),
		]),
		trigger('create', [
			transition(':enter', [
				animate(
					'2s cubic-bezier(0.86, 0, 0.07, 1)',
					keyframes([
						style({ opacity: 0, transform: 'translate3d(100vw, 0, 0)', offset: 0 }),
						style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
					])
				),
			]),
			transition(':leave', [
				animate(
					'2s cubic-bezier(0.86, 0, 0.07, 1)',
					keyframes([
						style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
						style({ opacity: 0, transform: 'translate3d(100vw, 0, 0)', offset: 1 }),
					])
				),
			]),
		]),
	],
})
export class AuthenticateComponent implements OnInit, OnDestroy {
	color: ThemePalette = 'accent';
	isLogin: boolean = true;
	toggleName: 'Login' | 'Create Account' = 'Create Account';

	constructor(private renderer: Renderer2, private cd: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.renderer.setStyle(document.body, 'overflow', 'hidden');
		this.cd.markForCheck();
	}

	ngOnDestroy(): void {
		this.renderer.setStyle(document.body, 'overflow', 'auto');
	}

	toggleChanged(): void {
		this.toggleName = this.toggleName === 'Create Account' ? 'Login' : 'Create Account';
		this.isLogin = this.isLogin ? false : true;
	}
}
