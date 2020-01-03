import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeSubmenuComponent } from './se-submenu.component';

describe('SeSubmenuComponent', () => {
  let component: SeSubmenuComponent;
  let fixture: ComponentFixture<SeSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
