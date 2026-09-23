import { defineType, defineField } from 'sanity'

export const packageType = defineType({
  name: 'mentoriaPackage',
  title: 'Mentoria Package',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
    defineField({ name: 'price', title: 'Price', type: 'string' }),
    defineField({ name: 'duration', title: 'Duration', type: 'string' }),
    defineField({ name: 'sessions', title: 'Sessions', type: 'number' }),
    defineField({ name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
  ]
})
