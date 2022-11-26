import cookie from 'cookie';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    if (!req.cookies.token) {
      res.status(403).json({ message: 'ورود نا موفق یکبار دیگر تلاش کنید' });
      return;
    }
    try {
      const resApi = await fetch('http://127.0.0.1:8000/user/check_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: req.cookies.token,
        }),
      });

      const data = await resApi.json();
    //   console.log(resApi.status)
      if (resApi.status == 200) {  
        res.status(200).json({ user: data });
        // passing user data
      } else {
        res.status(resApi.status).json({ message: data });
      }
    } catch (e) {
      // console.log(e)
      res.status(500).json({ message: { err: ['Server Error'] } });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
