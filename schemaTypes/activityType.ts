
import {defineField, defineType} from 'sanity'

export const activityType = defineType({
  name: 'Activity',
  title: 'Activity',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
    name: 'activityStates',
    title: 'Välj States',
    type: 'array',
    of: [
      {
        type: 'reference',
        to: [{type: 'state'}]
      }
    ],

    validation: (rule) => rule.required().min(1),
}),
  ],
})