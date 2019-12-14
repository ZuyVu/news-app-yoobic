import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private endpoint = 'https://newsapi.org/v2/top-headlines?';
  private key = 'f7368915fb624144b95da6ee35409843';
  private data = [];
  constructor(private http: HttpClient) { }

  // Fetch using httpClientModule & return an observable
  fetchWithHttp(country: string): Observable<any> {
    const url = this.endpoint +
      'country=' + country + '&' +
      'apiKey=' + this.key;

    return this.http
              .get(url)
              .pipe(map(results => results['articles']));
  }

  // Another way to fetch data
  fetchHeadlinesNews(country: string): Promise<any> {
    const url = this.endpoint +
      'country=' + country + '&' +
      'apiKey=' + this.key;
    const req = new Request(url);
    return fetch(req)
      .then((response) => response.json());
  }

  setData(data: any) {
    this.data = data;
  }

  getData(id) {
    return this.search(id, this.data);
  }

  // Helper function which searches for an article in the data array
  search(nameKey, myArray){
    for (const elem of myArray) {
      if (elem.url === nameKey) {
        return elem;
      }
    }
    return null; // Item not Found
}


}
