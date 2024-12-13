import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [

// header schema type
    {
      title: 'Header Types',
      name: 'header',
      type: 'document',
      fields: [
        
        {
          title: 'Heading',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Link-1',
          name: 'linkone',
          type: 'string',
        },
        {
          title: 'Link-2',
          name: 'linktwo',
          type: 'string',
        },
        {
          title: 'Link-3',
          name: 'linkthree',
          type: 'string',
        },
        {
          title: 'Link-4',
          name: 'linkfour',
          type: 'string',
        },
        {
          title: 'Button',
          name: 'btn',
          type: 'string',
        },

        {
          title: 'Logo Picture',
          name: 'logoPic',
          type: 'image',
          options: {
            hotspot: true, // Allows for focus cropping
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Attribute',
            },
          ],
        },

      ],
    },



    // Hero schema type
    {
      title: 'Hero Types',
      name: 'hero',
      type: 'document',
      fields: [
        {
          title: 'Heading1',
          name: 'heading1',
          type: 'string',
        },
        {
          title: 'Heading2',
          name: 'heading2',
          type: 'string',
        },
        {
          title: 'Description',
          name: 'desc',
          type: 'string',
        },
        {
          title: 'ButtonOne',
          name: 'btnone',
          type: 'string',
        },
        {
          title: 'ButtonTwo',
          name: 'btntwo',
          type: 'string',
        },
        {
          title: 'Hero Picture',
          name: 'heroPic',
          type: 'image',
          options: {
            hotspot: true, // Allows for focus cropping
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Attribute',
            },
          ],
        },
      ],
    },

// testimonial schema type
    {
      title: 'Testimonial Types',
      name: 'testimonial',
      type: 'document',
      fields: [
        {
          title: 'Paragraph1',
          name: 'para1',
          type: 'string',
        },
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',
        },
        {
          title: 'Paragraph2',
          name: 'para2',
          type: 'string',
        },
        {
          title: 'Testimonial PIcture',
          name: 'testimonialpic',
          type: 'image',
          options: {
            hotspot: true, // Allows for focus cropping
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Attribute',
            },
          ],
        },
        
  ],
},






  ]}