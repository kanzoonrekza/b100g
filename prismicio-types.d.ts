// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = HeroSectionSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type MarketingPageDocumentDataSlicesSlice = HeroSectionSlice;

/**
 * Content for Marketing Page documents
 */
interface MarketingPageDocumentData {
  /**
   * Slice Zone field in *Marketing Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: marketing_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<MarketingPageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Marketing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: marketing_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Marketing Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: marketing_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Marketing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: marketing_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Marketing Page document from Prismic
 *
 * - **API ID**: `marketing_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MarketingPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<MarketingPageDocumentData>,
    "marketing_page",
    Lang
  >;

/**
 * Item in *Navigation → Nav Group*
 */
export interface NavigationDocumentDataNavGroupItem {
  /**
   * Nav Label field in *Navigation → Nav Group*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.nav_group[].nav_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nav_label: prismic.KeyTextField;

  /**
   * Nav Link field in *Navigation → Nav Group*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.nav_group[].nav_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  nav_link: prismic.ContentRelationshipField<"marketing_page">;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Home Navigation field in *Navigation*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.home_navigation
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  home_navigation: prismic.ContentRelationshipField<"homepage">;

  /**
   * Nav Group field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.nav_group[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  nav_group: prismic.GroupField<Simplify<NavigationDocumentDataNavGroupItem>>;

  /**
   * Button Link field in *Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.button_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Label field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.button_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

export type AllDocumentTypes =
  | HomepageDocument
  | MarketingPageDocument
  | NavigationDocument;

/**
 * Primary content in *TextSection → Primary*
 */
export interface HeroSectionSliceDefaultPrimary {
  /**
   * Hero Title field in *TextSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.primary.hero_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_title: prismic.KeyTextField;

  /**
   * Description field in *TextSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for TextSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSectionSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *TextSection → Primary*
 */
export interface HeroSectionSliceCtaButtonPrimary {
  /**
   * Hero Title field in *TextSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.primary.hero_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_title: prismic.KeyTextField;

  /**
   * Description field in *TextSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Button Link field in *TextSection → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Label field in *TextSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;
}

/**
 * CTA Button variation for TextSection Slice
 *
 * - **API ID**: `ctaButton`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSliceCtaButton = prismic.SharedSliceVariation<
  "ctaButton",
  Simplify<HeroSectionSliceCtaButtonPrimary>,
  never
>;

/**
 * Slice variation for *TextSection*
 */
type HeroSectionSliceVariation =
  | HeroSectionSliceDefault
  | HeroSectionSliceCtaButton;

/**
 * TextSection Shared Slice
 *
 * - **API ID**: `hero_section`
 * - **Description**: HeroSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSlice = prismic.SharedSlice<
  "hero_section",
  HeroSectionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      MarketingPageDocument,
      MarketingPageDocumentData,
      MarketingPageDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataNavGroupItem,
      AllDocumentTypes,
      HeroSectionSlice,
      HeroSectionSliceDefaultPrimary,
      HeroSectionSliceCtaButtonPrimary,
      HeroSectionSliceVariation,
      HeroSectionSliceDefault,
      HeroSectionSliceCtaButton,
    };
  }
}
