import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// HTTP built-in service
import { HttpClient } from '@angular/common/http';

// Jquery lib
import * as $ from 'jquery';
// axios
import axios from 'axios';
// session
// import session from 'client-sessions';
// Service
import { GetDataService } from './../../services/get-data/get-data.service';
import { checkAndUpdateBinding } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ GetDataService ]
})

export class HeaderComponent implements OnInit {
 
  headerURL: string;
  data: any;
  constructor(
    private http: HttpClient,
    private _getDataService: GetDataService
  ) { }
  
  ngOnInit() {
    this.headerURL = this._getDataService.getHeaderURL();

    $(document).ready(function () {
      // Exchange between sticky layer
      var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
          stickyWrapper.height(stickyHeight);
          sticky.addClass("is-sticky");
        } else {
          sticky.removeClass("is-sticky");
          stickyWrapper.height('auto');
        }
      };

      // Tìm tất cả các phần tử data-toggle = "sticky-onscroll"
      $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        // chèn phần tử ẩn để di chuyển trên thực tế trên trang
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); 
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Resize element when scroll
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
          stickyToggle(sticky, stickyWrapper, $(this));
        });
        stickyToggle(sticky, stickyWrapper, $(window));
      });
              
      $(document).ready(function($) {
        var topFixMenu = $("#logo-hide");
        $(window).scroll(function() {
          // Show scroll top icon if height scrolled greater than 50px
 if($(this).scrollTop() > 50) {              
         topFixMenu.show();
            } else {
              topFixMenu.hide();
          }
        }
        )                  
      })
    });

    this.http.get(this.headerURL).subscribe(data => {
      this.data = data;
      console.log(this.data);
    });  
     
  }
}
