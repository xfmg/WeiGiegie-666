/*
 *
 *
脚本功能：知乎vip++
软件版本：++最新
下载地址：苹果商店下载
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 知乎vip 盐选内容，
^https?:\/\/((api|app|www).zhihu.com\/|.*resolv\?host)(unlimited\/go\/my_card|people\/self|bazaar\/vip_tab|sku\/reversion_sku|.*zhihu).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/zhihu.js
^https?:\/\/((www)|(api)).zhihu.com\/(api\/v3\/books|market\/paid_magazine|market\/paid_column|market\/album|remix\/resource\/paid_magazine|appview\/v2\/answer).*$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/zhihutk.js

^https?://api\.zhihu\.com/commercial_api/launch_v2 url reject
^https?://api\.zhihu\.com/commercial_api\/real_time_launch_v2 url reject-dict
^https?://datahub\.zhihu\.com/collector/lastn-realtime url reject
^https?://www\.zhihu\.com/appview/v3/zhmore url reject-200
#^https?://www\.zhihu\.com/xen/market/hybridMetaDetail/ url reject
^https?:\/\/datahub\.zhihu\.com\/collector\/lastn-realtime url reject-dict
^https?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2 url reject-dict
^https?://www\.zhihu\.com/appview/v3/zhmore url reject-200
^https?://www\.zhihu.com/api/v4/members/homepage_card url reject

[mitm] 
hostname = api.zhihu.com,app.zhihu.com.www.zhihu.com,datahub.zhihu.com,datahub.zhihu.com,duga.zhihu.com,mqtt.zhihu.com,apm.zhihu.com,*.zhimg.com,61.162.174.*,123.125.244.*,119.188.123.*,101.72.233.*,120.92.107.*,116.114.96.*,211.93.211.*,211.204.58.*,1.24.81.*,103.41.167.*,125.39.43.*,219.159.26.*,42.231.136.*,115.56.76.*,124.163.196.*,211.204.209.*,42.231.136.*,211.204.166.*,218.29.50.*,101.72.254.*,60.28.220.*,116.136.12.*,27.221.72.*,119.29.29.*,118.89.204.198,103.41.167.237,2402:4e00:1200:ed00:0:9089:6dac:96b6,www.zhihu.com,api.zhihu.com,zhuanlan.zhihu.com,appcloud2.zhihu.com,m-cloud.zhihu.com,103.41.167.236,103.41.167.234,103.41.167.235,103.41.167.226,116.114.96.41,120.222.238.146,111.6.56.*,103.41.167.*
*
*
*/


;var encode_version = 'jsjiami.com.v5', zwqth = '__0x11d3de',  __0x11d3de=['GMKwwoIAwqA=','IRnDrH18','ZWPDlx9M','f2QSwrIQ','KsOEw4AxFw==','wrFPecO/DQ==','HsORA8KMVg==','JMOqw4JBw6Y=','HsOAw4VLwoU=','b1jDgQho','wpp4asKNw5c=','w7PDmcKGw5Ns','wpIbfsKOwo8=','dsKnXjM7','ZcK6Syg3','woHDmjrDnzM=','F8KDwoA6E1Y=','wo07w5N8JcO7','Z8K6bQ==','Q8KcfA==','fsORCQ==','wpPCksO5','wqF6Ww==','W8K2w7w=','w4rDksOD','JcKbwr8GHA==','fMOzMMKUw6g=','fUfDig==','fcK7w4LDg08=','IGM8w48p','wrM8dsK+wrE=','NMObwpfCrcKL','w7PCqsOXwo9U','A3JiZxw=','wrsEw5NaPQ==','w7HCvsK5wo52','wrwfOcK3dg==','w5LCoMK4wqZI','fD81wozCvA==','WcOqw7LDrmk=','OcOhdiVO','w7gJwpszEg==','TsOow7/DmmQ=','FnFGSsOy','B8O8w4V7woE=','NsO9woLCjMKb','w40JwrouDg==','LyrDgBrCvA==','bRsuwovCoQ==','w7XCqsOswpJJ','w5DCrsOUwoBN','w5DCl1vDo2c=','M8Oaw6Nqw6I=','QlLDiQQp','w6ZIdVLDpw==','YHvDuCoNOls=','SsO/w7DDlMK0Aw==','ZXcBw7Rxwqw=','KVZ4FmnCo0hpCxrDgg==','wr0NWMK+wpnCkg==','w4zDpsO8w6oJJQJfwpjDrMKuJg==','F8K5QApiwpNkP0hLdF/ClQ==','wrNXT8KJwqrDvMObC8OGZsKmQAA=','wqoPWsKRwqzCo8OEFMOVYcKmQAA=','wpjCnsOQYkoOwoo=','N8K5dD5bw7o=','fMOeUMK2BcKWwqzDug==','wrDDtjXDtMO1wpDCgw==','w5rCr8OjZX05XEXDh2jDvMOQJMOlw78o','wpRyw7YZb8KiAsOo','M8KQHMKpQh4v','wrDDtiLDtMKMw7TDvyo=','S8ObbjtZcMOzO8Knw7LDiw==','HsKSw5t+w7AMwoQs','w7Qpf0vDsi7DhXY=','w5fDscOHVBM3bm7DvTE=','wpxEVMOZcwkywqB+woVtIhM8HsOvwrPDiMOKwr4AbMK+WRTDtUQwf2HDvFnCpsOLw6B0w4RrTldNw43Cn0nCo1MjPsKDcsKpTk1nIcOMYk/Dk3/CsQgGKsOXT8Kxw79vw7nCv27CqxjCvMKEGsK7Vk7DpsOFGgTDhDjCu8OCwroDw6ZgwpEMMcOhGU1dD35wOQJ6acKmMnp6eMOtw6IeHMKOPgHCt0zCg34nw7Y/YsOUTMKkw5Y3w6Yvw7/CpkLDo8KqMcKrwqRuw50hDnNlWMKdZ3DCt8KDSwnDo8Ogw6vCqUICw5LDnUkewrZcRD0G','AMOWcR1uw7xQMTbDocOXAUM=','GcO7wozCh8KEJlvCmjM8w5jDhWvChlFmwqjDpsKLbmdkDQjDoQrCnxbCnk9qwqrChcKmwrzCpsOmJ8OYAGnCtQ4kAcOaa0F8wo9OeMKaIcOvU8ODwqzCh8KtF0JTwp4Gw54=','AcOlZwhR','wpp4FmTCkn/DjztqwqspBcOFwoAT','YcKBRQ==','wpXDncOZdAEOwoDDrVI=','GwhRE2HCq08zRSfDhsKcw67Dmg==','w4bCo8Ok','wrxiXw==','54mH5p+U5Y2k776JX8Ko5L2k5a+25p6N5b+H56iJ772G6L6P6KyL5peV5o2t5oua5LiL55qK5beN5L+f','5Yik6ZqX54m55p+q5Y6C7763wrzDqOS9guWuo+aeveW9lOeprQ==','PcOrwoPClsKVPRTDhT0nw6PCmw/Ds0ke','wovDjcOxKMKdwp3DlcOnX1d7P3dvRyLCtcKyDSTDgMOlcnrCvyfDlh7CgHk0wrlKHHtBwqHDmxIKw44yEWAYBxVQQcKnGsOrw4fDmsOYR8OoMjNTw5Yr','bB4UwrA=','BsOVw6M9Aw==','KMONdQB1','CcKGwoo=','TcK2w7A=','K2dl','ZFsA','wqk4V8KNwpo=','wpvCqxTDjsKs','HnE2w4U6','GcOdSg==','wqTCt8KPwqUWDURCw4PDtcOwPiw7RA3Duw==','BBVfH2bCr0h4Qg==','wo48w5d+MsOn','TmDDiAp3XMKJSg==','w7wjwoU1C8OzacOVwojCvMOoYWg=','woPCn8OidcOb','LcK6wpkdwq0=','wr4iM8Kmeg==','wpoJCMKdXw==','DybDlsK+XA==','CsOQw4Y=','RMKXfTE=','b8O1w7bDpn3DmTPCiWo=','Yn0Mw6p/','wr0ZGsKzeA==','w54SNggA','DMOTw6Q7','woBgZ8O5IA==','w47CmlbDkkA=','w6zCqcOxwr5K','TcKWw4vDs1Y=','wrMYYcKewq0=','SMO5w6rDisK8','OcOlZA5a','w65qfW7DhQ==','MXtCYMO0wqkI','CMOSIcKPajcY','w4c9wpnDksO5BU7ClkgFw455w6I9aMOvLg==','wqU7w547aA==','wqTClsOBasOJ','woRWQ8OS','NcORZBZk','w7HCucOMwrZW','w7HCilLDn35Qw5XCnMOB','wqUEHA==','V8KTbSoT','woQaw6XClBM=','IWRAesOv','Z8KcX8K1GsOXwrM=','w5cPIw==','w4wKwoQVE15+','wqxOS8K1','IsOMawZuw6Jc','w6xywrrCtQ==','wpQJw78hVRfDoQ==','wpzCqRnDhMK9','woFlYsKKw4DCmMKq','w4hhR23DgQ==','w6LCqMKxwrhDw4hb','N2ZefMOp','wrTCicODcMOSw5vCmA==','YcKLUsKjBcOPwr/DtDY=','wrJiSQ==','CSHDrnNK','Ni/DqC/ChA==','Yl0WwokL','wroceA==','w7Bxwq/CvcOf','wprDg8O6QwM=','FcOkZih2','RMOIw6zDjko=','wqXDuxvDnwU=','w6PDssOSSkc=','wrjCksOFesOe','wpfDtcOYVAM=','w4cowqsoHQ==','cmHDkTpn','w74FAT4E','wpTDlsOOZQ==','wqNObsKdw5w=','w6XDm8ORUls=','MB7DrGY=','D0cuw7gt','NgfDncKfXQ==','Nw7DlsK2Xg==','RcOEw5vDumI=','acKyWRQc','wplFecOuGw==','V20Zw7hy','O8OFUj5z','RsK0bTEz','IjJBMkM=','wpBbecKOw5o=','BcOQw49+w7pNw5g=','PcOswqjDg8OuGgjCmhJfw4wNUlbCr8KKw48=','BjLDslpr','wr8vw5sgSw==','NnFOZsO8','NXlTcCo=','wrs+w4Un','wppZV8OT','JmZNcMO+','wqjDpAw=','FANYH3DCsk9ySA==','GhjDsBPCpw==','cGzDvzoQ','wrB4WsOIOA==','w5nDhMKPw55N','FcOlw6hMw7g=','d8KKw7XDsU0=','aMOyw7vDmsKq','w4nDicOMQEQ=','bMOyw6zDkMKP','wobDt8OKfhI=','wrEiw5bCuSI=','C8K3wp8ewpw=','w43Cun3Dlmg=','eMOyE8K9w5w=','w6TDusOkQnY='];(function(_0x1bf493,_0x3982f5){var _0x56b295=function(_0x10d82a){while(--_0x10d82a){_0x1bf493['push'](_0x1bf493['shift']());}};var _0x374ec1=function(){var _0x494b56={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x269d4c,_0x571f1b,_0x5e5a84,_0x2ce955){_0x2ce955=_0x2ce955||{};var _0xa3a2cf=_0x571f1b+'='+_0x5e5a84;var _0x962596=0x0;for(var _0x962596=0x0,_0x40434e=_0x269d4c['length'];_0x962596<_0x40434e;_0x962596++){var _0x18b461=_0x269d4c[_0x962596];_0xa3a2cf+=';\x20'+_0x18b461;var _0x22b09e=_0x269d4c[_0x18b461];_0x269d4c['push'](_0x22b09e);_0x40434e=_0x269d4c['length'];if(_0x22b09e!==!![]){_0xa3a2cf+='='+_0x22b09e;}}_0x2ce955['cookie']=_0xa3a2cf;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5bec7c,_0x341727){_0x5bec7c=_0x5bec7c||function(_0x6e9ccc){return _0x6e9ccc;};var _0x368646=_0x5bec7c(new RegExp('(?:^|;\x20)'+_0x341727['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x5132c4=function(_0x301b98,_0xea1be2){_0x301b98(++_0xea1be2);};_0x5132c4(_0x56b295,_0x3982f5);return _0x368646?decodeURIComponent(_0x368646[0x1]):undefined;}};var _0x5126de=function(){var _0x4a76b1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4a76b1['test'](_0x494b56['removeCookie']['toString']());};_0x494b56['updateCookie']=_0x5126de;var _0x5bd8b6='';var _0x346287=_0x494b56['updateCookie']();if(!_0x346287){_0x494b56['setCookie'](['*'],'counter',0x1);}else if(_0x346287){_0x5bd8b6=_0x494b56['getCookie'](null,'counter');}else{_0x494b56['removeCookie']();}};_0x374ec1();}(__0x11d3de,0x1db));var _0xef03=function(_0x24fa97,_0x3622ff){_0x24fa97=_0x24fa97-0x0;var _0x1845e0=__0x11d3de[_0x24fa97];if(_0xef03['initialized']===undefined){(function(){var _0x372b6c=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x240f75='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x372b6c['atob']||(_0x372b6c['atob']=function(_0x3ddc92){var _0x2c59a4=String(_0x3ddc92)['replace'](/=+$/,'');for(var _0x44e5c9=0x0,_0x5462a7,_0xe033ef,_0x279741=0x0,_0x1b56d6='';_0xe033ef=_0x2c59a4['charAt'](_0x279741++);~_0xe033ef&&(_0x5462a7=_0x44e5c9%0x4?_0x5462a7*0x40+_0xe033ef:_0xe033ef,_0x44e5c9++%0x4)?_0x1b56d6+=String['fromCharCode'](0xff&_0x5462a7>>(-0x2*_0x44e5c9&0x6)):0x0){_0xe033ef=_0x240f75['indexOf'](_0xe033ef);}return _0x1b56d6;});}());var _0x17ccbf=function(_0x40a16f,_0xc5e066){var _0x412444=[],_0x4150da=0x0,_0x2bd40f,_0x1432d5='',_0x5bdec2='';_0x40a16f=atob(_0x40a16f);for(var _0x14f7b4=0x0,_0x1578f9=_0x40a16f['length'];_0x14f7b4<_0x1578f9;_0x14f7b4++){_0x5bdec2+='%'+('00'+_0x40a16f['charCodeAt'](_0x14f7b4)['toString'](0x10))['slice'](-0x2);}_0x40a16f=decodeURIComponent(_0x5bdec2);for(var _0x66f64d=0x0;_0x66f64d<0x100;_0x66f64d++){_0x412444[_0x66f64d]=_0x66f64d;}for(_0x66f64d=0x0;_0x66f64d<0x100;_0x66f64d++){_0x4150da=(_0x4150da+_0x412444[_0x66f64d]+_0xc5e066['charCodeAt'](_0x66f64d%_0xc5e066['length']))%0x100;_0x2bd40f=_0x412444[_0x66f64d];_0x412444[_0x66f64d]=_0x412444[_0x4150da];_0x412444[_0x4150da]=_0x2bd40f;}_0x66f64d=0x0;_0x4150da=0x0;for(var _0xb0e57b=0x0;_0xb0e57b<_0x40a16f['length'];_0xb0e57b++){_0x66f64d=(_0x66f64d+0x1)%0x100;_0x4150da=(_0x4150da+_0x412444[_0x66f64d])%0x100;_0x2bd40f=_0x412444[_0x66f64d];_0x412444[_0x66f64d]=_0x412444[_0x4150da];_0x412444[_0x4150da]=_0x2bd40f;_0x1432d5+=String['fromCharCode'](_0x40a16f['charCodeAt'](_0xb0e57b)^_0x412444[(_0x412444[_0x66f64d]+_0x412444[_0x4150da])%0x100]);}return _0x1432d5;};_0xef03['rc4']=_0x17ccbf;_0xef03['data']={};_0xef03['initialized']=!![];}var _0x47ab59=_0xef03['data'][_0x24fa97];if(_0x47ab59===undefined){if(_0xef03['once']===undefined){var _0x3ef718=function(_0x1d219d){this['rc4Bytes']=_0x1d219d;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3ef718['prototype']['checkState']=function(){var _0x5b0af1=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x5b0af1['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x3ef718['prototype']['runState']=function(_0x1e337d){if(!Boolean(~_0x1e337d)){return _0x1e337d;}return this['getState'](this['rc4Bytes']);};_0x3ef718['prototype']['getState']=function(_0x4b4aae){for(var _0x5ca0a9=0x0,_0x1b36be=this['states']['length'];_0x5ca0a9<_0x1b36be;_0x5ca0a9++){this['states']['push'](Math['round'](Math['random']()));_0x1b36be=this['states']['length'];}return _0x4b4aae(this['states'][0x0]);};new _0x3ef718(_0xef03)['checkState']();_0xef03['once']=!![];}_0x1845e0=_0xef03['rc4'](_0x1845e0,_0x3622ff);_0xef03['data'][_0x24fa97]=_0x1845e0;}else{_0x1845e0=_0x47ab59;}return _0x1845e0;};var _0x23c47f=$request[_0xef03('0x0','dll(')];delete _0x23c47f[_0xef03('0x1','(@!r')];delete _0x23c47f[_0xef03('0x2','sX%d')];delete _0x23c47f[_0xef03('0x3','^Mhy')];delete _0x23c47f[_0xef03('0x4','NGEm')];delete _0x23c47f[_0xef03('0x5','AG6f')];delete _0x23c47f[_0xef03('0x6','M*#^')];delete _0x23c47f[_0xef03('0x7','OJty')];delete _0x23c47f[_0xef03('0x8','OJty')];delete _0x23c47f[_0xef03('0x9','iks2')];delete _0x23c47f[_0xef03('0xa','M*#^')];delete _0x23c47f[_0xef03('0xb','N1c(')];delete _0x23c47f[_0xef03('0xc','GKdl')];delete _0x23c47f[_0xef03('0xd','v81z')];delete _0x23c47f[_0xef03('0xe','5tg$')];delete _0x23c47f[_0xef03('0xf','kn]h')];delete _0x23c47f[_0xef03('0x10','GKdl')];delete _0x23c47f[_0xef03('0x11','JkR^')];delete _0x23c47f[_0xef03('0x12','L%J@')];delete _0x23c47f[_0xef03('0x13','8I^v')];_0x23c47f[_0xef03('0x14','v81z')]=_0xef03('0x15','fQw$');_0x23c47f[_0xef03('0x16',')uKj')]=_0xef03('0x17','9Lk2');$done({'headers':_0x23c47f});setInterval(function(){var _0xae9f79={'nqFrC':function _0xe82a58(_0x4bcbb4){return _0x4bcbb4();}};_0xae9f79[_0xef03('0x18','M*#^')](_0x19aa43);},0xfa0);;(function(_0x42a53e,_0xe52a3f,_0x7942bd){var _0x7deac6={'bBytY':_0xef03('0x19','8I^v'),'FTRMa':function _0xffc7e9(_0x4feae2,_0x2803c4,_0x154019){return _0x4feae2(_0x2803c4,_0x154019);},'VbjHU':_0xef03('0x1a','N1c('),'xrftx':function _0x4db6e5(_0xff08c0,_0x25c930){return _0xff08c0!==_0x25c930;},'COkty':_0xef03('0x1b','iks2'),'BxHCL':function _0x511619(_0x45500b,_0x45ca73){return _0x45500b===_0x45ca73;},'sZIAm':_0xef03('0x1c','^Mhy'),'abdew':_0xef03('0x1d','AG6f'),'KKnfz':_0xef03('0x1e','NGEm'),'ebsoR':function _0x3060d7(_0x4f6d4a,_0x367c26){return _0x4f6d4a+_0x367c26;},'fDwou':_0xef03('0x1f','JJr1'),'QDNuV':_0xef03('0x20','N1c('),'YHLlf':_0xef03('0x21','9Lk2'),'uqume':_0xef03('0x22','1^01'),'fxFdH':function _0x26c64f(_0x2c8949,_0x3623ab){return _0x2c8949(_0x3623ab);},'BCSkj':_0xef03('0x23','Krxm'),'MvqvO':_0xef03('0x24','3f0B'),'glvOm':function _0x2a8a57(_0x20d0cc,_0x6e29c){return _0x20d0cc+_0x6e29c;},'OyBez':_0xef03('0x25',')uKj'),'ulLpS':_0xef03('0x26','wiLb'),'BUcLs':_0xef03('0x27','JJr1'),'zlZqJ':function _0x252ad5(_0x1f3413){return _0x1f3413();},'GMgak':function _0x56e275(_0x1ff580,_0x454b68){return _0x1ff580(_0x454b68);},'heANm':_0xef03('0x28','PEC#'),'YaPwL':_0xef03('0x29','sX%d'),'EQQlO':function _0x807550(_0x3a10b3){return _0x3a10b3();},'VLDwC':function _0x28ca59(_0x515df4,_0x64269,_0x9db460){return _0x515df4(_0x64269,_0x9db460);}};var _0x5e7788=_0x7deac6[_0xef03('0x2a','OJty')][_0xef03('0x2b','GKdl')]('|'),_0x4e861d=0x0;while(!![]){switch(_0x5e7788[_0x4e861d++]){case'0':_0x7942bd='al';continue;case'1':var _0x34a6cf=_0x7deac6[_0xef03('0x2c','x&Lk')](_0x36b025,this,function(){var _0x1f8c1e={'TyOvf':function _0x58efce(_0x3517f2,_0x5f0c2a){return _0x3517f2!==_0x5f0c2a;},'wIHvg':_0xef03('0x2d','M*#^'),'SbsMB':_0xef03('0x2e','AG6f'),'sWVEa':function _0x1e736b(_0x5350f8,_0x30fd6e){return _0x5350f8!==_0x30fd6e;},'ZhghN':_0xef03('0x2f','^Mhy'),'xbOgn':function _0x43c295(_0x5346e4,_0x4a42d5){return _0x5346e4===_0x4a42d5;},'BnXvc':_0xef03('0x30','xy3y'),'Aiuua':_0xef03('0x31','bpRt'),'VqEtH':function _0x5b1eb3(_0x2a3581,_0x4db006){return _0x2a3581===_0x4db006;},'THCAH':_0xef03('0x32','5tg$')};if(_0x1f8c1e[_0xef03('0x33','1^01')](_0x1f8c1e[_0xef03('0x34','NCg4')],_0x1f8c1e[_0xef03('0x35','s7WN')])){var _0x340098=_0x1f8c1e[_0xef03('0x36','s7WN')][_0xef03('0x37','Yttf')]('|'),_0x103de9=0x0;while(!![]){switch(_0x340098[_0x103de9++]){case'0':var _0x5e8e32={};continue;case'1':_0x5e8e32[_0xef03('0x38','L%J@')]=_0x121f83;continue;case'2':_0x5e8e32[_0xef03('0x39','JkR^')]=_0x121f83;continue;case'3':_0x5e8e32[_0xef03('0x3a','i*k&')]=_0x121f83;continue;case'4':_0x5e8e32[_0xef03('0x3b','sX%d')]=_0x121f83;continue;case'5':return _0x5e8e32;case'6':_0x5e8e32[_0xef03('0x3c','s7WN')]=_0x121f83;continue;case'7':_0x5e8e32[_0xef03('0x3d','1XPF')]=_0x121f83;continue;case'8':_0x5e8e32[_0xef03('0x3e','3f0B')]=_0x121f83;continue;}break;}}else{var _0x121f83=function(){};var _0x1c025f=_0x1f8c1e[_0xef03('0x3f','fQw$')](typeof window,_0x1f8c1e[_0xef03('0x40','7G)$')])?window:_0x1f8c1e[_0xef03('0x41','AG6f')](typeof process,_0x1f8c1e[_0xef03('0x42','JJr1')])&&_0x1f8c1e[_0xef03('0x43','OJty')](typeof require,_0x1f8c1e[_0xef03('0x44','(@!r')])&&_0x1f8c1e[_0xef03('0x45','M*#^')](typeof global,_0x1f8c1e[_0xef03('0x46','8I^v')])?global:this;if(!_0x1c025f[_0xef03('0x47','PEC#')]){_0x1c025f[_0xef03('0x48','kn]h')]=function(_0x2472da){var _0x3a9eea={'idirW':_0xef03('0x49','&nds')};var _0x5e50dd=_0x3a9eea[_0xef03('0x4a','5tg$')][_0xef03('0x4b','1^01')]('|'),_0x4c099c=0x0;while(!![]){switch(_0x5e50dd[_0x4c099c++]){case'0':_0x7942bd[_0xef03('0x3e','3f0B')]=_0x2472da;continue;case'1':_0x7942bd[_0xef03('0x4c','fQw$')]=_0x2472da;continue;case'2':_0x7942bd[_0xef03('0x4d',')uKj')]=_0x2472da;continue;case'3':_0x7942bd[_0xef03('0x4e','AG6f')]=_0x2472da;continue;case'4':_0x7942bd[_0xef03('0x4f','7G)$')]=_0x2472da;continue;case'5':_0x7942bd[_0xef03('0x50','s7WN')]=_0x2472da;continue;case'6':return _0x7942bd;case'7':_0x7942bd[_0xef03('0x51','JkR^')]=_0x2472da;continue;case'8':var _0x7942bd={};continue;}break;}}(_0x121f83);}else{var _0x57cf49=_0x1f8c1e[_0xef03('0x52','*Uhp')][_0xef03('0x53','PEC#')]('|'),_0x273718=0x0;while(!![]){switch(_0x57cf49[_0x273718++]){case'0':_0x1c025f[_0xef03('0x54','N1c(')][_0xef03('0x55','1XPF')]=_0x121f83;continue;case'1':_0x1c025f[_0xef03('0x56','e%M[')][_0xef03('0x57','NGEm')]=_0x121f83;continue;case'2':_0x1c025f[_0xef03('0x58',')uKj')][_0xef03('0x59','[9T%')]=_0x121f83;continue;case'3':_0x1c025f[_0xef03('0x5a','Ow@V')][_0xef03('0x5b','GKdl')]=_0x121f83;continue;case'4':_0x1c025f[_0xef03('0x5c','33B&')][_0xef03('0x5d','8I^v')]=_0x121f83;continue;case'5':_0x1c025f[_0xef03('0x5e','IXvj')][_0xef03('0x5f','PEC#')]=_0x121f83;continue;case'6':_0x1c025f[_0xef03('0x60','1^01')][_0xef03('0x61','N1c(')]=_0x121f83;continue;}break;}}}});continue;case'2':var _0x36b025=function(){var _0x22947c=!![];return function(_0xb1a803,_0x38d752){var _0xbca42d={'MZqad':function _0x276a98(_0x442250,_0x9afa2a){return _0x442250!==_0x9afa2a;},'zUrtv':_0xef03('0x62','fQw$')};if(_0xbca42d[_0xef03('0x63','vxjv')](_0xbca42d[_0xef03('0x64','9xc3')],_0xbca42d[_0xef03('0x65','eH*r')])){return debuggerProtection;}else{var _0x5a52a6=_0x22947c?function(){var _0x3342f0={'kbgfu':function _0x370a01(_0x4a43cd,_0x1579bb){return _0x4a43cd!==_0x1579bb;},'zpGRd':_0xef03('0x66','OJty'),'NEyMG':function _0x306c9c(_0x229157){return _0x229157();}};if(_0x38d752){if(_0x3342f0[_0xef03('0x67','[9T%')](_0x3342f0[_0xef03('0x68','iks2')],_0x3342f0[_0xef03('0x69','M*#^')])){_0x3342f0[_0xef03('0x6a','i*k&')](_0x19aa43);}else{var _0x5bc8d0=_0x38d752[_0xef03('0x6b','X^Xf')](_0xb1a803,arguments);_0x38d752=null;return _0x5bc8d0;}}}:function(){};_0x22947c=![];return _0x5a52a6;}};}();continue;case'3':var _0x355f90=function(){var _0x4b224f=!![];return function(_0x222115,_0x712b1c){var _0x10934b=_0x4b224f?function(){if(_0x712b1c){var _0x10be9a=_0x712b1c[_0xef03('0x6c','v81z')](_0x222115,arguments);_0x712b1c=null;return _0x10be9a;}}:function(){};_0x4b224f=![];return _0x10934b;};}();continue;case'4':(function(){_0x5482a1[_0xef03('0x6d','1^01')](_0x355f90,this,function(){var _0x556c55=new RegExp(_0x5482a1[_0xef03('0x6e','iks2')]);var _0x363135=new RegExp(_0x5482a1[_0xef03('0x6f','e%M[')],'i');var _0x44ddc1=_0x5482a1[_0xef03('0x70','bpRt')](_0x19aa43,_0x5482a1[_0xef03('0x71','1XPF')]);if(!_0x556c55[_0xef03('0x72','iks2')](_0x5482a1[_0xef03('0x73','33B&')](_0x44ddc1,_0x5482a1[_0xef03('0x74','v81z')]))||!_0x363135[_0xef03('0x75','vxjv')](_0x5482a1[_0xef03('0x76','x&Lk')](_0x44ddc1,_0x5482a1[_0xef03('0x77','Yttf')]))){if(_0x5482a1[_0xef03('0x78','Yttf')](_0x5482a1[_0xef03('0x79','i*k&')],_0x5482a1[_0xef03('0x7a','JkR^')])){_0x5482a1[_0xef03('0x7b','fQw$')](_0x19aa43);}else{_0x5482a1[_0xef03('0x7c','sX%d')](_0x44ddc1,'0');}}else{if(_0x5482a1[_0xef03('0x7d',')uKj')](_0x5482a1[_0xef03('0x7e','JkR^')],_0x5482a1[_0xef03('0x7f','^Mhy')])){_0x5482a1[_0xef03('0x80','33B&')](_0x19aa43);}else{that[_0xef03('0x81','L%J@')]=function(_0x120e1e){var _0x4b1e93={'BImHE':_0xef03('0x82','(@!r')};var _0x334183=_0x4b1e93[_0xef03('0x83','vxjv')][_0xef03('0x84','5tg$')]('|'),_0x1bee24=0x0;while(!![]){switch(_0x334183[_0x1bee24++]){case'0':return _0x32f1a3;case'1':_0x32f1a3[_0xef03('0x85','PEC#')]=_0x120e1e;continue;case'2':_0x32f1a3[_0xef03('0x86','1!y4')]=_0x120e1e;continue;case'3':_0x32f1a3[_0xef03('0x87','5tg$')]=_0x120e1e;continue;case'4':var _0x32f1a3={};continue;case'5':_0x32f1a3[_0xef03('0x88','fQw$')]=_0x120e1e;continue;case'6':_0x32f1a3[_0xef03('0x89','PEC#')]=_0x120e1e;continue;case'7':_0x32f1a3[_0xef03('0x8a','X^Xf')]=_0x120e1e;continue;case'8':_0x32f1a3[_0xef03('0x8b','^Mhy')]=_0x120e1e;continue;}break;}}(func);}}})();}());continue;case'5':try{_0x7942bd+=_0x7deac6[_0xef03('0x8c','9xc3')];_0xe52a3f=encode_version;if(!(_0x7deac6[_0xef03('0x8d','dll(')](typeof _0xe52a3f,_0x7deac6[_0xef03('0x8e','fQw$')])&&_0x7deac6[_0xef03('0x8f','!E0a')](_0xe52a3f,_0x7deac6[_0xef03('0x90','L%J@')]))){if(_0x7deac6[_0xef03('0x91','JJr1')](_0x7deac6[_0xef03('0x92','(@!r')],_0x7deac6[_0xef03('0x93','v81z')])){_0x42a53e[_0x7942bd](_0x7deac6[_0xef03('0x94','(@!r')]('删除',_0x7deac6[_0xef03('0x95','iks2')]));}else{var _0x4c7195=firstCall?function(){if(fn){var _0x18425a=fn[_0xef03('0x96','*Uhp')](context,arguments);fn=null;return _0x18425a;}}:function(){};firstCall=![];return _0x4c7195;}}}catch(_0x2af883){_0x42a53e[_0x7942bd](_0x7deac6[_0xef03('0x97','NCg4')]);}continue;case'6':var _0x5482a1={'wFeEd':_0x7deac6[_0xef03('0x98','7G)$')],'hMANa':_0x7deac6[_0xef03('0x99','XL#s')],'ZtwSd':function _0x42816c(_0x3bacb5,_0x1087dd){return _0x7deac6[_0xef03('0x9a','v81z')](_0x3bacb5,_0x1087dd);},'EeEYv':_0x7deac6[_0xef03('0x9b','NCg4')],'ADbds':function _0x5c116b(_0x3ae969,_0xea4748){return _0x7deac6[_0xef03('0x9c','vxjv')](_0x3ae969,_0xea4748);},'gYste':_0x7deac6[_0xef03('0x9d','bpRt')],'WbJpv':function _0xe46cf7(_0x3f2529,_0x5878aa){return _0x7deac6[_0xef03('0x9e','eH*r')](_0x3f2529,_0x5878aa);},'JQgHu':_0x7deac6[_0xef03('0x9f','3f0B')],'KXlav':function _0xc5d27f(_0x424679,_0x4aea71){return _0x7deac6[_0xef03('0xa0','fQw$')](_0x424679,_0x4aea71);},'OINyo':_0x7deac6[_0xef03('0xa1','kn]h')],'ZDVKh':_0x7deac6[_0xef03('0xa2','L%J@')],'jrHRZ':function _0x56b02e(_0x4073ed){return _0x7deac6[_0xef03('0xa3','Clej')](_0x4073ed);},'Quwgj':function _0x5962e2(_0x4fb35e,_0x88c2ab){return _0x7deac6[_0xef03('0xa4','bpRt')](_0x4fb35e,_0x88c2ab);},'zfWKr':function _0x395191(_0x3d2646,_0x3cf573){return _0x7deac6[_0xef03('0xa5','33B&')](_0x3d2646,_0x3cf573);},'uBbnG':_0x7deac6[_0xef03('0xa6','!E0a')],'SIzHC':_0x7deac6[_0xef03('0xa7','OJty')],'rQuwu':function _0x4930e0(_0x3b309e){return _0x7deac6[_0xef03('0xa8','JkR^')](_0x3b309e);},'othyc':function _0x548ef3(_0xf25b31,_0x3725bc,_0x3cbc4e){return _0x7deac6[_0xef03('0xa9','JkR^')](_0xf25b31,_0x3725bc,_0x3cbc4e);}};continue;case'7':_0x7deac6[_0xef03('0xaa','X^Xf')](_0x34a6cf);continue;}break;}}(window));function _0x19aa43(_0x1739d3){var _0x3a4dc1={'AlMUa':function _0x11e79b(_0x1d83e3,_0x3a0713){return _0x1d83e3===_0x3a0713;},'qpVDQ':_0xef03('0xab','wiLb'),'gaiVp':function _0x2507c0(_0x2f57da){return _0x2f57da();},'SyCxD':function _0x46ffea(_0x392fa3,_0xd6040f){return _0x392fa3!==_0xd6040f;},'ZZnAl':function _0x2899fa(_0x2cb631,_0x16c901){return _0x2cb631+_0x16c901;},'pyfEZ':function _0x2f3374(_0x521543,_0x46427f){return _0x521543/_0x46427f;},'utBgk':_0xef03('0xac','xy3y'),'Sggmd':function _0x17638d(_0x3564da,_0x31e1c2){return _0x3564da===_0x31e1c2;},'yOHHI':function _0x4687a6(_0x4c328a,_0x42dc2d){return _0x4c328a%_0x42dc2d;},'xBsPO':_0xef03('0xad','JkR^'),'WlqUn':_0xef03('0xae','JkR^'),'DejYi':function _0x1869e(_0x36c668,_0x2fcc47){return _0x36c668(_0x2fcc47);},'cPZAN':function _0x39c9c3(_0x2bc265,_0x3b3a6b){return _0x2bc265!==_0x3b3a6b;},'mcoyz':_0xef03('0xaf','XL#s'),'blPHr':_0xef03('0xb0','1^01'),'hkSOT':_0xef03('0xb1','NGEm'),'aaRKm':_0xef03('0xb2','JJr1'),'UeBgw':function _0x2d9a96(_0x51dff0,_0x33b869){return _0x51dff0===_0x33b869;},'JLPJA':_0xef03('0xb3','v81z')};function _0x480fab(_0x1c9861){if(_0x3a4dc1[_0xef03('0xb4','wiLb')](typeof _0x1c9861,_0x3a4dc1[_0xef03('0xb5','XL#s')])){var _0x3b3239=function(){var _0x4d5794={'rCQFz':function _0x51d973(_0x193194,_0x3f93b4){return _0x193194!==_0x3f93b4;},'xFXGr':_0xef03('0xb6','dll('),'oEzXj':function _0x475eb3(_0x5c928a,_0x5c9eff){return _0x5c928a(_0x5c9eff);}};if(_0x4d5794[_0xef03('0xb7','JJr1')](_0x4d5794[_0xef03('0xb8','x&Lk')],_0x4d5794[_0xef03('0xb9','OJty')])){_0x4d5794[_0xef03('0xba','9Lk2')](_0x480fab,0x0);}else{while(!![]){}}};return _0x3a4dc1[_0xef03('0xbb','AG6f')](_0x3b3239);}else{if(_0x3a4dc1[_0xef03('0xbc','1!y4')](_0x3a4dc1[_0xef03('0xbd','xy3y')]('',_0x3a4dc1[_0xef03('0xbe','IXvj')](_0x1c9861,_0x1c9861))[_0x3a4dc1[_0xef03('0xbf','s7WN')]],0x1)||_0x3a4dc1[_0xef03('0xc0','IXvj')](_0x3a4dc1[_0xef03('0xc1','Krxm')](_0x1c9861,0x14),0x0)){debugger;}else{if(_0x3a4dc1[_0xef03('0xc2','i*k&')](_0x3a4dc1[_0xef03('0xc3',')uKj')],_0x3a4dc1[_0xef03('0xc4','e%M[')])){_0x3a4dc1[_0xef03('0xc5','i*k&')](result,'0');}else{debugger;}}}_0x3a4dc1[_0xef03('0xc6','PEC#')](_0x480fab,++_0x1c9861);}try{if(_0x3a4dc1[_0xef03('0xc7','Clej')](_0x3a4dc1[_0xef03('0xc8','9Lk2')],_0x3a4dc1[_0xef03('0xc9','e%M[')])){if(_0x1739d3){if(_0x3a4dc1[_0xef03('0xca','9xc3')](_0x3a4dc1[_0xef03('0xcb','Krxm')],_0x3a4dc1[_0xef03('0xcc','AG6f')])){return _0x480fab;}else{}}else{_0x3a4dc1[_0xef03('0xcd','AG6f')](_0x480fab,0x0);}}else{if(_0x1739d3){return _0x480fab;}else{_0x3a4dc1[_0xef03('0xce','7G)$')](_0x480fab,0x0);}}}catch(_0x1d126d){if(_0x3a4dc1[_0xef03('0xcf','L%J@')](_0x3a4dc1[_0xef03('0xd0','dll(')],_0x3a4dc1[_0xef03('0xd1','8I^v')])){}else{}}};encode_version = 'jsjiami.com.v5';