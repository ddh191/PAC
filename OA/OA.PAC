function FindProxyForURL(url, host) 
{
if(shExpMatch(url, "http://192.168.10.253/*"))
return"PROXY 10.68.150.20:8081";
}
else
return"DIRECT";
}
