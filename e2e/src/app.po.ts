import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo(): Promise<unknown> {
		return browser.get(browser.baseUrl) as Promise<unknown>;
	}

	getTableTitle(): Promise<string> {
		return element(by.css('.page-container .mat-table .title-row .title-wrap .text')).getText() as Promise<string>;
	}
}
