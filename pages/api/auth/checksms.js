// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       try {
//         const resApi = await fetch('http://127.0.0.1:8000/user/check_sms_verify', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             phone_number: req.body.cellphone,
//           }),
//         });
  
//         const data = await resApi.json();
//         console.log('Phon number in api/cecksms ', data.phone_number);
  
//         if (resApi.status == 200) {
//           res.status(200).json({ user: data });
//           // passing user data
//         } else {
//           res.status(resApi.status).json({ message: data });
//         }
//       } catch (e) {
//         console.log('error in check sms',e.message);
//         res.status(500).json({ message: { err: ['Server Error'] } });
//       }
//     } else {
//       res.setHeader('Allow', ['POST']);
//       res.status(405).json({ message: `Method ${req.method} not allowed` });
//     }
//   }
  