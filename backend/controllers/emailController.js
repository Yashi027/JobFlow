import Lead from '../models/Lead.js';
import sendEmail from '../utils/sendEmail.js';

export const sendBulkEmails = async (req, res) => {

    try {

        const { fileName } = req.body;

        const leads = await Lead.find({
            contacted: false
        });

        let successCount = 0;

        for (const lead of leads) {

            try {

                await sendEmail({

                    to: lead.email,

                    subject: 'Singing Bowl Product Presentation',

                    text:
                        `Hello ${lead.businessName || ''},

Please find our attachment.

Thank you.`,

                    attachment: {
                        path: `./uploads/${fileName}`
                    }
                });

                lead.contacted = true;

                await lead.save();

                successCount++;

            } catch (emailError) {

                console.log(
                    `Failed for ${lead.email}`,
                    emailError.message
                );
            }
        }

        res.status(200).json({
            message: 'Bulk emails processed',
            totalSent: successCount
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};