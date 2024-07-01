// import { dia, shapes } from "@joint/core";
//
// // Info utiles de la doc :
//
// // https://resources.jointjs.com/tutorial/special-attributes
// // 'd': 'M 10 -5 0 0 10 5 Z' C'est le "svg" de la flèche, pour avoir une flèche à double sens, on le rajoute dans l'attribut sourceMarker du link
//
//
// // create paper
// const namespace = shapes;
//
// const graph = new dia.Graph({}, { cellNamespace: namespace });
// const container = document.getElementById('paper');
// // On utilise clientWidth/clientHeight pour éviter le fonctionnement par défaut de joint et pour pouvoir mettre des height/width en %.
// const paper = new dia.Paper({
//     el: container,
//     model: graph,
//     width: container.clientWidth,
//     height: container.clientHeight,
//     gridSize: 9,
//     drawGrid: {
//         name: 'mesh', //
//         args: { color: 'gray', thickness: 0.5 } // Options de style de la grille
//     },
//     background: { color: '#FAFBFB' },
//     cellViewNamespace: namespace,    defaultRouter: {
//         name: 'manhattan',
//         args: {
//             step: 10
//         }
//     },
//     defaultConnector: {
//         name: 'rounded', // Vous pouvez utiliser 'normal' ou 'rounded' selon vos besoins
//         args: {
//             radius: 5
//         }
//     }
// });
//
// // ------------------ Définition des ports ------------------
// const portsIn = {
//     position: {
//         name: 'left'
//     },
//     attrs: {
//         portBody: {
//             magnet: true,
//             r: 5,
//             fill: '#FF3366'
//         }
//     },
//     label: {
//         position: {
//             name: 'left',
//             args: { y: 20 }
//         },
//         markup: [{
//             tagName: 'text',
//             selector: 'label',
//             className: 'label-text'
//         }]
//     },
//     markup: [{
//         tagName: 'circle',
//         selector: 'portBody'
//     }]
// };
//
// const portsOut = {
//     position: {
//         name: 'right'
//     },
//     attrs: {
//         portBody: {
//             magnet: true,
//             r: 5,
//             fill: '#3399FF'
//         }
//     },
//     label: {
//         position: {
//             name: 'right',
//             args: { y: 6 }
//         },
//         markup: [{
//             tagName: 'text',
//             selector: 'label',
//             className: 'label-text'
//         }]
//     },
//     markup: [{
//         tagName: 'circle',
//         selector: 'portBody'
//     }]
// };
// // ------------------ SVG DES ANIMAUX ------------------
// const DoggoElement = dia.Element.define('custom.DoggoElement', {
//     attrs: {
//         body: {
//             refWidth: '100%',
//             refHeight: '100%',
//             fill: 'none',
//             cursor: 'pointer'
//         },
//         image: {
//             'xlink:href': 'assets/svg/dog.svg',
//             refWidth: '100%',
//             refHeight: '100%',
//             preserveAspectRatio: 'xMidYMid meet',
//             cursor: 'move'
//         }
//     },
//     ports: {
//         groups: {
//             'in': portsIn,
//             'out': portsOut
//         }
//     }
// }, {
//     markup: [{
//         tagName: 'rect',
//         selector: 'body'
//     }, {
//         tagName: 'image',
//         selector: 'image'
//     }]
// });
// const PiggyElement = dia.Element.define('customPiggyElement', {
//     attrs: {
//         body: {
//             refWidth: '100%',
//             refHeight: '100%',
//             fill: 'none',
//             cursor: 'pointer'
//         },
//         image: {
//             'xlink:href': 'assets/svg/pig.svg',
//             refWidth: '100%',
//             refHeight: '100%',
//             preserveAspectRatio: 'xMidYMid meet',
//             cursor: 'move'
//         }
//     }
// }, {
//     markup: [{
//         tagName: 'rect',
//         selector: 'body'
//     }, {
//         tagName: 'image',
//         selector: 'image'
//     }]
// });
// const RabbitElement = dia.Element.define('customRabbitElement', {
//     attrs: {
//         body: {
//             refWidth: '100%',
//             refHeight: '100%',
//             fill: 'none',
//             cursor: 'pointer'
//         },
//         image: {
//             'xlink:href': 'assets/svg/rabbit.svg',
//             refWidth: '100%',
//             refHeight: '100%',
//             preserveAspectRatio: 'xMidYMid meet',
//             cursor: 'move'
//         }
//     }
// }, {
//     markup: [{
//         tagName: 'rect',
//         selector: 'body'
//     }, {
//         tagName: 'image',
//         selector: 'image'
//     }]
// });
// const ElephantElement = dia.Element.define('customElephantElement', {
//     attrs: {
//         body: {
//             refWidth: '100%',
//             refHeight: '100%',
//             fill: 'none',
//             cursor: 'pointer'
//         },
//         image: {
//             'xlink:href': 'assets/svg/elephant.svg',
//             refWidth: '100%',
//             refHeight: '100%',
//             preserveAspectRatio: 'xMidYMid meet',
//             cursor: 'move'
//         }
//     }
// }, {
//     markup: [{
//         tagName: 'rect',
//         selector: 'body'
//     }, {
//         tagName: 'image',
//         selector: 'image'
//     }]
// });
//
// // Ajouter des éléments SVG statiquement au graphe
// const rect1 = new shapes.standard.Rectangle();
// rect1.position(25, 25);
// rect1.resize(180,50);
// rect1.attr('body', { stroke: '#C94A46', rx: 3, ry: 3 });
// rect1.attr('label', { text: 'CHEM', fill: '#353535' });
// rect1.addTo(graph);
//
// const rect2 = new shapes.standard.Rectangle();
// rect2.position(50, 150);
// rect2.resize(180, 50);
// rect2.attr('body', { stroke: '#C94A46', rx: 1, ry: 1 });
// rect2.attr('label', { text: 'MOODLE', fill: '#353535' });
// rect2.addTo(graph);
//
// const cuteDog = new DoggoElement({
//     ports: {
//         items: [
//             { group: 'in', id: 'port1' },
//             { group: 'out', id: 'port2' }
//         ]
//     }
// });
// cuteDog.position(300, 50);
// cuteDog.resize(100, 100);
// cuteDog.addTo(graph);
//
// const cutePiggy = new PiggyElement();
// cutePiggy.position(300, 200);
// cutePiggy.resize(100, 100);
// cutePiggy.addTo(graph);
//
// const cuteRabbit = new RabbitElement();
// cuteRabbit.position(500, 50);
// cuteRabbit.resize(100, 100);
// cuteRabbit.addTo(graph);
//
// const cuteElephant = new ElephantElement();
// cuteElephant.position(500, 200);
// cuteElephant.resize(100, 100);
// cuteElephant.addTo(graph);
//
// // Ajouter des liens entre les éléments
// const link1 = new shapes.standard.Link();
// link1.source(rect1);
// link1.target(rect2);
// link1.router('orthogonal');
// link1.connector('normal', { cornerType: 'line' });
// link1.attr({
//     line: {
//         stroke: 'black',
//         strokeWidth: 2
//     }
// });
// link1.addTo(graph);
//
// const link2 = new shapes.standard.Link();
// link2.source(cuteDog, { port: 'port1' });
// link2.target(rect2);
// link2.router('orthogonal');
// link2.connector('normal', { cornerType: 'line' });
// link2.attr({
//     line: {
//         stroke: 'red',
//         strokeWidth: 2,
//         strokeDasharray: '5 5',
//         targetMarker: {
//             'type': 'path',
//             'd': 'M 10 -5 0 0 10 5 Z',
//             'stroke': 'red',
//             'fill': 'red'
//         }
//     }
// });
// link2.addTo(graph);
//
// const link3 = new shapes.standard.Link();
// link3.source(cutePiggy);
// link3.target(rect1);
// link3.router('orthogonal');
// link3.connector('normal', { cornerType: 'line' });
// link3.addTo(graph);
//
// const link4 = new shapes.standard.Link();
// link4.source(cuteRabbit);
// link4.target(cuteElephant);
// link4.router('orthogonal');
// link4.connector('normal', { cornerType: 'line' });
// link4.attr({
//     line: {
//         stroke: 'green',
//         strokeWidth: 2,
//         sourceMarker: {
//             'type': 'path',
//             'd': 'M 10 -5 0 0 10 5 Z',
//             'stroke': 'green',
//             'fill': 'green'
//         },
//         targetMarker: {
//             'type': 'path',
//             'd': 'M 10 -5 0 0 10 5 Z',
//             'stroke': 'green',
//             'fill': 'green'
//         }
//     }
// });
// link4.addTo(graph);
//
// // Eviter qu'on puisse bouger les éléments hors du cadre
// paper.on('element:pointermove', function(elementView, evt, x, y) {
//     const bbox = elementView.model.getBBox();
//     const paperWidth = paper.options.width;
//     const paperHeight = paper.options.height;
//
//     let constrainedX = x;
//     let constrainedY = y;
//
//     if (bbox.x < 0) {
//         constrainedX = bbox.width / 2;
//     } else if (bbox.x + bbox.width > paperWidth) {
//         constrainedX = paperWidth - bbox.width / 2;
//     }
//
//     if (bbox.y < 0) {
//         constrainedY = bbox.height / 2;
//     } else if (bbox.y + bbox.height > paperHeight) {
//         constrainedY = paperHeight - bbox.height / 2;
//     }
//
//     elementView.model.position(constrainedX - bbox.width / 2, constrainedY - bbox.height / 2);
// });
//
// window.addEventListener('resize', () => {
//     paper.setDimensions(container.clientWidth, container.clientHeight);
// });
// import { dia, shapes } from '@joint/core';
// import { createShapes } from './src/components/shapes';
// import { createLinks } from './src/components/links';
//
// // create paper
// const namespace = shapes;
//
// const graph = new dia.Graph({}, { cellNamespace: namespace });
// const container = document.getElementById('paper');
// // On utilise clientWidth/clientHeight pour éviter le fonctionnement par défaut de joint et pour pouvoir mettre des height/width en %.
// const paper = new dia.Paper({
//     el: container,
//     model: graph,
//     width: container.clientWidth,
//     height: container.clientHeight,
//     gridSize: 9,
//     drawGrid: {
//         name: 'mesh', //
//         args: { color: 'gray', thickness: 0.5 } // Options de style de la grille
//     },
//     background: { color: '#FAFBFB' },
//     cellViewNamespace: namespace
// });
//
// // Créez les formes
// const { rect1, rect2, cuteDog, cutePiggy } = createShapes(paper);
//
// // Créez les liens
// createLinks(paper, rect1, rect2, cuteDog, cutePiggy);
//
// // Eviter qu'on puisse bouger les éléments hors du cadre
// paper.on('element:pointermove', function(elementView, evt, x, y) {
//     const bbox = elementView.model.getBBox();
//     const paperWidth = paper.options.width;
//     const paperHeight = paper.options.height;
//
//     let constrainedX = x;
//     let constrainedY = y;
//
//     if (bbox.x < 0) {
//         constrainedX = bbox.width / 2;
//     } else if (bbox.x + bbox.width > paperWidth) {
//         constrainedX = paperWidth - bbox.width / 2;
//     }
//
//     if (bbox.y < 0) {
//         constrainedY = bbox.height / 2;
//     } else if (bbox.y + bbox.height > paperHeight) {
//         constrainedY = paperHeight - bbox.height / 2;
//     }
//
//     elementView.model.position(constrainedX - bbox.width / 2, constrainedY - bbox.height / 2);
// });
//
// window.addEventListener('resize', () => {
//     paper.setDimensions(container.clientWidth, container.clientHeight);
// });
//
// import { createPaper } from './src/components/paper';
// import { createToolbar } from './src/components/toolbar';
//
// const globalContainer = document.getElementById("container")
// const paperContainer = document.getElementById('paper');
// const toolbarContainer = document.getElementById('toolbar');
//
// const { paper, graph } = createPaper(paperContainer);
// createToolbar(toolbarContainer);
//
// // Gestion du drag and drop
// globalContainer.addEventListener('dragover', (event) =>  {
//     console.log("dragover");
//     event.preventDefault() });
//
// globalContainer.addEventListener('drop', (event) => {
//     event.preventDefault();
//     console.log("drop");
//     const shapeType = event.dataTransfer.getData('shape-type');
//     const ShapeClass = eval(shapeType); // Note: Eval is used here for simplicity, consider a safer alternative in production.
//     const shape = new ShapeClass();
//     shape.position(event.clientX - globalContainer.offsetLeft, event.clientY - globalContainer.offsetTop);
//     shape.addTo(graph);
// });
//
// window.addEventListener('resize', () => {
//     paper.setDimensions(paperContainer.clientWidth, paperContainer.clientHeight);
// });
//
// window.addEventListener('resize', () => {
//     paper.setDimensions(paperContainer.clientWidth, paperContainer.clientHeight);
// });

import { createPaper } from './src/components/paper';
import { createToolbar } from './src/components/toolbar';
import { DoggoElement } from './src/components/shapes/dog';
import { PiggyElement } from './src/components/shapes/pig';

const container = document.getElementById('paper');
const toolbarContainer = document.getElementById('toolbar');

if (!container) {
    console.error('Paper container not found');
} else {
    const { paper, graph } = createPaper(container);

    if (!toolbarContainer) {
        console.error('Toolbar container not found');
    } else {
        createToolbar(toolbarContainer);
    }
}
