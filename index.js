var modulo_1=require('./Modulo_1');
var modulo_2=require('./Modulo_2');


const CostoTotal= modulo_2.Suma([12,45,20,10,5]);		//Horas de trabajo y pagos del empleado//
function Empresa(hora,empleado,pago,totalDelMaterial) {

	console.log(
		"*** Horas de trabajo realizadas por el empleado: "  + hora + "\n" +
		"*** Pago por las horas que a realizado el Empleado:" + " " + "$" + pago);

	modulo_1(hora,empleado,pago,totalDelMaterial, (error,nul)=>{
		if (error){
			console.log("--ERROR:", error.message);
		}
		else{
			console.log("-------------------------------------------------------");
			console.log("--Pago total del salario por horas realizadas:" + " " + "$" + nul.Total());
			console.log("");
			console.log("--El 8% de la holgura es:" + " " + "$" + nul.Holgura());
			console.log("");
			console.log("--Total del proyecto realizado:"+ " " + "$" + nul.SumaTotal());
			console.log("");
			console.log("--Los materiales + horas de empleados:"+ " " + CostoTotal);
			console.log("-------------------------------------------------------");
		}
	});
}
//Para ver otros resultados solo cambia los valores donde dice --Empresa--//

Empresa(13,20,40,CostoTotal); 		//Horas,Empleados,Materiales y el Costo Total.//
