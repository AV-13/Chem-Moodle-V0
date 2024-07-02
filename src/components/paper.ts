import { dia, shapes } from '@joint/core';
import { getSelectedShape, resetSelectedShape, editExistingToolbar } from './toolbar';
let paper: dia.Paper;
let graph: dia.Graph
export function createPaper(container: HTMLElement) {
    const namespace = shapes;
    graph = new dia.Graph({}, { cellNamespace: namespace });
    paper = new dia.Paper({
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
            const existingElements = graph.getElements()
            console.log(graph.getElements());
            editExistingToolbar(existingElements);
            resetSelectedShape();
            console.log('Shape added to graph at:', x, y);
        }
    });
    window.addEventListener('resize', () => {
        paper.setDimensions(container.clientWidth, container.clientHeight);
    });
    return { paper, graph };
}
export { paper, graph };
