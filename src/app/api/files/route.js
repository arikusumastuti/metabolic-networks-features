import { getDriveClient } from '@/lib/google';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const folderId = searchParams.get('folderId');
    const keyword = searchParams.get('keyword') ?? '';
    const pageSize = searchParams.get('pageSize') ?? 100;
    const pageToken = searchParams.get('pageToken') ?? '';

    if (!folderId) {
        return new Response(JSON.stringify({ error: 'Missing folderId' }), {
            status: 400,
        });
    }

    const drive = getDriveClient();

    try {
        // Mengambil file dalam folder
        const response = await drive.files.list({
            q: `'${folderId}' in parents and name contains '${keyword}'`,  // Filter berdasarkan folder ID
            fields: 'nextPageToken, files(id, name, webViewLink)',  // Ambil ID dan nama file
            pageSize: pageSize,
            pageToken: pageToken,
        });
        
        // Kirim daftar file sebagai response
        // res.status(200).json(response.data.files);
        return Response.json(response.data);
    } catch (error) {
        // res.status(500).json({ error: 'Something went wrong' });
        return Response.json({ error: error, message: 'Something went wrong' });
    }

}