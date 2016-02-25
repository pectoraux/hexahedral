import { create, diff, patch } from 'virtual-dom';
import Game from 'components/game';

let tree = null;
let rootNode = null;

// Attaches the virtual tree to the DOM.
function init (newTree) {
  rootNode = create(newTree);
  document.body.insertBefore(rootNode, document.body.firstChild);
}

// Updates the DOM with the virtual tree changes.
function update (newTree) {
  let patches = diff(tree, newTree);
  rootNode = patch(rootNode, patches);
}

// Applies the game state to the DOM.
export default function render (gameState) {
  let newTree = Game(gameState);

  if (!rootNode) {
    init(newTree);
  } else {
    update(newTree);
  }

  tree = newTree;
}