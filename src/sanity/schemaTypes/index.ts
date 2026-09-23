import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import { homePage } from './homePage'
import { founder } from './founder'
import { service } from './service'
import { packageType } from './package'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, homePage, founder, service, packageType],
}
