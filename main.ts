import { createPaper } from './src/components/paper';
import {actionToolbar, createShapesToolbar, editExistingToolbar} from './src/components/toolbar';

const container = document.getElementById('paper');
const toolbarContainer = document.getElementById('add-shapes-toolbar');
if  (container && toolbarContainer) {
    document.addEventListener('DOMContentLoaded', function() {
        const model = createPaper(container);
        createShapesToolbar(toolbarContainer);
        editExistingToolbar(model.graph.getElements());
        actionToolbar();
    });
}
