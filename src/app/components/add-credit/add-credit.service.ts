import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AddCreditService {

    public url: string;

    constructor(
        private _http: Http
    ) {
        this.url = 'http://ar-node-stripe.herokuapp.com/api';
    }

    public charge(creditNameOnCard: string,
                  creditCardNumber: string,
                  creditCardExpMonth: number,
                  creditCardExpYear: number,
                  creditCardCvc: number,
                  currency: string,
                  amount: number) {

        let body = `creditNameOnCard=${creditNameOnCard}`;
            body += `&creditCardNumber=${creditCardNumber}`;
            body += `&creditCardExpMonth=${creditCardExpMonth}`;
            body += `&creditCardExpYear=${creditCardExpYear}`;
            body += `&creditCardCvc=${creditCardCvc}`;
            body += `&currency=${currency}`;
            body += `&amount=${amount}`;

        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        return this._http
                   .post(`${this.url}/charge`, body, { headers })
                   .map(res => res.json());
    }
}