function FindProxyForURL(url, host) 
{
if((myIpAddress() == "10.68.150.69") && (isInNet(host, "192.168.10.253","255.255.255.255")))
return "PROXY kmevstds0067:8081";
else
return "DIRECT";
}
