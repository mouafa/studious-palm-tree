var wywyTimeoutSecs=6000;var wywyAnalytics=window.wywyAnalytics||(function(win,doc,tag,session_id,domain,ca){win[tag].q.push=function(){for(var i=0,l=arguments.length;i<l;i++)if(arguments[0][0]=='send')wywyAnalytics.send(arguments[0]);else this[this.length]=arguments[i];return this.length;};var wywyAnalytics={};var parts=doc.domain.split('.');var session_start_flag;var returning_user_flag;var wyid;var wysi;var wybrs;var beaconHasFired=false;[].indexOf||(Array.prototype.indexOf=function(a,b,c){for(c=this.length,b=(c+~~b)%c;b<c&&(!(b in this)||this[b]!==a);b++);return b^c?b:-1;});function getLocalStorage(key){return localStorage.getItem(key);}function setLocalStorage(key,value){localStorage.setItem(key,value);}wywyAnalytics.optOut=function(){beaconHasFired=false;getWyId('-1');};wywyAnalytics.optIn=function(){beaconHasFired=false;getWyId('1');};wywyAnalytics.send=function(extra_params){var j=createBeacon(extra_params);doc.body.appendChild(j);};function getParams(extra_params){var queued_sends=[];var custom_keys=[];var custom_param=[];var params='v=5&p=js';k=win[tag].q;var i=k.length;while(i--)if(win[tag].q[i][0]=='send'){queued_sends.push(win[tag].q[i]);k.splice(i,1);}else if(win[tag].q[i][0].toLowerCase()=='setcustom'){var key=win[tag].q[i][1].charAt(0).toLowerCase()+'_'+win[tag].q[i][2];if(custom_keys.indexOf(key)<0){custom_param.push(win[tag].q[i]);custom_keys.push(key);}}else if(!k.hasOwnProperty(i)||typeof k[i]=='function')continue;else params+='&'+win[tag].q[i][0]+'='+win[tag].q[i][1];params+='&s='+wysi+'&r='+encodeURIComponent(doc.referrer)+'&t='+Math.round(new Date().getTime())+'&ss='+session_start_flag;params+='&u='+wyid+'&ru='+returning_user_flag;if(extra_params){params+='&h='+extra_params[1];params+='&ci='+extra_params[2];if(extra_params.length>3)params+='&cv='+extra_params[3];}else{params+='&h=ph';if(custom_param.length>0)for(var y=0;y<custom_param.length;y++){var ckey=custom_param[y][2];var cval=custom_param[y][3].length<=255?custom_param[y][3]:'';if(ckey.length<=64)params+='&wyc_'+custom_param[y][1].charAt(0).toLowerCase()+'_'+ckey+'='+cval;}}for(var x=0;x<queued_sends.length;x++)wywyAnalytics.send(queued_sends[x]);return params;}function createBeacon(extra_params){var params=getParams(extra_params);j=doc.createElement('img');j.src='//analytics.wywy.com/i?'+params;return j;}function getWyId(opt_in_or_out){t=doc.createElement('script');t.async=1;wyidfp=getCookie('_wyidfp');wyidls=getLocalStorage('_wyid');wyid=wyid||wyidfp||wyidls;if(wyidfp)returning_user_flag=true;else returning_user_flag=false;t.src='https://wywyuserservice.com/wyid.js?callback=returnWyId';if(opt_in_or_out)t.src+='&_opt='+opt_in_or_out;if(wyid)t.src+='&_wyid='+wyid;f=doc.getElementsByTagName('script')[0];f.parentNode.insertBefore(t,f);}function getWySi(){wysic=getCookie('_wysi');wysis=getCookie('_wysis');wybrs=getCookie('_wybrs');if(wysic||wysis)wysi=wysic||wysis;if(wysic&&wysis&&wybrs)session_start_flag=false;else session_start_flag=true;}function createWySi(){n=2147483647;return 'WY.1.'+Math.round(n*Math.random())+'.'+Math.round(n*Math.random());}function createWyId(){return 'xxxxxxxx-xxxx-4xxx-9xxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);return v.toString(16);});}function getCookie(key){var r=new RegExp(key+'=([^;]+)');var m=r.exec(doc.cookie);return(m?m[1]:'');}function setCookie(host,key,value,date){e='';if(date)e='expires='+date.toUTCString();document.cookie=key+'='+value+'; '+e+';path=/; domain='+host;}function setShortDomainCookie(tag,value,date){var host='';for(var i=parts.length;i>0;i--){cookie_value=getCookie(tag);if(cookie_value){}host=parts[i-1]+(i==parts.length?'':'.')+host;cookie_value=setCookie(host,tag,value,date);}}function fireBeacon(){beaconHasFired=true;if(session_start_flag==true||!wysi)wysi=createWySi();d=new Date();d.setMinutes(d.getMinutes()+30);setShortDomainCookie('_wysi',wysi,d);setShortDomainCookie('_wysis',wysi,0);if(!wyid){wyid=createWyId();l=new Date();l.setMonth(l.getMonth()+18);setShortDomainCookie('_wyidfp',wyid,l);setLocalStorage('_wyid',wyid);}j=createBeacon();var beaconRequestSuccess=function(){setShortDomainCookie('_wybrs',new Date().getTime(),d);};if(j.addEventListener)j.addEventListener('load',beaconRequestSuccess);else j.attachEvent('onload',beaconRequestSuccess);var onload=function(){doc.body.appendChild(j);};if(doc.addEventListener)doc.addEventListener('DOMContentLoaded',onload);else win.attachEvent('onload',onload);}window.returnWyId=function(dict){if(!beaconHasFired){wyid=dict._wyid;l=new Date();l.setMonth(l.getMonth()+18);setShortDomainCookie('_wyidfp',wyid,l);setLocalStorage('_wyid',wyid);if(wyid!='-1'&&wyid!=-1)fireBeacon();}};getWyId();if(wyid!='-1'&&wyid!=-1){getWySi();setTimeout(function(){if(!beaconHasFired&&wyid!='-1'&&wyid!=-1)fireBeacon();},wywyTimeoutSecs);}return wywyAnalytics;})(window,document,'_wywy');