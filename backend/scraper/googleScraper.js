import validateEmail from '../utils/validateEmail.js';

async function scrapeEmails(query) {

    const sampleEmails = [
        {
            businessName: query,
            email: 'test1@gmail.com',
            website: 'example2.com',
            country: 'India',
            source: 'Google Search'
        }
    ];

    return sampleEmails.filter(
        item => validateEmail(item.email)
    );
}

export default scrapeEmails;