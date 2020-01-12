import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeSimplSubmenuComponent } from './se-simpl-submenu.component';

describe('SeSimplsubmenuComponent', () => {
  let component: SeSimplSubmenuComponent;
  let fixture: ComponentFixture<SeSimplSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeSimplSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeSimplSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
