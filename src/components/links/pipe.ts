import { shapes } from '@joint/core';

export const PipeLink = new shapes.standard.Link({
    attrs: {
        line: {
            stroke: 'blue',
            strokeWidth: 2,
            strokeDasharray: '5 5',
            targetMarker: {
                'type': 'path',
                'd': 'M 10 -5 0 0 10 5 Z',
                'stroke': 'blue',
                'fill': 'blue'
            }
        }
    },
    router: { name: 'manhattan' },
    connector: { name: 'rounded' }
});
