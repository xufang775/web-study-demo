var curryLog,logHello,logStayinAlive,logGookbye;

curryLog = function (arg_text) {
    var log_it = function () {
        console.log(arg_text);
    };
    return log_it;
};
logHello = curryLog('hello');
logStayinAlive = curryLog('stayin alive');
logGookbye = curryLog('goodbye');

curryLog('fred');

logHello();   // hello
logStayinAlive();
logGookbye();
logHello();    // hello

delete window.logHello;

delete window.logStayinAlive;

logGookbye();
logStayinAlive();