import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  User
} from 'src/app/components/model/user';
import {
  Observable
} from 'rxjs';
import { Retirement } from '../components/model/retirement';
import { Equipments } from '../components/model/equipments';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) {}

  register(user: User): Observable < User > {
    return this.http.post < User > ('/api/Alta', user)
  }

  login(email: string, password: string): Observable < User > {
    return this.http.get < User > (`/api/Login?email=${email}&password=${password}`)
  }

  request(retirement: Retirement): Observable < Retirement > {
    return this.http.post < Retirement > (`/api/Retirement?clientId=${retirement.clientId}&mark=${retirement.mark}&model=${retirement.model}&failure=${retirement.failure}` , retirement)
  }

  status(id: number) {
    return this.http.get < Equipments > (`/api/Equipment?clientId=${id}`)
  }
}
