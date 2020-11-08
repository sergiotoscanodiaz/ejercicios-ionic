import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ejercicio02Page } from './ejercicio02.page';

describe('Ejercicio02Page', () => {
  let component: Ejercicio02Page;
  let fixture: ComponentFixture<Ejercicio02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejercicio02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
