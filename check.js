import fs from 'fs';
const files = fs.readdirSync('public').filter(f => f.endsWith('.mp4')).map(f => 'public/' + f);
files.forEach(f => {
  const stats = fs.statSync(f);
  console.log(`${f}: ${stats.mtimeMs}`);
});
