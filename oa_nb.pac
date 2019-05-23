function FindProxyForURL(url, host) 
{
if(shExpMatch(myIpAddress(), "10.*.*.*"))
return "PROXY kmevstds0067:8081";
}
else
return "DIRECT";
}
