import { dia, shapes } from '@joint/core';

export const portsIn = {
    position: {
        name: 'left'
    },
    attrs: {
        portBody: {
            magnet: true,
            r: 5,
            fill: '#FF3366'
        }
    },
    label: {
        position: {
            name: 'left',
            args: { y: 20 }
        },
        markup: [{
            tagName: 'text',
            selector: 'label',
            className: 'label-text'
        }]
    },
    markup: [{
        tagName: 'circle',
        selector: 'portBody'
    }]
};

export const portsOut = {
    position: {
        name: 'right'
    },
    attrs: {
        portBody: {
            magnet: true,
            r: 5,
            fill: '#3399FF'
        }
    },
    label: {
        position: {
            name: 'right',
            args: { y: 6 }
        },
        markup: [{
            tagName: 'text',
            selector: 'label',
            className: 'label-text'
        }]
    },
    markup: [{
        tagName: 'circle',
        selector: 'portBody'
    }]
};

export const DoggoElement = dia.Element.define('custom.DoggoElement', {
    attrs: {
        body: {
            refWidth: '100%',
            refHeight: '100%',
            fill: 'none',
            cursor: 'pointer'
        },
        image: {
            'xlink:href': 'assets/svg/dog.svg',
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
        }
    },
    markup: [{
        tagName: 'rect',
        selector: 'body'
    }, {
        tagName: 'image',
        selector: 'image'
    }]
}, {
    markup: '<g><rect/><image/><circle/></g>'
});

export const PiggyElement = dia.Element.define('custom.PiggyElement', {
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
        }
    },
    markup: [{
        tagName: 'rect',
        selector: 'body'
    }, {
        tagName: 'image',
        selector: 'image'
    }]
}, {
    markup: '<g><rect/><image/><circle/></g>'
});

// Ajoutez les autres éléments de la même manière

export function createShapes(paper: dia.Paper) {
    const graph = paper.model;

    const rect1 = new shapes.standard.Rectangle({
        position: { x: 25, y: 25 },
        size: { width: 180, height: 50 },
        attrs: {
            body: { stroke: '#C94A46', rx: 3, ry: 3 },
            label: { text: 'CHEM', fill: '#353535' }
        }
    });
    rect1.addTo(graph);

    const rect2 = new shapes.standard.Rectangle({
        position: { x: 50, y: 150 },
        size: { width: 180, height: 50 },
        attrs: {
            body: { stroke: '#C94A46', rx: 1, ry: 1 },
            label: { text: 'MOODLE', fill: '#353535' }
        }
    });
    rect2.addTo(graph);

    const cuteDog = new DoggoElement();
    cuteDog.position(300, 50);
    cuteDog.resize(100, 100);
    cuteDog.addTo(graph);

    const cutePiggy = new PiggyElement();
    cutePiggy.position(300, 200);
    cutePiggy.resize(100, 100);
    cutePiggy.addTo(graph);

    // Ajoutez les autres éléments de la même manière

    return { rect1, rect2, cuteDog, cutePiggy };
}
