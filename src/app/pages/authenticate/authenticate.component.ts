import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
// animations: [
//   trigger('fadeIn', [
//       transition(':enter', [
//           style({ opacity: 0 }),
//           animate(250, keyframes(KeyFrames.fadeIn)),
//       ]),
//       transition(':leave', [
//           style({ opacity: 1 }),
//           animate(250, keyframes(KeyFrames.fadeOut))
//       ])
//   ])
// ]
@Component({
	selector: 'app-authenticate',
	templateUrl: './authenticate.component.html',
	styleUrls: ['./authenticate.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('login', [
			transition(':enter', [
				animate(
					250,
					keyframes([
						style({ opacity: 0, transform: 'translate3d(-300%, 0, 0)', offset: 0 }),
						style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
					])
				),
			]),
			transition(':leave', [
				animate(
					250,
					keyframes([
						style({ opacity: 0, transform: 'translate3d(0, 0, 0)', offset: 0 }),
						style({ opacity: 1, transform: 'translate3d(-300%, 0, 0)', offset: 1 }),
					])
				),
			]),
		]),
		trigger('create', [
			transition(':enter', [
				animate(
					250,
					keyframes([
						style({ opacity: 0, transform: 'translate3d(300%, 0, 0)', offset: 0 }),
						style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
					])
				),
			]),
			transition(':leave', [
				animate(
					250,
					keyframes([
						style({ opacity: 0, transform: 'translate3d(0, 0, 0)', offset: 0 }),
						style({ opacity: 1, transform: 'translate3d(300%, 0, 0)', offset: 1 }),
					])
				),
			]),
		]),
	],
})
export class AuthenticateComponent implements OnInit {
	isLogin: boolean = true;

	ngOnInit(): void {
		setTimeout(() => (this.isLogin = false), 5000);
	}
}
