import { dia } from '@joint/core';

const highlighterOption =  {
    highlighter: {
        name: 'stroke',
        options: {
            padding: 5,
            attrs: {
                'stroke': '#ff7e5f',
                'stroke-width': 3
            }
        }
    }
}
export function highlightElement(cellView: dia.CellView) {
    cellView.highlight(null, highlighterOption);
}

//
export function unHighlightElement(cellView: dia.CellView) {
    cellView.unhighlight(null, highlighterOption);
}

// Fonction pour ajouter les écouteurs d'événements à tous les éléments et liens
export function enableHighlightOnHover(paper: dia.Paper) {
    const highlightOnHover = (cellView: dia.CellView) => {
        highlightElement(cellView);
    };

    const unHighlightOnHover = (cellView: dia.CellView) => {
        unHighlightElement(cellView);
    };

    paper.on('cell:mouseenter', highlightOnHover);
    paper.on('cell:mouseleave', unHighlightOnHover);
}
