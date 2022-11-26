import cookie from 'cookie';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', '', {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          expires: new Date(0),
          path: '/',
        })
      );
      res.status(200).json({ message: 'Success' });
    } catch (e) {
      res.status(500).json({ message: { err: ['Server Error'] } });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
// import cookie from 'cookie';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const resApi = await fetch(
//         'http://127.0.0.1:8000/user/delete_user_by_token',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             token: req.cookies.token,
//           }),
//         }
//       );

//       const data = await resApi.json();


//       if (resApi.status === 200) {
//         res.setHeader(
//           'Set-Cookie',
//           cookie.serialize('token', '', {
//             httpOnly: true,
//             secure: process.env.NODE_ENV !== 'development',
//             expires: new Date(0),
//             path: '/',
//           })
//         );

//         res.status(200).json({ message: 'Success' });
//       } else {
//         res.status(resApi.status).json({ message: data });
//       }
//     } catch (e) {
//       res.status(500).json({ message: { err: ['Server Error'] } });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).json({ message: `Method ${req.method} not allowed` });
//   }
// }
