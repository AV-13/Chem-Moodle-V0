import { dia, shapes } from '@joint/core';
import { getSelectedShape, resetSelectedShape, editExistingToolbar } from './toolbar';
import {createDefaultLink} from "./links.ts";
import {enableHighlightOnHover} from "./hightlighter.ts";


let paper: dia.Paper;
let graph: dia.Graph


export function createPaper(container: HTMLElement) {
    const namespace = shapes;
    graph = new dia.Graph({}, { cellNamespace: namespace });
    paper = new dia.Paper({
        el: container,
        model: graph,
        // Width and height paper properties are only in px by default so we use this to be able to use %
        width: container.clientWidth,
        height: container.clientHeight,
        gridSize: 9,
        // TODO make drawGrid dynamic mb with a button ? check specifications
        drawGrid: {
            name: 'mesh',
            args: { color: 'gray', thickness: 0.5 }
        },
        background: { color: '#FAFBFB' },
        cellViewNamespace: namespace,
        defaultRouter: {
            name: 'manhattan',
        },
        // snapLinks locks our link to the E/S point  when we're close enough
        snapLinks: true,
        // Todo change this default link to pipe link or wire link depending what selection the user choose
        defaultLink: () => createDefaultLink(),
    });
    enableHighlightOnHover(paper);
    paper.on('blank:pointerdown', (_event, x, y) => {
        const ShapeClass = getSelectedShape();
        if (ShapeClass) {
            const shape = new ShapeClass();
            shape.position(x, y);
            // TODO Maybe do this somewhere else (in the SVG shape declaration ?), bc the equipments will not have a unique size
            shape.resize(100, 100);
            shape.addTo(graph);
            const existingElements = graph.getElements();
            editExistingToolbar(existingElements);
            resetSelectedShape();
        }
    });
    return { paper, graph };
}
export { paper, graph };
