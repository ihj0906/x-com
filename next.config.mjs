/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // static mode
    async rewrites() {
        return [
            {
                source: '/upload/:slug',
                destination: 'http://localhost:9090/upload/:slug', // Matched parameters can be used in the destination
            },
        ];
    },
};

export default nextConfig;
