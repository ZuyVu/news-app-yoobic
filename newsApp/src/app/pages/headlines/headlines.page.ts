import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
  private country = 'us';
  news = [];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news = this.newsService.fetchHeadlinesNews(this.country);
  }

}
