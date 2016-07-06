import {
  BaseRequestOptions,
  Response,
  ResponseOptions,
  ConnectionBackend,
  Http
} from '@angular/http';

import {
  it,
  expect,
  describe,
  beforeEachProviders,
  inject,
  fakeAsync,
  tick
} from '@angular/core/testing';

import 'rxjs/add/operator/map';

import { MockBackend } from '@angular/http/testing';
import { provide } from '@angular/core';
import { AddCreditService } from './add-credit.service';

const dummyCharge = { creditNameOnCard: 'Andres Roget',
                      creditCardNumber: '4242424242424242',
                      creditCardExpMonth: '3',
                      creditCardExpYear: '2019',
                      creditCardCvc: '123',
                      currency: 'cad',
                      amount: '200'
};

describe('Api Service', () => {

    beforeEachProviders(() => {
        return [
            MockBackend,
            BaseRequestOptions,
            AddCreditService,
            provide(
            Http, {
                useFactory: (
                mockbackend: ConnectionBackend,
                defaultOptions: BaseRequestOptions
                ) => {
                return new Http(mockbackend, defaultOptions);
                },
                deps: [MockBackend, BaseRequestOptions]
            }
            )
        ];
    });

    it('should charge', fakeAsync(inject([AddCreditService, MockBackend], (addCreditService, mockBackend) => {
        const expectedUrl = 'http://localhost:5000/api/charge';

        mockBackend.connections.subscribe((conn) => {
            // expect(true).toBe(false);
            expect(conn.request.url).toBe(expectedUrl);


            // let response = new ResponseOptions({
            //   body: {
            //     query: {
            //       searchInfo: { totalhits: 1 }
            //     },
            //     search: [
            //       {
            //         ns: 0,
            //         title: 'Angular',
            //         size: 840,
            //         wordcount: 115
            //       }
            //     ]
            //   }
            // });

            // conn.mockRespond(new Response(response));
        });
        let result;
        addCreditService.charge(dummyCharge).subscribe((res) => {
            result = res;
        });

        tick();
    })));
});
