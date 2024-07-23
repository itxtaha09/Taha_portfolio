import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'public', 'assets', 'cv.pdf');

    if (fs.existsSync(filePath)) {
        res.setHeader('Content-Disposition', 'attachment; filename=cv.pdf');
        res.setHeader('Content-Type', 'application/pdf');
        fs.createReadStream(filePath).pipe(res);
    } else {
        res.status(404).json({ message: 'File not found' });
    }
}
