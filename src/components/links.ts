import { dia } from '@joint/core';

export function createLinks(paper: dia.Paper, rect1: dia.Element, rect2: dia.Element, cuteDog: dia.Element, cutePiggy: dia.Element) {
    const graph = paper.model;

    const link1 = new dia.Link({
        source: { id: rect1.id },
        target: { id: rect2.id },
        router: { name: 'manhattan' },
        connector: { name: 'rounded' },
        attrs: {
            line: {
                stroke: 'black',
                strokeWidth: 2
            }
        }
    });
    link1.addTo(graph);

    const link2 = new dia.Link({
        source: { id: cuteDog.id, port: 'out' },
        target: { id: rect2.id, port: 'in' },
        router: { name: 'manhattan' },
        connector: { name: 'rounded' },
        attrs: {
            line: {
                stroke: 'red',
                strokeWidth: 2,
                strokeDasharray: '5 5',
                targetMarker: {
                    'type': 'path',
                    'd': 'M 10 -5 0 0 10 5 Z',
                    'stroke': 'red',
                    'fill': 'red'
                }
            }
        }
    });
    link2.addTo(graph);

    // Ajoutez les autres liens de la même manière
}
