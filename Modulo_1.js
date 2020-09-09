module.exports =(hora,empleado,pago,totalDelMaterial,callback)=>{

		modulo_1=0;
	if (hora <=0 || pago<=0){
			callback (new Error("---Los valores en 0 o los que sean negativos no se pertimite--- "),
			null);
	}
	else {
			callback(null, {
				Total:()=> (modulo_1 +=((hora*empleado)*pago)),
				SumaTotal:()=> (totalDelMaterial+modulo_1),
				Holgura:()=> (modulo_1*0.08),
			});
	}
}
