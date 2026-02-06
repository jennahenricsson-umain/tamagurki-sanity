
import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'sprite',
  title: 'Sprite',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'speech',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'frames',
      title: 'Frames (Animation)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: {
        layout: 'grid', 
      },
    }),
    defineField({
      name: 'speech',
      type: 'string',
      validation: (rule) => rule.required(),
    })
    ],
})