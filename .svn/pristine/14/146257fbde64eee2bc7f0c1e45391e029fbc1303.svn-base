import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

import * as $ from 'jquery';

// CKEditor
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { GetDataService } from './../../services/get-data/get-data.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [ GetDataService ]
})
export class EditorComponent implements OnInit {

	public Editor = ClassicEditor;
	content: any;
	public model = {
        editorData: '<p>Nhập nội dung...</p>'
    };
	
	constructor(
		private http: HttpClient,
		private _getDataService: GetDataService
	) { }

	ngOnInit() {
	}

	// Get content in editor area
	public onChange( { editor }: ChangeEvent ) {
        const data = editor.getData();
        this.content = data;
    }

    // Post content in editor area to server
	postArticle() {
		let articleContent = {
			slug: "/test",
			tags: "Tin tức, sự kiện",
			content: this.content,
			name: $('#article-title').val()
		};
		this.http.post(this._getDataService.getEventsURL(), articleContent).subscribe();
	}

}
