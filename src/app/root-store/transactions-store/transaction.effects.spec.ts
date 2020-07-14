import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TransactionEffects } from './transaction.effects';

describe('TransactionEffects', () => {
  let actions$: Observable<any>;
  let effects: TransactionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TransactionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TransactionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
