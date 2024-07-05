import { createPaper } from './src/components/paper';
import {actionToolbar, createShapesToolbar, editExistingToolbar} from './src/components/toolbar';
import {interfaceChoice} from "./src/components/interfaceMode";

const container = document.getElementById('paper');
const toolbarContainer = document.getElementById('add-shapes-toolbar');
if  (container && toolbarContainer) {
        const model = createPaper(container);
        createShapesToolbar(toolbarContainer);
        interfaceChoice();
        editExistingToolbar(model.graph.getElements());
        actionToolbar();
}
