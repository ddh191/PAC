function FindProxyForURL(url, host) 
{
if(myIpAddress() == "10.68.150.69")
return "PROXY kmevstds0067:8081";
else
return "DIRECT";
}
