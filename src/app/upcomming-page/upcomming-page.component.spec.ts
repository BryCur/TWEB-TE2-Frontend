import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingPageComponent } from './upcomming-page.component';

describe('UpcommingPageComponent', () => {
  let component: UpcommingPageComponent;
  let fixture: ComponentFixture<UpcommingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcommingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcommingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
