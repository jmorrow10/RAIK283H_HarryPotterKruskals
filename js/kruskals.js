
/**
 * does some magic
 * @param {*} nodes 
 * @param {*} edges 
 */
function kruskalsMST(nodes, edges) {
	// TODO: Implement Kruskal's Algorithm
	E = edges.sort(comp);
	let UF = new UnionFind(nodes.length);
	let T = new Array();
	let k = 0;
	while(T.length < (nodes.length - 1)){
		let edge = E.shift();
		let repU = UF.find(edge.from);
		let repV = UF.find(edge.to);
		if (repU != repV){
			UF.union(repU,repV);
			T.push(edge)
		}
		k++;
	}

	console.log(E)

	return T; // the edges in the MST
}

function comp(a,b){
	return a.label - b.label
}
