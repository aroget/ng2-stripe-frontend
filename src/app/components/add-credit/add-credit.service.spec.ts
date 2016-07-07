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
            expect(conn.request.url).toBe(expectedUrl);


            let response = new ResponseOptions({
              body: {
                    'id': 'ch_18ULl4K2nRJGfedZeIfqeUQm',
                    'object': 'charge',
                    'amount': 20000,
                    'amount_refunded': 0,
                    'application_fee': null,
                    'balance_transaction': 'txn_18ULl4K2nRJGfedZY0ySPlDI',
                    'captured': true,
                    'created': 1467833550,
                    'currency': 'cad',
                    'customer': null,
                    'description': 'New credit for Andres Roget',
                    'destination': null,
                    'dispute': null,
                    'failure_code': null,
                    'failure_message': null,
                    'fraud_details': {},
                    'invoice': null,
                    'livemode': false,
                    'metadata': {},
                    'order': null,
                    'paid': true,
                    'receipt_email': null,
                    'receipt_number': null,
                    'refunded': false,
                    'refunds': {
                        'object': 'list',
                        'data': [],
                        'has_more': false,
                        'total_count': 0,
                        'url': '/v1/charges/ch_18ULl4K2nRJGfedZeIfqeUQm/refunds'
                    },
                    'shipping': null,
                    'source': {
                        'id': 'card_18ULl3K2nRJGfedZqSMOYAW5',
                        'object': 'card',
                        'address_city': null,
                        'address_country': null,
                        'address_line1': null,
                        'address_line1_check': null,
                        'address_line2': null,
                        'address_state': null,
                        'address_zip': null,
                        'address_zip_check': null,
                        'brand': 'Visa',
                        'country': 'US',
                        'customer': null,
                        'cvc_check': 'pass',
                        'dynamic_last4': null,
                        'exp_month': 3,
                        'exp_year': 2019,
                        'fingerprint': '13WDPGreoPoVcBam',
                        'funding': 'credit',
                        'last4': '4242',
                        'metadata': {},
                        'name': null,
                        'tokenization_method': null
                    },
                    'source_transfer': null,
                    'statement_descriptor': null,
                    'status': 'succeeded'
                }
            });

            conn.mockRespond(new Response(response));
        });
        let result;
        addCreditService.charge(dummyCharge).subscribe((res) => {
            result = res;
        });

        tick();
        expect(result.amount).toBe(20000);
        expect(result.captured).toBe(true);
        expect(result.paid).toBe(true);
    })));
});
