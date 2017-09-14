function route(handle, pathname){
	console.log("router file: "+pathname);

	if (typeof handle[pathname] === 'function'){
		handle[pathname]();
	}
	else{
		console.log("No pathname" + pathname)
	}

}

exports.route = route;
