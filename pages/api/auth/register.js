import cookie from 'cookie';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const resApi = await fetch('http://127.0.0.1:8000/user/create_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: req.body.name,
          last_name: req.body.lname,
          email: req.body.email,
          password: req.body.password,
          phone_number: req.body.cellphone,
        }),
      });

      const data = await resApi.json();

      if (resApi.status == 201) {
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('token', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
          })
        );
        console.log('phone in regi backend',data.phone_number)
        res.status(201).json({ user: data });
      } else  {
        // console.log('Error in register api/register');
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
