/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/upload/:slug',
                destination: `${process.env.PUBLIC_BASE_URL}/upload/:slug`, // Matched parameters can be used in the destination
            },
        ];
    },
};

export default nextConfig;
