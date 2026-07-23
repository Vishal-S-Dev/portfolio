import type { NextConfig } from "next";
import path from "path";

/**
 * GitHub Pages project site: https://<user>.github.io/portfolio
 * Set GITHUB_PAGES=true in CI to enable basePath/assetPrefix.
 * User sites (<user>.github.io) should leave GITHUB_PAGES unset and avoid basePath.
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "portfolio";
const isUserSite = repoName.endsWith(".github.io");
const basePath = isGithubPages && !isUserSite ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  outputFileTracingRoot: path.join(__dirname),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
