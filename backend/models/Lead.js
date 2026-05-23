import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({

    businessName: {
        type: String
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    website: {
        type: String
    },

    country: {
        type: String
    },

    source: {
        type: String
    },

    contacted: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
});

export default mongoose.model('Lead', LeadSchema);