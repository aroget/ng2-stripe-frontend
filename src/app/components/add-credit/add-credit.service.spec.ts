// import { AddCreditService } from './add-credit.service';
// import {  ResponseOptions,
//           Response,
//           Http,
//           BaseRequestOptions,
//           RequestMethod
// } from '@angular/http';

// import { describe,
//          expect,
//          it,
//          inject,
//          fakeAsync,
//          beforeEachProviders
// } from '@angular/core/testing';

// import { provide } from '@angular/core';
// import { MockBackend, MockConnection } from '@angular/http/testing';

// const mockHttpProvider = {
//   deps: [ MockBackend, BaseRequestOptions ],
//   useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
//     return new Http(backend, defaultOptions);
//   }
// };

// const mockCreditCardData = ['Andres Roget', '424242424242424242', 12, 2019, 123, 'cad', 300];


// describe('Add Credit Service', () => {
//   beforeEachProviders(() => {
//     return [
//       MockBackend,
//       BaseRequestOptions,
//       provide(Http, mockHttpProvider),
//       AddCreditService
//     ];
//   });

//   it('should charge the right amount',
//     inject(
//       [AddCreditService, MockBackend],
//       fakeAsync((service: AddCreditService, backend: MockBackend) => {
//         backend.connections.subscribe((connection: MockConnection) => {

//           expect(connection.request.method).toBe(RequestMethod.Post);
//           expect(connection.request.url).toBe(
//             'http://localhost:5000/api/charge');

//         });

//         service.charge('Andres Roget', '424242424242424242', 12, 2019, 123, 'cad', 300);
//         console.log('charging');
//       })));
// });
