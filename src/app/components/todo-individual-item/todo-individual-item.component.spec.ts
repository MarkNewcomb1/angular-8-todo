import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIndividualItemComponent } from './todo-individual-item.component';

describe('TodoIndividualItemComponent', () => {
  let component: TodoIndividualItemComponent;
  let fixture: ComponentFixture<TodoIndividualItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoIndividualItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoIndividualItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
