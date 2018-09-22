import { Value } from 'slate';

const INITIAL_VALUE = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                object: 'leaf',
                text: 'This is a paragraph with some ',
                marks: [],
              },
              {
                object: 'leaf',
                text: 'bold',
                marks: [{ object: 'mark', type: 'bold', data: {} }],
              },
              { object: 'leaf', text: ' and ', marks: [] },
              {
                object: 'leaf',
                text: 'underlined',
                marks: [{ object: 'mark', type: 'underline', data: {} }],
              },
              { object: 'leaf', text: ' text.', marks: [] },
            ],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                object: 'leaf',
                text: 'This is another paragraph with ',
                marks: [],
              },
            ],
          },
          {
            object: 'inline',
            type: 'citation',
            data: { text: 'foo' },
            nodes: [
              {
                object: 'text',
                leaves: [
                  { object: 'leaf', text: 'an inline citation', marks: [] },
                ],
              },
            ],
          },
          {
            object: 'text',
            leaves: [
              { object: 'leaf', text: ' and some other stuff.', marks: [] },
            ],
          },
        ],
      },
    ], // end nodes array
  },
});

export default INITIAL_VALUE;
