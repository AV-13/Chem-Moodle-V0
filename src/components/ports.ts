
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
