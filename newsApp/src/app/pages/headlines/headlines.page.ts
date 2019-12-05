import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
  private country = 'us';
  news: Observable<any>;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.fetchHeadlinesNews(this.country)
    .then(data => {
      this.news = data.articles;
    });
    // const url = 'https://newsapi.org/v2/top-headlines?' +
    //       'country=us&' +
    //       'apiKey=f7368915fb624144b95da6ee35409843';
    // const req = new Request(url);
    // fetch(req)
    //     .then((response) => response.json())
    //     .then(data => {
    //       this.news = (data.articles);
    //       this.newsService.setData(data.articles);
    //     });

  }

}
