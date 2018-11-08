import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-career-opportunities',
  templateUrl: './career-opportunities.component.html',
  styleUrls: ['./career-opportunities.component.css']
})
export class CareerOpportunitiesComponent implements OnInit {
japan='one'
public page='one';
constructor(private titleService: Title) {
}

  ngOnInit() {
  	 this.titleService.setTitle('Cơ hội nghề nghiệp');
  }

}
