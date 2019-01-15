import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComp } from './home.component';

describe('HomeComp', () => {
  let component: HomeComp;
  let fixture: ComponentFixture<HomeComp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
