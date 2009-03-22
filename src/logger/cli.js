JsUnitTest.Unit.CLILogger = function() {
    if (typeof WScript === "object") {
        this.print = function () { 
            WScript.echo(Array.prototype.slice.call(arguments).join(" ")); 
        };
    } else if (typeof print === "function") { this.print = print; }
    else { this.print = function print() {}; }
    this.messageText = "";
};
  
JsUnitTest.Unit.CLILogger.prototype.start = function(testName) {
    print("");
    this.messageText += testName;
};
  
JsUnitTest.Unit.CLILogger.prototype.setStatus = function(status) {
    this.messageText = "[" + status.toUpperCase() + "] " + this.messageText;
};
  
JsUnitTest.Unit.CLILogger.prototype.finish = function(status, summary) {
    this.setStatus(status);
    this.message(summary);
};
  
JsUnitTest.Unit.CLILogger.prototype.message = function(message) {
    message = message.replace(/[\r|\n]/g, "");
    this.print(this.messageText + "\r\n\t " + message + " ");
    this.messageText = "";
};
  
JsUnitTest.Unit.CLILogger.prototype.summary = function(summary) {
    this.print("== " + summary + " == ");
};

JsUnitTest.Unit.CLILogger.prototype.appendActionButtons = function() {};

