export default class HomeController {
    constructor() {
        this.person = {};
        this.person.name = 'Przemek Kuczyński';
        this.person.dateOfBirth = '11/06/1993';
        this.person.address = 'ul. W. Okińskiego 1 m. 68, 02-115 Warszawa, Polska';
        this.person.phone = '+48 609368705';
        this.person.email = 'przemek@pkuczynski.pl';

        this.aboutme = {};
        this.aboutme.subtitle = 'Hard-working person on the way to the success...';
        // this.aboutme.subtitleSmall = 'Customize your website as you want using different colors and 100% free fonts.';
        this.aboutme.features = [
            {
                title: 'Creative',
                icon: 'flaticon-photo246',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet hendrerit dolor, at lacinia mi.'
            },
            {
                title: 'Motivated',
                icon: 'flaticon-stats47',
                desc: 'Curabitur sit amet laoreet leo. Maecenas eget pulvinar arcu. Quisque fermentum nulla non urna placerat.'
            },
            {
                title: 'Punctual',
                icon: 'flaticon-clocks18',
                desc: 'Sed scelerisque elit eget eros consectetur varius. Suspendisse laoreet rhoncus pellentesque.'
            },
        ];

        this.aboutme.experience = {
            link: '#experience-more',
            jobs: [
                {
                    company: 'ABC Brodcast Inc. New York.',
                    position: 'Junior Designer',
                    date: {begin: '02/2008', end: '04/2010'},
                    link: 'http://abc.com'
                },
                {
                    company: 'Leo Burnett London Office',
                    position: 'Senior Designer',
                    date: {begin: '004/2010', end: '06/2012'},
                },
                {
                    company: 'Google Inc. Dublin.',
                    position: 'UI/UX Designer',
                    date: {begin: '06/2012', end: 'present'},
                    link: ''
                }
            ]
        };

        this.aboutme.skills = [
            {
                title: 'Prototyping',
                percent: 72.5,
                desc: 'A prototype is an early sample, model, or release of a product built to test ...',
                link: '#prototyping-skill'
            },
            {
                title: 'Design',
                percent: 94.5,
                desc: 'Design is the creation of a plan or convention for the construction of an object ...',
                link: '#design-skill'
            },
            {
                title: 'Development',
                percent: 30.5,
                desc: 'Design is the creation of a plan or convention for the construction of an object ... ',
                link: '#development-skill'
            }

        ];
    }
}

// HomeController.$inject = ['randomNames'];
