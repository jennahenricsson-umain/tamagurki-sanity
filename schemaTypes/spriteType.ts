
import {defineField, defineType} from 'sanity'

export const spriteType = defineType({
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
      name: 'speech-bubble',
      type: 'array',
      of: [{ type: 'string', options: { hotspot: true } } ],
      options: {
        layout: 'grid', 
      },
    }),
    defineField({
      name: 'frames',
      title: 'Frames (Animation)',
      type: 'array',
of: [
        {
          type: 'image',
          options: {
            hotspot: true // Tillåter dig att välja fokuspunkt i bilden
          },
          fields: [
            {
              name: 'frameName',
              type: 'string',
              title: 'Frame Namn',
              description: 'Används för att identifiera framen i animationen',
            }
          ]
        }
      ],
      options: {
        layout: 'grid', 
      },
    }),
    ],
})