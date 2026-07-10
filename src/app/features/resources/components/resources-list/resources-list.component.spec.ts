import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourcesListComponent } from './resources-list.component';
import { Resource } from '@shared/models/resource.model';

describe('ResourcesListComponent', () => {
  let component: ResourcesListComponent;
  let fixture: ComponentFixture<ResourcesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with all resources', () => {
    expect(component.selectedTab).toBe(component.TYPE_ALL);
    expect(component.resources$).toBeDefined();
    expect(component.resources$.length).toBeGreaterThan(0);
  });

  it('should filter resources by type', () => {
    const initialLength = component.resources$.length;
    component.filterHandler('lib');
    fixture.detectChanges();

    expect(component.selectedTab).toBe('lib');
    expect(component.resources$.length).toBeLessThan(initialLength);
    expect(component.resources$.every((r: Resource) => r.type === 'lib')).toBe(true);
  });

  it('should reset to all resources when type is all', () => {
    component.filterHandler('lib');
    fixture.detectChanges();
    const filteredLength = component.resources$.length;

    component.filterHandler('all');
    fixture.detectChanges();

    expect(component.selectedTab).toBe('all');
    expect(component.resources$.length).toBeGreaterThan(filteredLength);
  });

  it('should track by id', () => {
    const resource: Resource = { id: 1, title: 'Test', description: 'Test', link: 'http://test.com', type: 'lib' };
    expect(component.trackByFn(0, resource)).toBe(1);
  });
});
