import { dia, shapes } from '@joint/core';
import { getSelectedShape, resetSelectedShape } from './toolbar';
export function createPaper(container: HTMLElement) {
    const namespace = shapes;
    const graph = new dia.Graph({}, { cellNamespace: namespace });
    const paper = new dia.Paper({
        el: container,
        model: graph,
        width: container.clientWidth,
        height: container.clientHeight,
        gridSize: 9,
        drawGrid: {
            name: 'mesh',
            args: { color: 'gray', thickness: 0.5 }
        },
        background: { color: '#FAFBFB' },
        cellViewNamespace: namespace,
        defaultRouter: {
        name: 'manhattan',
        args: {
            step: 10
            }
        }
    });
    paper.on('blank:pointerdown', (event, x, y) => {
        const ShapeClass = getSelectedShape();
        if (ShapeClass) {
            const shape = new ShapeClass();
            shape.position(x, y);
            shape.resize(100, 100); // Ajuster la taille si nécessaire
            shape.addTo(graph);
            resetSelectedShape();
            console.log('Shape added to graph at:', x, y);
        }
    });
    window.addEventListener('resize', () => {
        paper.setDimensions(container.clientWidth, container.clientHeight);
    });
    return { paper, graph };
}
