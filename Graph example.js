        //GRAPH
/*Example of undirected and unweighted graph */

//We create a class for the graph
class Graph{
    //the graph has only 1 propertie which is the adjacency list
    constructor(){
        this.adjacencyList = {}
    }
// the addNode method takes a node value as parameter and adds it as a key to the adjacency list if it wasn't previously present
addNode(node){
    if(!this.adjacencyList[node]) this.adjacencyList[node] = []
}

//the addConnection method takes 2 nodes as parameters, and it adds each node to the other's array of connections.
addConnection(node1, node2){
    this.adjacencyList[node1].push(node2)
    this.adjacencyList[node2].push(node1)
}
//the removeConnection method takes 2 nodes as parameters, and it removes each node from the other's array of connections.
removeConnection(node1, node2){
    this.adjacencyList[node1] = this.adjacencyList[node1].filter (v => v !==node2);
    this.adjacencyList[node2] = this.adjacencyList[node2].filter (v => v !==node1);
}
/*the removeNode method takes a node value as a parameter. It removes all connections to that node present in the graph and
deletes the node key from the adjacency list.*/ 
removeNode(node){
    while(this.adjacencyList[node].length){
        const adjacentNode = this.adjacencyList[node].pop()
        this.removeConnection(node, adjacentNode)
    }
    delete this.adjacencyList[node];
    }
}  
const Argentina = new Graph(); 
Argentina.addNode('Buenos Aires');
Argentina.addNode('Caba');
Argentina.addNode('Cordoba');
Argentina.addNode('Santa Fe');
//console.log(Argentina); //Graph {adjacencyList: { 'Buenos Aires': [], Caba: [], Cordoba: [], 'Santa Fe': [] }}

Argentina.addConnection('Buenos Aires', 'Cordoba');
Argentina.addConnection('Buenos Aires', 'Santa Fe');
Argentina.addConnection('Santa Fe', 'Caba');
console.log(Argentina); //Graph {adjacencyList: {'Buenos Aires': [ 'Cordoba', 'Santa Fe' ],Caba: [ 'Santa Fe' ],Cordoba: [ 'Buenos Aires' ],'Santa Fe': [ 'Buenos Aires', 'Caba' ]}}

//font: freecodecamp.org/news/data-structures-in-javascript-with-examples#stacks
//by German Cocca
