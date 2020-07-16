import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasukPage } from './masuk.page';

describe('MasukPage', () => {
  let component: MasukPage;
  let fixture: ComponentFixture<MasukPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasukPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MasukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
