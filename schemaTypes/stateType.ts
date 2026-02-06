
import {defineField, defineType} from 'sanity'

export const stateType = defineType({
  name: 'state',
  title: 'State',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'frames',
      type: 'image',
    }),
    defineField({
        name: 'speechBubble',
        type: 'string',
    })
  ],
})