const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra()

module.exports = {
    async redirects() {
        return [
            {
                source: '/enfim',
                destination: 'https://discord.gg/yc9qtFc',
                permanent: false
            }
        ];
    }
};
