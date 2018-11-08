import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

	private serverURL: string;

	constructor() {
		this.serverURL = 'http://10.1.0.66:1337';
	}

	// Header URL
	getHeaderURL(): string {
		let headerURL = this.serverURL + '/headers';
		return headerURL;
	}

	// Footer URL
	getFooterURL(): string {
		let footerURL = this.serverURL + '/footers';
		return footerURL;
	}

	// Courses URL
	getCoursesURL(): string {
		let coursesURL = this.serverURL + '/courses';
		return coursesURL;
	}

	// Students URL
	getStudentsURL(): string {
		let studentsURL = this.serverURL + '/students';
		return studentsURL;
	}

	// Teachers URL
	getTeachersURL(): string {
		let teachersURL = this.serverURL + '/teachers';
		return teachersURL;
	}

	// Users URL
	getUsersURL(): string {
		let usersURL = this.serverURL + '/users';
		return usersURL;
	}

	// Contents URL
	getContentsURL(): string {
		let contentsURL = this.serverURL + '/contents';
		return contentsURL;
	}

	// Events URL
	getEventsURL(): string {
		let eventsURL = this.serverURL + '/events';
		return eventsURL;
	}

	// Classes URL
	getClassesURL(): string {
		let classesURL = this.serverURL + '/classes';
		return classesURL;
	}

	// Attendances URL
	getAttendancesURL(): string {
		let attendancesURL = this.serverURL + '/attendances';
		return attendancesURL;
	}

	// Logo URL
	getLogoURL(): string {
		let logosURL = this.serverURL + '/logos';
		return logosURL;
	}
}