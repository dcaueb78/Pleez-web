import 'dotenv/config';

const api_key = process.env.PAGARME_KEY;
const pleez_recipient_id = process.env.PAGARME_ID;

export { api_key, pleez_recipient_id };
