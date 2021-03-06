import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'country' })
export class CountryPipe implements PipeTransform {
	countries = [{
		iso2: 'mt',
		name: 'Malta'
	},
	{
		iso2: 'gb',
		name: 'United Kingdom'
	},
	{
		iso2: 'gb-1',
		name: 'England'
	},
	{
		iso2: 'es',
		name: 'Spain'
	},
	{
		iso2: 'it',
		name: 'Italy'
	},
	{
		iso2: 'fr',
		name: 'France'
	}];

	transform(code: string): string {
		return this.countries.find(c => c.iso2 === code).name;
	}
}
