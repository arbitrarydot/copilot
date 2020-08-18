import { AnimationStyleMetadata, style } from '@angular/animations';

export const slideInRight: Array<AnimationStyleMetadata> = [
	style({ transform: 'translate3d(-100%, 0, 0)', offset: 0 }),
	style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
];

export const slideInLeft: Array<AnimationStyleMetadata> = [
	style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
	style({ transform: 'translate3d(-100%, 0, 0)', offset: 1 }),
];
