function getTodayDateYMD(){
	const today = new Date();
	const dateString= ""+today.getFullYear()+"-"+(today.getMonth()+1).toString().padStart(2,0)+"-"+today.getDate()+"";

	return dateString;
}

export { getTodayDateYMD };