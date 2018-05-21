import DiagramNode from "./DiagramNode";

var generateId = function() {
  return Math.trunc(Math.random() * 1000);
};

/**
 * @class DiagramModel
 */
class DiagramModel {
  /**
   */
  constructor() {
    this._model = {
      nodes: [],
      links: []
    };
  }

  /**
   * Adds a node to the diagram
   * @param {String} title  The title of the node
   * @param {Integer} x      X coordinate
   * @param {Integer} y      Y Coordinate
   * @param {Integer} width  Width
   * @param {Integer} height Height
   * @return {Node} The node created
   */
  addNode(title, x, y, width, height) {
    let newNode = new DiagramNode(title, x, y, width, height);
    this._model.nodes.push(newNode);
    return newNode;
  }

  /**
   * Adds a link between two ports
   * @param {Integer} from   Port id. Must be an out port
   * @param {Integer} to     Port id. Must be an in port
   * @param {Array}  points  Optional. Array of points to make the link represented as a segmented line
   */
  addLink(from, to, points = []) {
    this._model.links.push({
      id: generateId(),
      from: from,
      to: to,
      positionFrom: {},
      positionTo: {},
      points
    });
  }

  /**
   * Serializes the diagram model into a JSON object
   * @return {Object} The diagram model
   */
  serialize() {
    return JSON.stringify(this._model);
  }

  /**
   * Load into the diagram model a serialized diagram
   * @param  {Object} serializedModel
   */
  deserialize(serializedModel) {
    this._model = JSON.parse(serializedModel);
  }
}

export default DiagramModel;