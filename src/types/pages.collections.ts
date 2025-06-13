import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const about = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    title: z.string(),
    bg_image: z.string().optional(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    draft: z.boolean().optional(),
    image: z.string().optional(),

    philosophy: z
      .object({
        enable: z.boolean().default(true),
        subtitle: z.string().optional(),
        title: z.string(),
        content: z.string(),
        image: z.string().optional(),
      })
      .optional(),

    ceo: z
      .object({
        enable: z.boolean().default(true),
        bg_image: z.string().optional(),
        title: z.string(),
        content: z.string(),
        signature: z.string().optional(),
        name: z.string(),
        designation: z.string(),
      })
      .optional(),

    mission: z
      .object({
        enable: z.boolean().default(true),
        content_from_file: z.string().optional(),
      })
      .optional(),

    funfacts: z
      .object({
        enable: z.boolean().default(true),
        bg_image: z.string().optional(),
        counter: z
          .array(
            z.object({
              title: z.string(),
              icon: z.string(),
              count: z.number(),
            }),
          )
          .optional(),
      })
      .optional(),
  }),
});

export const quality = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/quality" }),
  schema: z.object({
    title: z.string(),
    bg_image: z.string().optional(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    draft: z.boolean().optional(),
    image: z.string().optional(),

    philosophy: z
      .object({
        enable: z.boolean().default(true),
        subtitle: z.string().optional(),
        title: z.string(),
        content: z.string(),
        image: z.string().optional(),
      })
      .optional(),

    ceo: z
      .object({
        enable: z.boolean().default(true),
        bg_image: z.string().optional(),
        title: z.string(),
        content: z.string(),
        signature: z.string().optional(),
        name: z.string(),
        designation: z.string(),
      })
      .optional(),

    mission: z
      .object({
        enable: z.boolean().default(true),
        content_from_file: z.string().optional(),
      })
      .optional(),

    funfacts: z
      .object({
        enable: z.boolean().default(true),
        bg_image: z.string().optional(),
        counter: z
          .array(
            z.object({
              title: z.string(),
              icon: z.string(),
              count: z.number(),
            }),
          )
          .optional(),
      })
      .optional(),
  }),
});

export const authors = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/authors" }),
  schema: z.object({
    title: z.string(),
    bg_image: z.string().optional(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    email: z.string().email().optional(),
    image: z.string().optional(),
    social: z
      .array(
        z.object({
          icon: z.string(),
          name: z.string(),
          link: z.string(),
        }),
      )
      .optional(),
  }),
});

export const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    bg_image: z.string().optional(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    author: z.string().default("Admin"),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

export const contact = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    bg_image: z.string().optional(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    image: z.string().optional(),

    contact_info: z
      .array(
        z.object({
          name: z.string(),
          icon: z.string(),
          content: z.string(),
        }),
      )
      .optional(),
  }),
});

export const homepage = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner_slider: z
      .object({
        enable: z.boolean().default(true),
        slider_item: z.array(
          z.object({
            bg_image: z.string(),
            subtitle: z.string(),
            title: z.string(),
            content: z.string(),
            paginationIcon: z.string(),
            paginationName: z.string(),
            button: z
              .object({
                enable: z.boolean().default(true),
                label: z.string(),
                link: z.string(),
              })
              .optional(),
          }),
        ),
      })
      .optional(),
    industries: z
      .object({
        enable: z.boolean().default(true),
        title: z.string(),
        subtitle: z.string(),
      })
      .optional(),

    service: z
      .object({
        enable: z.boolean().default(true),
        title: z.string(),
        subtitle: z.string(),
      })
      .optional(),

    about: z
      .object({
        enable: z.boolean().default(true),
        bg_image: z.string().optional(),
        title: z.string(),
        content: z.string(),
        bulletPoint: z.array(z.string()).optional(),
        button: z
          .object({
            enable: z.boolean().default(true),
            label: z.string(),
            link: z.string(),
          })
          .optional(),
      })
      .optional(),

    our_expertise: z
      .object({
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
      })
      .optional(),

    project: z
      .object({
        enable: z.boolean().default(true),
        title: z.string(),
        subtitle: z.string(),
      })
      .optional(),

    mission: z
      .object({
        enable: z.boolean().default(true),
        content_from_file: z.string().optional(),
      })
      .optional(),

    promo_video: z
      .object({
        enable: z.boolean().default(true),
        title: z.string(),
        bg_image: z.string().optional(),
        videoURL: z.string(),
        videoTitle: z.string(),
      })
      .optional(),

    testimonial: z
      .object({
        enable: z.boolean().default(true),
        content_from_file: z.string().optional(),
      })
      .optional(),

    call_to_action: z
      .object({
        enable: z.boolean().default(true),
        content_from_file: z.string().optional(),
      })
      .optional(),

    blog: z
      .object({
        enable: z.boolean().default(true),
        title: z.string(),
        subtitle: z.string(),
      })
      .optional(),

    clients_logo_slider: z
      .object({
        enable: z.boolean().default(true),
        clientLogos: z.array(
          z.object({
            logo: z.string(),
            link: z.string(),
          }),
        ),
      })
      .optional(),
  }),
});

export const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    bg_image: z.string().optional(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const pricing = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/pricing" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    bg_image: z.string().optional(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    image: z.string().optional(),

    pricingTable: z.array(
      z.object({
        title: z.string(),
        icon: z.string(),
        value: z.string(),
        unit: z.string(),
        link: z.string(),
        features: z.array(z.string()),
      }),
    ),
  }),
});

export const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/projects" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    bg_image: z.string().optional(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    image: z.string(),
    live_demo: z.string().optional(),
    case_study: z.string().optional(),
    category: z.string().optional(),

    overview: z
      .array(
        z.object({
          label: z.string(),
          data: z.string(),
        }),
      )
      .optional(),
  }),
});
export const industries = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/services" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    bg_image: z.string().optional(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    short_description: z.string().optional(),
    image: z.string().optional(),
    icon: z.string().optional(),
    brochure: z.string().optional(),
    regular_day: z.string().optional(),
    regular_time: z.string().optional(),
    half_day: z.string().optional(),
    half_time: z.string().optional(),
    off_day: z.string().optional(),

    satisfied_clients: z
      .object({
        enable: z.boolean().default(true),
        bg_image: z.string().optional(),
        subtitle: z.string(),
        title: z.string(),
        content: z.string(),
        logo: z.array(z.string()),
      })
      .optional(),

    testimonial: z
      .object({
        enable: z.boolean().default(true),
        content_from_file: z.string().optional(),
      })
      .optional(),
  }),
});
export const services = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/services" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    bg_image: z.string().optional(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    short_description: z.string().optional(),
    image: z.string().optional(),
    icon: z.string().optional(),
    brochure: z.string().optional(),
    regular_day: z.string().optional(),
    regular_time: z.string().optional(),
    half_day: z.string().optional(),
    half_time: z.string().optional(),
    off_day: z.string().optional(),

    satisfied_clients: z
      .object({
        enable: z.boolean().default(true),
        bg_image: z.string().optional(),
        subtitle: z.string(),
        title: z.string(),
        content: z.string(),
        logo: z.array(z.string()),
      })
      .optional(),

    testimonial: z
      .object({
        enable: z.boolean().default(true),
        content_from_file: z.string().optional(),
      })
      .optional(),
  }),
});
export const servicesMain = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/servicesMain" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    bg_image: z.string().optional(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    short_description: z.string().optional(),
    image: z.string().optional(),
    icon: z.string().optional(),
    brochure: z.string().optional(),
    regular_day: z.string().optional(),
    regular_time: z.string().optional(),
    half_day: z.string().optional(),
    half_time: z.string().optional(),
    off_day: z.string().optional(),

    satisfied_clients: z
      .object({
        enable: z.boolean().default(true),
        bg_image: z.string().optional(),
        subtitle: z.string(),
        title: z.string(),
        content: z.string(),
        logo: z.array(z.string()),
      })
      .optional(),

    testimonial: z
      .object({
        enable: z.boolean().default(true),
        content_from_file: z.string().optional(),
      })
      .optional(),
  }),
});

export const team = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/team",
  }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    meta_title: z.string().optional(),
    designation: z.string().optional(),
    image: z.string(),
    bg_image: z.string(),
    cv: z.string().optional(),
    bio: z.string().optional(),
    information: z
      .array(
        z.object({
          label: z.string(),
          icon: z.string(),
          data: z.string(),
        }),
      )
      .optional(),
    contacts: z
      .array(
        z.object({
          icon: z.string(),
          id: z.string(),
        }),
      )
      .optional(),
    skill: z
      .array(
        z.object({
          label: z.string(),
          percentage: z.string(),
        }),
      )
      .optional(),
    social: z
      .array(
        z.object({
          icon: z.string(),
          link: z.string(),
        }),
      )
      .optional(),
  }),
});
