import {dia, shapes} from '@joint/core';
import {enableHighlightOnHover} from "./hightlighter.ts";
import {paper} from "./paper.ts";
import Link = dia.Link;
import { connexionConfig } from "../globalVariables.ts";
// ON passe en mode connexion : les points entrée sortie des élements du graph apparaissent :
//  - on met un highlighter sur les points de connexion possible
//  - on rajoute la feature d'aimantation au plus proche. magnet: true je crois ? à vérifier
//  - premier clic sur source, deuxieme clic sur target
// On créé deux méthodes pipe et wire qui permettent de différencier les liens.
// Essayer de voir comment faire pour mettre le default link selon le choix que l'on fait (bouton pipe ou wire)
// https://how.wtf/conditionally-add-properties-to-an-object-in-javascript.html
export function createDefaultLink(): Link {
    const link = new shapes.standard.Link({
        attrs: {
            line: {
                stroke: 'black',
                strokeWidth: 2,
                ...(connexionConfig.currentConnexionType === "pipe" && { strokeDasharray: '5 5' }),
                targetMarker: {
                    type: 'path',
                    d: '', // Empty path to make the marker invisible, I couldn't find any other way
                    stroke: 'none',
                    fill: 'none'
                },
                sourceMarker: {
                    type: 'path',
                    d: '', // Empty path to make the marker invisible, I couldn't find any other way
                    stroke: 'none',
                    fill: 'none'
                }
            },
        },
        labels: [{
            position: {
                distance: 0.5,
                offset: 0,
                args: {
                    keepGradient: true
                }
            },
            attrs: {
                text: { text: '', 'font-size': 0 },
                body: {
                    'type': 'path',
                    'd': 'M -10 -5 0 0 -10 5 Z',
                    'stroke': 'black',
                    'fill': 'black'
                }
            },
            markup: [{
                tagName: 'path',
                selector: 'body'
            }]
        }]
    });
    enableHighlightOnHover(paper)
    return link;
}
