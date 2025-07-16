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

    try {
        // Mengambil file dalam folder
        let query;
        if (keyword != '') {
            query = `'${folderId}' in parents and name contains '${keyword}'`  // Filter berdasarkan folder ID
        } else {
            query = `'${folderId}' in parents`  // Filter berdasarkan folder ID
        }

        const response = await fetch(`https://www.googleapis.com/drive/v3/files?key=${process.env.GOOGLE_API_KEY}&q=${query}&fields=nextPageToken, files(id, name, webViewLink)&pageSize=${pageSize}&pageToken=${pageToken}`, {method: "GET"})
        
        const json = await response.json()
        
        // Kirim daftar file sebagai response
        return Response.json(json);
    } catch (error) {
        // res.status(500).json({ error: 'Something went wrong' });
        return Response.json({ error: error, message: 'Something went wrong' });
    }

}