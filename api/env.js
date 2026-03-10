module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/javascript')
  res.setHeader('Cache-Control', 'no-store')
  res.send(`
    window.ENV_SUPABASE_URL = '${process.env.NEXT_PUBLIC_SUPABASE_URL || ''}';
    window.ENV_SUPABASE_KEY = '${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''}';
  `)
}
