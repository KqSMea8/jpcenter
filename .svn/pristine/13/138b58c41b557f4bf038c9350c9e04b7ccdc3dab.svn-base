import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
 introductionType = 'one';
 public page='one';
constructor(private titleService: Title) {
}
  ngOnInit() {
  	this.titleService.setTitle('Giới thiệu');
  }

}
