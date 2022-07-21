var pdf = /** @class */ (function () {
    function pdf() {
    }
    pdf.prototype.header = function () {
        document.write("<p>i am header pdf </p>");
    };
    pdf.prototype.body = function () {
        document.write("<p>i am body pdf </p>");
    };
    pdf.prototype.footer = function () {
        document.write("<p>i am footer pdf </p>");
    };
    return pdf;
}());
var word = /** @class */ (function () {
    function word() {
    }
    word.prototype.header = function () {
        document.write("<p>i am header word </p>");
    };
    word.prototype.body = function () {
        document.write("<p>i am body word </p>");
    };
    word.prototype.footer = function () {
        document.write("<p>i am footer word </p>");
    };
    return word;
}());
var execl = /** @class */ (function () {
    function execl() {
    }
    execl.prototype.header = function () {
        document.write("<p>i am header excel </p>");
    };
    execl.prototype.body = function () {
        document.write("<p>i am body excel </p>");
    };
    execl.prototype.footer = function () {
        document.write("<p>i am footer excel </p>");
    };
    return execl;
}());
var report = /** @class */ (function () {
    function report() {
    }
    report.prototype.printmyReport = function (report) {
        report.header();
        report.body();
        report.footer();
    };
    return report;
}());
let r1=new report();
let r2=new report();
let r3=new report();
function ss1()
{
    document.write(`<div>${r1.printmyReport(new pdf())}</div>`)
}
function ss2()
{
    document.write(`<div>${r2.printmyReport(new word())}</div>`)
}
function ss3()
{
    document.write(`<div>${r3.printmyReport(new execl())}</div>`)
}
