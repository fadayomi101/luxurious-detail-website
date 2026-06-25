import http from 'http';
http.get('http://localhost:3000/about-banner.png', (res) => {
  console.log(res.statusCode);
  let data = [];
  res.on('data', chunk => data.push(chunk));
  res.on('end', () => {
    const buf = Buffer.concat(data);
    console.log('Bytes:', buf.length);
    console.log('Content:', buf.slice(0, 50).toString());
  });
});
