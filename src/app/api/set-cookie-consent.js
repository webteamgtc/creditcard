import { serialize } from 'cookie';

export default function handler(req, res) {
  res.setHeader(
    'Set-Cookie',
    serialize('cookiesAccepted', 'true', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    })
  );
  res.status(200).json({ success: true });
}
