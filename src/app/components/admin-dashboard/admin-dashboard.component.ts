import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as $ from 'jquery';

import { GetDataService } from './../../services/get-data/get-data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  providers: [ GetDataService ]
})
export class AdminDashboardComponent implements OnInit {

	content: any;
  fullContent: any = [];

  	constructor(
  		private http: HttpClient,
  		private _getDataService: GetDataService
  	) { }

  	ngOnInit() {
  		this.http.get(this._getDataService.getEventsURL())
  		.subscribe(data => {
  			for (let i = 0; i < data.length; i++) {
  				if ( data[i].Content.length > 100) {
            this.fullContent[i] = data[i].Content;
  					data[i].Content = data[i].Content.substr(0,100) + '...';
  				}
  			}
  			this.content = data;
  		});
  	}

    // Delete article
    deleteArticle(id: any, event: any) {
      let article = this._getDataService.getEventsURL() + '/' + id;
      let row = event.target.parentElement.parentElement;
      $(row).remove();
      return this.http.delete(article).subscribe();
    }

    // Edit article
    editArticle(content: any) {
      console.log(content);
    }

}
