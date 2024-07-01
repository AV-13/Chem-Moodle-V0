import { shapes } from '@joint/core';

export const WireLink = new shapes.standard.Link({
    attrs: {
        line: {
            stroke: 'black',
            strokeWidth: 2,
            targetMarker: {
                'type': 'path',
                'd': 'M 10 -5 0 0 10 5 Z',
                'stroke': 'black',
                'fill': 'black'
            }
        }
    },
    router: { name: 'manhattan' },
    connector: { name: 'rounded' }
});
