
export const portsIn = {
    position: {
        name: 'left',
        args: {
            dx: -5
        }
    },
    attrs: {
        portBody: {
            magnet: true,
            r: 8,
            fill: '#FF3366'
        }
    },
    label: {
        position: {
            name: 'left',
            args: -20
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
        name: 'right',
        args: {
            dx: 5
        }
    },
    attrs: {
        portBody: {
            magnet: true,
            r: 8,
            fill: '#3399FF',
        }
    },
    label: {
        position: {
            name: 'right',
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
// label.position.args = position of the port
