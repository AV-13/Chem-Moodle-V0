import { dia } from '@joint/core';
import { portsIn, portsOut } from '../ports';

export const PiggyElement = dia.Element.define('PigElement', {
    attrs: {
        body: {
            refWidth: '100%',
            refHeight: '100%',
            fill: 'none',
            cursor: 'pointer'
        },
        image: {
            'xlink:href': 'assets/svg/pig.svg',
            refWidth: '100%',
            refHeight: '100%',
            preserveAspectRatio: 'xMidYMid meet',
            cursor: 'move'
        }
    },
    ports: {
        groups: {
            'in': portsIn,
            'out': portsOut
        },
        items: [
            { group: 'in', id: 'in1' },
            { group: 'out', id: 'out1' }
        ]
    },
    markup: [{
        tagName: 'rect',
        selector: 'body'
    }, {
        tagName: 'image',
        selector: 'image'
    }]
});
