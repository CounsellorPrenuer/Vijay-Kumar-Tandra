import { defineType, defineField } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeading', title: 'Hero Heading', type: 'string' }),
    defineField({ name: 'heroDescription', title: 'Hero Description', type: 'text' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
  ]
})
