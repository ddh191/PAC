function FindProxyForURL(url, host) {
var proxy = "PROXY 172.16.1.254:808";
if (isPlainHostName(host)) {
return "DIRECT";
}
if (shExpMatch(url, "*cnki.net*")) {
return proxy;
}}
return "DIRECT";
}
