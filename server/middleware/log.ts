export default defineEventHandler((event) => {
  if (event.path.startsWith('/api/'))
    console.log(`${new Date().toISOString()} ${event.method} ${event.path} status=${event.res.statusCode}`);
});
