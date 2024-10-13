import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { TutorialDetailsComponent } from './tutorial-details.component';
import { TutorialService } from '../../services/tutorial.service'; // Import your TutorialService
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { of } from 'rxjs'; // Import of to create an observable

describe('TutorialDetailsComponent', () => {
  let component: TutorialDetailsComponent;
  let fixture: ComponentFixture<TutorialDetailsComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Add this line to import HttpClientTestingModule
      declarations: [TutorialDetailsComponent],
      providers: [
        TutorialService, // Provide the TutorialService if it's being used in the component
        {
          provide: ActivatedRoute, // Provide a mock for ActivatedRoute
          useValue: { params: of({ id: 1 }) } // Mock params observable
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialDetailsComponent);
    component = fixture.componentInstance;
    component.isTest = true;
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Test if the component is created successfully
  }); 
});
