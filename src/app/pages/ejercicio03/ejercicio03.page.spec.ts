import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ejercicio03Page } from './ejercicio03.page';

describe('Ejercicio03Page', () => {
  let component: Ejercicio03Page;
  let fixture: ComponentFixture<Ejercicio03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejercicio03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
