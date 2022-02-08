import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputEmailComponent } from './ngx-input-email.component';

describe('NgxInputEmailComponent', () => {
  let component: NgxInputEmailComponent;
  let fixture: ComponentFixture<NgxInputEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxInputEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInputEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
