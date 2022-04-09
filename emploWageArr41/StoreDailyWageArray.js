
// UC-1 Use If Else Case
const IS_PART_TIME = 1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS =25;
const NUM_OF_WORKING_DAY = 20;
const MAX_HRS_IN_MONTH = 160;

const IS_ABSENT = 0
 let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck == IS_ABSENT)
{  
console.log(" UC-1 : Employee Is ABSENT");
} 
else 
{
	console.log(" UC-1 : Employee Is PRESENT");
}

// UC-2- Use SwitchCase

{
	let empHrs =0;
	 empCheck = Math.floor(Math.random()* 10) % 3; 
	switch (empCheck){
		case IS_PART_TIME:
			empHrs= PART_TIME_HOURS;
			break;
			case IS_FULL_TIME:
				empHrs =FULL_TIME_HOURS;
				break;
				default:
					empHrs =0;
	}
	let empwage = empHrs * WAGE_PER_HOURS;
	console.log(" UC-2 : Emp Wage  :  "	 + empwage);
	}
	
	// UC-3 - Use Function -Refactor Code
	
	
	function getWorkingHours(empCheck) {
		switch (empCheck){
			case IS_PART_TIME:
			return PART_TIME_HOURS;
			case IS_FULL_TIME:
				return FULL_TIME_HOURS;
				default:
				return 0;
		}
	}	
	empCheck = Math.floor(Math.random() * 10) % 3;
	let empHrs = getWorkingHours(empCheck);
	let empwage = empHrs * WAGE_PER_HOURS;
	console.log(" UC-3 : Emp Hours  :  " + empHrs +  " EmpWage  :  " + empwage);
	
	// UC-4-For Loop
	{
		let totalEmpHrs =0;
		for (let day = 0; day <NUM_OF_WORKING_DAY; day++){
			let empCheck = Math.floor(Math.random() * 10) % 3;
			totalEmpHrs = getWorkingHours(empCheck);
		}
		let empwage = totalEmpHrs + WAGE_PER_HOURS;
		console.log(" UC-4 :  total Hrs  :    " + totalEmpHrs + "   empwage  :  " + empwage);
	}
	// UC-5-While loop
	{
		let totalEmpHrs = 0;
		let TotalWorkingDay = 0;
		while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
			TotalWorkingDay < NUM_OF_WORKING_DAY)
			{
				TotalWorkingDay++;
				let empCheck = Math.floor(Math.random() * 10) % 3;
				totalEmpHrs += getWorkingHours(empCheck);			
			}
			let empwage = totalEmpHrs* WAGE_PER_HOURS;
			console.log(" UC-5 :  Total Days  :   "  +   TotalWorkingDay + 	
			"Total Hrs   :   "   +	 totalEmpHrs +   " Empwage   :   "	 + empwage);
	}
	//UC-6- Store the Daily Wage along with Total Wage
	
	
	function calculateDailyWage(empHrs)
	{
		return empHrs * WAGE_PER_HOURS;
	}
	{
	let totalEmpHrs = 0;
	let TotalWorkingDay =0;
	let empDailyWageArr = new Array();
	while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
		TotalWorkingDay < NUM_OF_WORKING_DAY){
			TotalWorkingDay++;
			let empCheck = Math.floor(Math.random() * 10) % 3;
			let empHrs = getWorkingHours(empCheck);
			totalEmpHrs +=empHrs;
			empDailyWageArr.push(calculateDailyWage(empHrs));
			
			let empwage = calculateDailyWage(totalEmpHrs); 
			console.log("UC-6 : Total Days  : "  + TotalWorkingDay  +   
			" Total Hrs : " + totalEmpHrs + " emp wage "  + empwage );
		}
	}