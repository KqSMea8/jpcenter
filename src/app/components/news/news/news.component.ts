import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  img1 ='https://japancenter.qnu.edu.vn/images/home/card-img-1.png';
  img2='https://japancenter.qnu.edu.vn/images/home/card-img-2.png';
  img3='https://japancenter.qnu.edu.vn/images/home/card-img-3.png';
  img4='https://japancenter.qnu.edu.vn/images/home/card-img-4.png';
 

   dataURL = "http://localhost:1337/news";
   dataFromServer;
  constructor( private http: HttpClient) { 
    this.http.get(this.dataURL).subscribe(data => {
        this.dataFromServer = data;
        console.log(this.dataFromServer);
    });
  }

  ngOnInit() {
  }

}
