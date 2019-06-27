import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsTextComponent } from './columns-text.component';

describe('ColumnsTextComponent', () => {
  let component: ColumnsTextComponent;
  let fixture: ComponentFixture<ColumnsTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnsTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
