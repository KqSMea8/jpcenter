import { Component } from '@angular/core';
import { Http } from '@angular/http';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'project';
  constructor() { }
  ngOnInit() {

	// if ($(window).width() <= 992) {

	// 	$('.navbar-collapse').find('.drop-down').removeClass('drop-down').addClass('drop-down-mobile');

	// 	$('.drop-down-mobile .nav-link').click(function(e){

	// 		e.preventDefault();
	// 		$(this).siblings('.sub-menu').toggleClass('sub-menu-open');
	// 		$(this).children('.fa').toggleClass('sub-menu-active');
	// 		$('.drop-down-mobile .nav-link').not(this).siblings('.sub-menu').removeClass('sub-menu-open');
	// 		$('.drop-down-mobile .nav-link').not(this).find('.fa').removeClass('sub-menu-active');
	// 	});
	// }
  }
}
