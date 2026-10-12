/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow the preview origin to fetch dev assets/HMR (sandbox only).
  ...(process.env.BASE44_PREVIEW_MODE === "1" && process.env.BASE44_PUBLIC_HOST_SUFFIX
    ? { allowedDevOrigins: [`3000-${process.env.BASE44_PUBLIC_HOST_SUFFIX}`] }
    : {}),
};

export default nextConfig;
