import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';
import { ActivatedRoute } from '@angular/router';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ MenuBarComponent ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent implements OnInit{
  photoUrl: string = "";
  title: string = "";
  newsContent: string = "";
  date: string = "";
  writer: string = "";
  estimate: string = "";
  category: string = "";
  private id: string | null = ""

  constructor(
    private route: ActivatedRoute
  ){};

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"));
    this.getDataNews(this.id)
  };

  getDataNews(id: string | null) {
      const result = dataFake.filter( dataNews => dataNews.id == id )[0];
      
      this.photoUrl = result.photoUrl;
      this.title = result.title;
      this.newsContent = result.contentNews;
      this.date = result.date;
      this.writer = result.writer;
      this.estimate = result.estimate;
      this.category = result.category;
  }
}
