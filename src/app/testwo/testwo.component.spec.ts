import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestwoComponent } from './testwo.component';

describe('TestwoComponent', () => {
  let component: TestwoComponent;
  let fixture: ComponentFixture<TestwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
