import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudypageComponent } from './studypage.component';

describe('StudypageComponent', () => {
  let component: StudypageComponent;
  let fixture: ComponentFixture<StudypageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudypageComponent]
    });
    fixture = TestBed.createComponent(StudypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
