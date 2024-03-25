function kys(length) {
	const gpl = []
	for (let i = 0; i < 20; i++) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
			counter += 1;
		}
		gpl.push(result);
	}
    //console.log(gpl)
    document.getElementById("what").innerHTML = ""+gpl+""
	return gpl;
}

//console.log(a(5));