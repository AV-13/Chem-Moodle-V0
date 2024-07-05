import {dia, linkTools, shapes} from '@joint/core';
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
        width: container.clientWidth,
        height: container.clientHeight,
        gridSize: 9,
        // TODO make drawGrid dynamic mb with a button ? check specifications if required
        drawGrid: {
            name: 'mesh',
            args: { color: 'gray', thickness: 0.5 }
        },
        background: { color: '#FAFBFB' },
        cellViewNamespace: namespace,
        defaultRouter: {
            name: 'manhattan',
        },
        linkPinning: false,
        snapLinks: { radius: 50 },
        defaultLink: () => createDefaultLink(),
        // TODO linkMove allows to move the label of a link, mb possible to move the label and the link associated, currently the link stays and the label moves
        //  https://docs.jointjs.com/learn/features/shapes/links/tools/#interaction
        interactive: true
    });
    paper.on('link:mouseenter', (linkView) => {
        linkView.addTools(
            new dia.ToolsView({
                tools: [
                    new linkTools.Remove(),
                    new linkTools.TargetArrowhead(),
                ],
            })
        );
    });
    paper.on('link:mouseleave', (linkView) => {
        linkView.removeTools();
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
    // Catching event for sketcher class example
    paper.on('element:pointermove',  (elementView, evt, x, y) => {
        console.log("x : ", x, " y : ", y);
    });
    return { paper, graph };
}
export { paper, graph };
