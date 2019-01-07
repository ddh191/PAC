function FindProxyForURL(url, host) 
{
if
(isInNet(host, "192.168.10.253","255.255.255.255"))
return "PROXY 10.68.151.17:8081";
else
return "DIRECT";
}
