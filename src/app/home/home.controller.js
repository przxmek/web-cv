export default class HomeController {
    constructor() {
        this.person = {};
        this.person.name = 'Przemek Kuczyński';
        this.person.dateOfBirth = '11/06/1993';
        this.person.address = 'ul. W. Okińskiego 1 m. 68\n 02-115 Warszawa\n Polska';
        this.person.phone = '609368705';
        this.person.emial = 'przemek@pkuczynski.pl';

        this.description = {};
        this.description.before = 'The experienced';
        this.description.attrs = ['UI/UX Designer', 'Web Designer', 'Photographer'];
        this.description.after = null;
    }
}

// HomeController.$inject = ['randomNames'];
