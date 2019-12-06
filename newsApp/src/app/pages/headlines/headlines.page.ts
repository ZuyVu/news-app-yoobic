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
  news = [];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.fetchHeadlinesNews(this.country)
    .then(data => {
      this.news = data.articles;
      this.newsService.setData(data.articles);
    });
  }

  changeCountry() {
    this.newsService.fetchHeadlinesNews(this.country)
    .then(data => {
      this.news = data.articles;
      this.newsService.setData(data.articles);
    });
  }

}
