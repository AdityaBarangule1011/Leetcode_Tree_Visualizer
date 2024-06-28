import { BinaryTreeNode} from `./BinaryTreeNode.js`

const canvas = document.querySelector('canvas')

//drawing the binary tree
function drawBinaryTree(root, canvasElement) {
  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;

  //inisatialize canvas elemets 
  canvasElement.width = maxWidth;
  canvasElement.height = maxHeight;

  getRequredActualHeightwidth(root)
}

drawBinaryTree(root, canvas)

const root = new BinaryTreeNode(10)

const node2 = new BinaryTreeNode(20)
root.setLeft(node2)
const node3 = new BinaryTreeNode(30)
root.setRight(node3)
console.log(root)

