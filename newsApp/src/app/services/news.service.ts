import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // private url = 'https://newsapi.org/v2/top-headlines';
  // private key = ;
  private data = [];
  constructor() { }

  fetchHeadlinesNews(country: string): any {
    const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=f7368915fb624144b95da6ee35409843';
    const req = new Request(url);
    fetch(req)
        .then((response) => response.json())
        .then(data => {
          this.setData(data.articles);
          return data.articles;
        });
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
