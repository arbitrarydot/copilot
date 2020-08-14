import { RouterTestingModule } from '@angular/router/testing';

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Component } from '@angular/core';

describe('AppComponent', () => {

  @Component({ template: '<h1>🔥🔥🔥 YEEEET 🔥🔥🔥</h1>' })
  class FakeRouteOutletComponent { }

  @Component({ template: '<p>nothing important</p>' })
  class DummyComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, FakeRouteOutletComponent, DummyComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'route1', component: FakeRouteOutletComponent, data: { title: '🔥🔥🔥 YEEEET 🔥🔥🔥' } },
          { path: 'route2', component: DummyComponent, data: { title: undefined } },
          { path: 'route3', component: DummyComponent, data: { title: 'NOT YEET' } },
        ])
      ],
    }).compileComponents();

  }));

  it('Should create the app', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

