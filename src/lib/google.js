import { google } from 'googleapis';

export function getDriveClient() {
  const apiKey = process.env.GOOGLE_API_KEY;

  return google.drive({ version: 'v3', auth: apiKey });
}
