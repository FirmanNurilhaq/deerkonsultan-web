import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content', // Menandakan kita menggunakan file .md atau .mdx
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(), // Mengubah string tanggal di markdown menjadi object Date
        author: z.string(),
        image: z.string(),
    }),
});

export const collections = { blog };