import fs from 'fs';
import path from 'path';

const getAllowedEmails = () => {
  const filePath = path.join(process.cwd(), 'data', 'emails.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
};

export async function POST(request) {
  const { email } = await request.json();
  const allowedEmails = getAllowedEmails();

  if (allowedEmails.includes(email)) {
    return new Response(null, { status: 200 });
  } else {
    return new Response('Invalid email', { status: 400 });
  }
}
