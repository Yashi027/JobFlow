import Lead from '../models/Lead.js';
import scrapeEmails from '../scraper/googleScraper.js';
import { createObjectCsvWriter } from 'csv-writer';

export const searchLeads = async (req, res) => {

    try {

        const { keyword } = req.body;

        if (!keyword) {
            return res.status(400).json({
                error: 'Keyword is required'
            });
        }

        const scrapedLeads = await scrapeEmails(keyword);

        const savedLeads = [];

        for (const lead of scrapedLeads) {

            const existingLead =
                await Lead.findOne({ email: lead.email });

            if (!existingLead) {

                const newLead = await Lead.create(lead);

                savedLeads.push(newLead);
            }
        }

        res.status(200).json({
            total: savedLeads.length,
            leads: savedLeads
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};

export const exportCSV = async (req, res) => {

    try {

        const leads = await Lead.find();

        const csvWriter = createObjectCsvWriter({

            path: './exports/leads.csv',

            header: [
                { id: 'businessName', title: 'BUSINESS NAME' },
                { id: 'email', title: 'EMAIL' },
                { id: 'website', title: 'WEBSITE' },
                { id: 'country', title: 'COUNTRY' },
                { id: 'source', title: 'SOURCE' },
                { id: 'contacted', title: 'CONTACTED' }
            ]
        });

        await csvWriter.writeRecords(leads);

        res.download('./exports/leads.csv');

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};