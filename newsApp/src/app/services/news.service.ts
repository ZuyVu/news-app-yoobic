import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // private url = 'https://newsapi.org/v2/top-headlines';
  // private key = ;
  private data = [];
  constructor(private http: HttpClient) { }

  fetchHeadlinesNews(country: string): Promise<any> {
    const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=' + country + '&' +
          'apiKey=f7368915fb624144b95da6ee35409843';
    const req = new Request(url);
    return fetch(req)
        .then((response) => response.json());
  }

  fetchWithHttp(country: string): Observable<any> {
    const url = 'https://newsapi.org/v2/top-headlines?' +
      'country=' + country + '&' +
      'apiKey=f7368915fb624144b95da6ee35409843';

    // this.http
    //   .get(url)
    //   .pipe(tap(res =>))

    return this.http
              .get(url)
              .pipe(map(results => results['articles']));

  }

  setData(data: any) {
    this.data = data;
  }
 
  getData(id) {
    // return this.data[id];
    return this.search(id, this.data);
  }

  search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].url === nameKey) {
            return myArray[i];
        }
    }
}


}
