import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit {
	page = 'one';
	constructor(private titleService: Title) {
	}

	ngOnInit() {
	    this.titleService.setTitle('Tin tức & sự kiện');
	}
 
}
