import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSystemComponent } from './number-system.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('NumberSystemComponent', () => {
  let component: NumberSystemComponent;
  let fixture: ComponentFixture<NumberSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberSystemComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
