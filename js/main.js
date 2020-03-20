/**
 * Author: Ma Geralin W. Lequigan
 * Date: March 20, 2020
 */
var Year = /** @class */ (function () {
    function Year() {
        var _this = this;
        this.checkBtn = document.getElementById("checkButton");
        this.checkBtn.addEventListener("click", function (e) { return _this.leapYear(); });
        this.isLeapYearAlert = document.getElementById("leapYearAlert");
        this.isNotLeapYearAlert = document.getElementById("notLeapYearAlert");
        this.errorMessage = document.getElementById("errorLabel");
    }
    Year.prototype.leapYear = function () {
        this.clearAlerts();
        this.year = document.getElementById("inputYear").value;
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
    };
    Year.prototype.clearAlerts = function () {
        this.isLeapYearAlert.style.display = "none";
        this.isNotLeapYearAlert.style.display = "none";
        this.errorMessage.style.display = "none";
    };
    return Year;
}());
new Year();
//# sourceMappingURL=main.js.map