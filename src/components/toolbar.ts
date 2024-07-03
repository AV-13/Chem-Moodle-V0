import { DoggoElement } from './shapes/dog';
import { PiggyElement } from './shapes/pig';
import { ElephantElement } from './shapes/elephant';
import { RabbitElement } from './shapes/rabbit';
import { paper, graph } from "./paper.ts"
import { dia } from "@joint/core";
// TODO Add a general custom SVG type (differences will be svg paths and ports)
type ShapeType = typeof DoggoElement | typeof PiggyElement | typeof RabbitElement | typeof ElephantElement;
let selectedShape: ShapeType | null = null;
let existingShapes: string[] = [];

export function createShapesToolbar(container: HTMLElement) {
    const shapes = [
        { type: DoggoElement, icon: 'DoggoElement-icon' },
        { type: PiggyElement, icon: 'PiggyElement-icon' },
        { type: RabbitElement, icon: 'RabbitElement-icon' },
        { type: ElephantElement, icon: 'ElephantElement-icon' }
    ];

    shapes.forEach(shape => {
        const button = document.createElement('button');
        button.className = `toolbar-button ${shape.icon}`;
        button.addEventListener('click', () => {
            selectedShape = shape.type;
            console.log(`Selected shape: ${shape.type.name}`);
        });
        container.appendChild(button);
    });
}

export function getSelectedShape(): ShapeType | null {
    return selectedShape;
}

export function resetSelectedShape(): void {
    selectedShape = null;
}

export function editExistingToolbar(existingElements: dia.Element[]): void {
    const existingToolbar = document.getElementById('existing-shapes-toolbar');
    if (existingElements.length > 0 && existingToolbar) {
        const warningMessage = document.getElementById("warning-message")
        if(warningMessage) warningMessage.remove();
        existingElements.forEach(existingElement => {
            const elementType = existingElement.attributes.type
            if (existingShapes.includes(elementType)) {
                return;
            }
            existingShapes.push(elementType);
            const button = document.createElement('button');
            button.className = `toolbar-button ${elementType}-icon`;
            existingToolbar.appendChild(button);
        });
    } else if (existingElements.length === 0 && existingToolbar) {
        cleanExistingToolbar();
        return;
    }
}
export function actionToolbar(): void {
    const zoomInIcon = document.getElementById("zoom-in")
    if(zoomInIcon)
    zoomInIcon.addEventListener("click", () => {
        console.log("zoom in")
        zoomIn();
    })
    const zoomOutIcon = document.getElementById("zoom-out")
    if(zoomOutIcon)
        zoomOutIcon.addEventListener("click", () => {
            console.log("zoom out")
            zoomOut();
        });
    const newIcon = document.getElementById("new-schema")
    if(newIcon)
        newIcon.addEventListener("click", () => {
            console.log("new schema event listener")
            newSchema();
        })
}

// TODO find a solution for the origin of the zoom. Add a limit to the zoom maybe (then disable the click on the button)
// Check this for zooming with mousewheel : https://github.com/clientIO/joint/issues/1027
export function zoomIn(): void {
    const newSx = paper.scale().sx * 2;
    const newSy =  paper.scale().sy * 2;
    paper.scale(newSx, newSy);
}
export function zoomOut(): void {
    const newSx = paper.scale().sx / 2;
    const newSy =  paper.scale().sy / 2;
    paper.scale(newSx, newSy);
}
export function newSchema(): void {
    graph.clear();
    cleanExistingToolbar();
    // paper.remove();
}

export function cleanExistingToolbar(): void {
    const toolbar = document.getElementById("existing-shapes-toolbar");
    if(toolbar) {
        while (toolbar.lastElementChild) {
            toolbar.removeChild(toolbar.lastElementChild);
        }
        const warningMessage = document.createElement("p");
        warningMessage.id = "warning-message";
        warningMessage.textContent = "Aucun équipement sélectionné.";
        toolbar.appendChild(warningMessage);
    }
}

