import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTheTodosComponent } from './all-the-todos.component';

describe('AllTheTodosComponent', () => {
  let component: AllTheTodosComponent;
  let fixture: ComponentFixture<AllTheTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTheTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTheTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
