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
              { object: 'leaf', text: 'This is a paragraph ', marks: [] },
              {
                object: 'leaf',
                text: 'with',
                marks: [{ object: 'mark', type: 'bold', data: {} }],
              },
              { object: 'leaf', text: ' ', marks: [] },
              {
                object: 'leaf',
                text: 'some',
                marks: [{ object: 'mark', type: 'bold', data: {} }],
              },
              { object: 'leaf', text: ' ', marks: [] },
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
              { object: 'leaf', text: 'T', marks: [] },
              {
                object: 'leaf',
                text: 'h',
                marks: [{ object: 'mark', type: 'bold', data: {} }],
              },
              { object: 'leaf', text: 'is is another ', marks: [] },
              {
                object: 'leaf',
                text: 'paragraph with ',
                marks: [{ object: 'mark', type: 'bold', data: {} }],
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
                  {
                    object: 'leaf',
                    text: 'an inline',
                    marks: [{ object: 'mark', type: 'bold', data: {} }],
                  },
                  { object: 'leaf', text: ' citation', marks: [] },
                ],
              },
            ],
          },
          {
            object: 'text',
            leaves: [
              { object: 'leaf', text: ' and some other ', marks: [] },
              {
                object: 'leaf',
                text: 'stuff',
                marks: [{ object: 'mark', type: 'bold', data: {} }],
              },
              { object: 'leaf', text: '.', marks: [] },
            ],
          },
        ],
      },
    ], // end nodes array
  },
});

export default INITIAL_VALUE;
