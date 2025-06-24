import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import type { string } from "astro:schema";
import type { count } from "console";
import type { Value } from "sass";

export const ctaSection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean().default(true),
    title: z.string(),
    bg_image: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

export const missionVisionSection = defineCollection({
  loader: glob({
    pattern: "mission-vision.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean().default(true),
    subtitle: z.string(),
    title: z.string(),
    content: z.string(),
    image: z.string(),
    accordion: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      )
      .optional(),
  }),
});

export const ourExpertiseSection = defineCollection({
  loader: glob({
    pattern: "our-expertise.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean().default(true),
    subtitle: z.string(),
    title: z.string(),
    content: z.string(), 
    funfacts: z
      .array(
        z.object({
          icon: z.string(),
          title: z.string(),
          count: z.number(),
        }),
      )
      .optional(),
    progressbar: z
      .array(
        z.object({
          title: z.string(),
          progress: z.string(),
        }),
      )
      .optional(),
  }),
});

export const testimonialSection = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean().default(true),
    title: z.string(),
    subtitle: z.string(),
    image: z.string(),
    list: z
      .array(
        z.object({
          name: z.string(),
          content: z.string(),
          designation: z.string(),
        }),
      )
      .optional(),
  }),
});
