import { defineType, defineField } from 'sanity'

export const founder = defineType({
  name: 'founder',
  title: 'Founder',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image' }),
    defineField({ name: 'biography', title: 'Biography', type: 'text' }),
  ]
})
