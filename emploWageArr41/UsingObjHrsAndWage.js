
const IS_PART_TIME = 1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS =25;
const NUM_OF_WORKING_DAY = 20;
const MAX_HRS_IN_MONTH = 160;


function totalWages(totalWage,dailyWage)
{
   return totalWage+dailyWage;
}

console.log("UC8 All map elements:"+Array.from(empDailyWageArr));
console.log("UC 8-Employee Wage from Map, Total Wage: " 
			+Array.from(empDailyWageArr.values()).reduce(totalWages,0));

// UC-9A Calc total Wage and total hours worked
const findTotal = (totalval,dailyVal) => 
{
	return totalval + dailyVal;
}
let count = 0;
totalEmpHrs = new Array();
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalsalary = empDailyWageArr.filter(dailyWage => dailyWage > 0)
					.reduce(findTotal, 0);
console.log("UC9A - Emp Wage With Arrow : " + " Total Hours: "  + totalHours +
 " Total Wages: " + totalsalary);
 
 // UC-9B Show the full workings days, part working days andno working days

let nonworkingDays = new Array();
let partworkingDays = new Array();
let fullworkingdays = new Array();
empDailyHrsMap.forEach((value, key, map) => 
{
	if (value == 8) fullworkingdays.push(key);
	else if (value == 4) partworkingDays.push(key);
	else nonworkingDays.push(key);
});
console.log("Full Working Days : " + fullworkingdays);
console.log("Part Working Days : " + partworkingDays);
console.log("Non Working Days : "  + nonworkingDays);

// UC- 10 Object Creation
let empDailyHrsAndWageArr = new Array();
 totalEmpHrs = 0;
 TotalWorkingDay =0; 

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
	TotalWorkingDay < NUM_OF_WORKING_DAY)
	{
		TotalWorkingDay++;
	 	let empCheck = Math.floor(Math.random() * 10) % 3;
		let  empHrs = getWorkingHours(empCheck);
		totalEmpHrs +=empHrs;
		
		empDailyHrsAndWageArr.push(
			{
				dayNum:TotalWorkingDay,
				dailyHours:empHrs,
				dailywage: calculateDailyWage(empHrs),
				toString() {
					return '\nDay' + this.dayNum + '=> Working Hours is ' +this.dailyHours+  
					'   And wage Earned = ' + this.dailywage
				},
			});
		}

			console.log("UC-10  Showing Daily Hours Worked and Wage Earned : " 
			+empDailyHrsAndWageArr);