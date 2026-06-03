import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const photoType = defineType({
    name: 'photo',
    title: 'Photo',
    type: 'document',
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'images',
            title: 'Photos',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: 'alt',
                            type: 'string',
                            title: 'Caption',
                        }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'images.0',
        },
        prepare(selection) {
            return { ...selection }
        },
    },
})
