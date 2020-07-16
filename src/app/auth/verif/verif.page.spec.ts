import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifPage } from './verif.page';

describe('VerifPage', () => {
  let component: VerifPage;
  let fixture: ComponentFixture<VerifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
