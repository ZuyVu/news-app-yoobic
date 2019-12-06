import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // private url = 'https://newsapi.org/v2/top-headlines';
  // private key = ;
  private data = [];
  constructor() { }

  fetchHeadlinesNews(country: string): Promise<any> {
    const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=' + country + '&' +
          'apiKey=f7368915fb624144b95da6ee35409843';
    const req = new Request(url);
    return fetch(req)
        .then((response) => response.json());
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
