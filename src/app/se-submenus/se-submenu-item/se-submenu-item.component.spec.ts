import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeSubmenuItemComponent } from './se-submenu-item.component';

describe('SeSubmenuItemComponent', () => {
  let component: SeSubmenuItemComponent;
  let fixture: ComponentFixture<SeSubmenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeSubmenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeSubmenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
