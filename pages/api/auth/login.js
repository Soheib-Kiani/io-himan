import cookie from 'cookie';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const resApi = await fetch('http://127.0.0.1:8000/user/login_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: req.body.password,
          phone_number: req.body.cellphone,
        }),
      });

      const data = await resApi.json();

      if (resApi.status == 200) {
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('token', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
          })
        );
        res.status(200).json({ user: data });
        // passing user data
      } else if (resApi.status === 400) {
        res.status(resApi.status).json({ message: data });
      } else {
        res.status(resApi.status).json({ message: data });
      }
    } catch (e) {
      // console.log(e.message);
      res.status(500).json({ message: { err: ['Server Error'] } });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
