import { dia, shapes } from '@joint/core';
import { paper, graph } from './src/components/paper';
import { enableHighlightOnHover } from './src/components/hightlighter';

// TODO A demander à Fabrice :
// https://docs.jointjs.com/api/dia/Paper/#events
// On intercepte chaque interaction de base de joint js : exemple bouger un équipement = paper.on('element:pointermove' () => { sketcher.ui.moveEquipment() });
// Besoin d'explication sur le rôle de ces fonctions
class Sketcher {
    constructor() {}
    ui = {
        // moveEquipment: ,
        // removeEquipment: ,
        // changeConnector: ,
        // createLinkFromPort: ,
        // changeInterfaceMode: ,
        // changeSelectionMode: ,
    }
}

export const sketcher = new Sketcher();
