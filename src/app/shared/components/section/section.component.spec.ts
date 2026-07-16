import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionComponent } from './section.component';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default classes', () => {
    expect(component.classes).toBe('');
  });

  it('should accept classes input', () => {
    component.classes = 'hero';
    fixture.detectChanges();
    expect(component.classes).toBe('hero');
  });
});
