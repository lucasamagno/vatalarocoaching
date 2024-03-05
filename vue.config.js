module.exports = {
  // Correctly configure the publicPath for GitHub Pages deployment
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vatalarocoaching/' // Use your GitHub repository name here
    : '/',
};
