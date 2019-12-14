import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
  country = 'gb'; // Default country is UK
  news: Observable<any>;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    // this.newsService.fetchHeadlinesNews(this.country)
    // .then(data => {
    //   this.news = data.articles;
    //   this.newsService.setData(data.articles);
    // });

    this.getNews();

  }

  getNews() {
    this.news = this.newsService.fetchWithHttp(this.country);
    this.news.subscribe((data) => {
      this.newsService.setData(data);
    });
  }

  doRefresh(event) {
    this.getNews();
    setTimeout(() => {
      event.target.complete();
    }, 2000);

  }

  // onRefresh(event) {

  // }

}
