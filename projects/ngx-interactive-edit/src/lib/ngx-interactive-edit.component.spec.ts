import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInteractiveEditComponent } from './ngx-interactive-edit.component';

describe('NgxInteractiveEditComponent', () => {
  let component: NgxInteractiveEditComponent;
  let fixture: ComponentFixture<NgxInteractiveEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxInteractiveEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInteractiveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
