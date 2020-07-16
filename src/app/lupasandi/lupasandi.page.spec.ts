import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LupasandiPage } from './lupasandi.page';

describe('LupasandiPage', () => {
  let component: LupasandiPage;
  let fixture: ComponentFixture<LupasandiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LupasandiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LupasandiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
