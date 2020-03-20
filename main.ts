/**
 * Author: Ma Geralin W. Lequigan
 * Date: March 20, 2020
 */

class Year {
    checkBtn: any;
    year: any;
    isLeapYearAlert: any;
    isNotLeapYearAlert: any;
    errorMessage: any;

    constructor() {
        this.checkBtn = document.getElementById("checkButton");
        this.checkBtn.addEventListener("click", (e:Event) => this.leapYear());
        this.isLeapYearAlert = document.getElementById("leapYearAlert");
        this.isNotLeapYearAlert = document.getElementById("notLeapYearAlert");
        this.errorMessage = document.getElementById("errorLabel");
    }

    leapYear(): void {
        this.clearAlerts();
        this.year = (<HTMLInputElement>document.getElementById("inputYear")).value;
        
        if (this.year === "") {
            this.errorMessage.style.display = "block";
            return;
        }
        
        if (((this.year % 4 == 0) && (this.year % 100 != 0)) || (this.year % 400 == 0)) {
            this.isLeapYearAlert.innerHTML = "<h5>Year " + this.year + " is a leap year.</h5>";
            this.isLeapYearAlert.style.display = "block";
        }
        else {
            this.isNotLeapYearAlert.innerHTML = "<h5>Year " + this.year + " is not a leap year.</h5>";
            this.isNotLeapYearAlert.style.display = "block";
        }
    }

    clearAlerts() {
        this.isLeapYearAlert.style.display = "none";
        this.isNotLeapYearAlert.style.display = "none";
        this.errorMessage.style.display = "none";
    }
}

new Year();

