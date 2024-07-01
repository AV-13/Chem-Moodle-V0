import { DoggoElement } from './shapes/dog';
import { PiggyElement } from './shapes/pig';
import { ElephantElement } from './shapes/elephant';
import { RabbitElement } from './shapes/rabbit';
// Ajoutez d'autres imports de shapes si nécessaire
// TODO Add a general custom SVG type (differences will be svg paths and ports)
type ShapeType = typeof DoggoElement | typeof PiggyElement | typeof RabbitElement | typeof ElephantElement;
let selectedShape: ShapeType | null = null;
export function createToolbar(container: HTMLElement) {
    const shapes = [
        { type: DoggoElement, icon: 'dog-icon' },
        { type: PiggyElement, icon: 'pig-icon' },
        { type: RabbitElement, icon: 'rabbit-icon' },
        { type: ElephantElement, icon: 'elephant-icon' }
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

export function resetSelectedShape() {
    selectedShape = null;
}
