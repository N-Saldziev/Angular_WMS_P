import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private apiUrl = "https://retoolapi.dev/RizkVt/data";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  authenticateUser(username: string, password: string): Observable<boolean> {
    return this.getProducts().pipe(
      map((data: any) => {
        const matchingUser = data.users.find((user: any) => user.username === username && user.password === password);
        return !!matchingUser; // Returns true if matching user is found, otherwise false
      })
    );
  }
}

//   Endpoint URL - "https://retoolapi.dev/RizkVt/data"
//   GET - curl "https://api-generator.retool.com/RizkVt/data"
//   GET Filter - curl "https://api-generator.retool.com/RizkVt/data?Firstname=value"
//   GET by Id - curl "https://api-generator.retool.com/RizkVt/data/1"
//   GET paginate - curl "https://api-generator.retool.com/RizkVt/data?_page=2&_limit=10"
//   POST - curl -X POST -H 'Content-Type: application/json' -d '{"key":"value"}' https://api-generator.retool.com/RizkVt/data
//   PUT - curl -X PUT -H 'Content-Type: application/json' -d '{"key":"value"}' https://api-generator.retool.com/RizkVt/data/1
//   PATCH - curl -X PATCH -H 'Content-Type: application/json' -d '{"key":"value"}' https://api-generator.retool.com/RizkVt/data/1
//   DELETE - curl -X DELETE https://api-generator.retool.com/RizkVt/data/1
