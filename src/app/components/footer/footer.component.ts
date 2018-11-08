import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

// Service
import { GetDataService } from './../../services/get-data/get-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ GetDataService ]
})
export class FooterComponent implements OnInit {
  public logo ='./assets/images/logo.png';

  footerURL: string;
  footerData: any;

  //logoURL: string;
  //logo: any;

  constructor(
    private http: HttpClient,
    private http2: HttpClient,
    private _getDataService: GetDataService
  ) { }

  ngOnInit() {
    this.footerURL = this._getDataService.getFooterURL();
    //this.logoURL = this._getDataService.getLogoURL();

     //Scroll the mouse and call the scrollFunction
     window.onscroll = () => {
      scrollFunction()
    };

     function scrollFunction() {
         // Check the cursor current position 
         if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
             document.getElementById("backToTop").style.display = "block";
         } else {
             document.getElementById("backToTop").style.display = "none";
         }
     }

     // Click button to the top
     document.getElementById('backToTop').addEventListener("click", function(){
         document.body.scrollTop =  $("html, body").animate({ scrollTop: 0 }, "slow");
     });

    // Get infomation from strapi server
    this.http.get(this.footerURL).subscribe(data => {
      this.footerData = data;
      });
    }

    // Get  logo from strapi server
    // this.http.get(this.logoURL).then(dt => {
    //   this.logo = dt;
    //   console.log(this.logo);
    //   });
    // }

  // Change social icon color when hover on it
  changeIcon(icon: string) {
      if (icon === "facebook") {
        $('#facebook-icon').attr("src","./assets/images/facebook-logo-color.png");
      } else if (icon === "youtube") {
        $('#youtube-icon').attr("src","./assets/images/youtube-logo-color.png");
      } else if (icon === "facebook-normal") {
        $('#facebook-icon').attr("src","./assets/images/facebook.png");
      } else if (icon === "youtube-normal") {
        $('#youtube-icon').attr("src","./assets/images/youtube.png");
      }
  }
 
}