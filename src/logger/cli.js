JsUnitTest.Unit.CLILogger = function() {
    if (typeof print === "function") { this.print = print; }
    else if (typeof WScript === "object") { this.print = WScript.echo; }
    else { this.print = function print() {}; }
    this.messageText = "";
    this.print("");
};
  
JsUnitTest.Unit.CLILogger.prototype.start = function(testName) {
    this.messageText += testName;
};
  
JsUnitTest.Unit.CLILogger.prototype.setStatus = function(status) {
    this.messageText += " [" + status + "] ";
};
  
JsUnitTest.Unit.CLILogger.prototype.finish = function(status, summary) {
    this.setStatus(status);
    this.message(summary);
};
  
JsUnitTest.Unit.CLILogger.prototype.message = function(message) {
    message = message.replace(/[\r|\n]/g, "");
    this.print(this.messageText + " | " + message);
    this.messageText = "";
};
  
JsUnitTest.Unit.CLILogger.prototype.summary = function(summary) {
    this.print("");
    this.print(summary);
};

JsUnitTest.Unit.CLILogger.prototype.appendActionButtons = function() {};

