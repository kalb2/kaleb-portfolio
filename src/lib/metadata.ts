import type { Metadata } from "next";
import { site } from "@/data/site";

type PageMetadataInput = {
  /** Short page title. The root layout template adds " | Kaleb Jensen". */
  title?: string;
  description: string;
  /** Path of the page, e.g. "/about". Resolved against metadataBase. */
  path: string;
  /**
   * Set false when the route segment has its own opengraph-image and
   * twitter-image files, so those are used instead of the site-wide card.
   */
  defaultImages?: boolean;
};

export const baseOpenGraph = {
  type: "website",
  siteName: site.name,
  locale: "en_US",
} as const;

/**
 * Site-wide share images (src/app/opengraph-image.tsx and twitter-image.tsx).
 * Listed explicitly because a page-level openGraph object would otherwise
 * drop the root image.
 */
const defaultImageAlt = `${site.name} | Enterprise CSM Who Builds`;
const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: defaultImageAlt,
};
const defaultTwitterImage = { ...defaultOgImage, url: "/twitter-image" };

/**
 * Per-page metadata: title, description, canonical URL, and matching
 * Open Graph and Twitter card fields. Open Graph and Twitter objects are
 * replaced (not merged) by child segments in Next, so the site-wide
 * fields are repeated here.
 */
export function pageMetadata({
  title,
  description,
  path,
  defaultImages = true,
}: PageMetadataInput): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : site.title;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      ...baseOpenGraph,
      title: fullTitle,
      description,
      url: path,
      ...(defaultImages ? { images: [defaultOgImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(defaultImages ? { images: [defaultTwitterImage] } : {}),
    },
  };
}
