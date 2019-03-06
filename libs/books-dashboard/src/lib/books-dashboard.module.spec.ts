import { async, TestBed } from '@angular/core/testing';
import { BooksDashboardModule } from './books-dashboard.module';

describe('BooksDashboardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksDashboardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BooksDashboardModule).toBeDefined();
  });
});
