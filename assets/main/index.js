System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,i,n,s,l,r,a,g,h,c,p,C,d,m,u,T;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,c=t.Label,p=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,T=t.Component}],execute:function(){var L,f,M,b,v,x,E,S,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(L=A("internal.DebugViewRuntimeControl"),f=y(r),M=y(r),b=y(r),L((E=e((x=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",E,n(e)),i(e,"singleModeToggle",S,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct TRT","Env TRT","TRT All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","TRT","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[p.WHITE,p.BLACK,p.RED,p.GREEN,p.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var T=h(this.EnableAllCompositeModeButton.getChildByName("Label"));T.setPosition(i+(u>0?450:150),n,0),T.setScale(.75,.75,.75),T.parent=r;var L=T.getComponent(c);L.string=u?"----------Composite Mode----------":"----------Single Mode----------",L.color=p.WHITE,L.overflow=0,this.labelComponentList[this.labelComponentList.length]=L}n-=20;for(var f=0,M=0;M<this.strSingle.length;M++,f++){M===this.strSingle.length>>1&&(i+=200,f=0);var b=M?h(this.singleModeToggle):this.singleModeToggle;b.setPosition(i,n-20*f,0),b.setScale(.5,.5,.5),b.parent=this.singleModeToggle.parent;var v=b.getComponentInChildren(C);v.string=this.strSingle[M],this.textComponentList[this.textComponentList.length]=v,this.textContentList[this.textContentList.length]=v.string,b.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[M]=b}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var x=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=x;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+90,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.changeTextColor,this),E.parent=l,(x=E.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=x;var S=h(this.EnableAllCompositeModeButton);S.setPosition(i+200,n,0),S.setScale(.5,.5,.5),S.on(m.EventType.CLICK,this.hideUI,this),S.parent=this.node.parent,(x=S.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=x,this.hideButtonLabel=x,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(T)).prototype,"compositeModeToggle",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(x.prototype,"singleModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(x.prototype,"EnableAllCompositeModeButton",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=x))||v));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,n,o,r,l,a,u,s,p,c,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,a=e.Prefab,u=e.Node,s=e.instantiate,p=e.randomRange,c=e.NodePool,m=e.Component}],execute:function(){var f,b,y,g,h,d,v,z,w,P,G,F,M,_,B,D,L;r._RF.push({},"cbf8b4gYGFFG7P1wcBQBicF","GameManager",void 0);var R=l.ccclass,k=l.property;e("GameManager",(f=R("GameManager"),b=k({type:a}),y=k({type:a}),g=k({type:a}),h=k({type:a}),d=k({type:a}),v=k({type:a}),z=k({type:u}),f((G=t((P=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,n(t,"item",G,o(t)),n(t,"item1",F,o(t)),n(t,"item2",M,o(t)),n(t,"item3",_,o(t)),n(t,"item4",B,o(t)),n(t,"item5",D,o(t)),n(t,"nodes",L,o(t)),t.isn=void 0,t.itempool=new c("node"),t}i(t,e);var r=t.prototype;return r.onLoad=function(){for(var e=0;e<100;e++){var t=s(this.item);this.itempool.put(t),console.log("ok")}},r.start=function(){console.log(this.itempool.size()),setInterval(this.ini,3e3)},r.update=function(e){if(this.itempool.size()>0&&0==this.nodes.children.length){var t=p(-100,100),i=this.itempool.get();this.nodes.addChild(i),i.setParent(this.nodes),i.setPosition(t,i.position.y),console.log("yes")}if(this.itempool.size()<100){var n=s(this.item);this.itempool.put(n)}},r.ini=function(){},t}(m)).prototype,"item",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=t(P.prototype,"item1",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=t(P.prototype,"item2",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=t(P.prototype,"item3",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=t(P.prototype,"item4",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(P.prototype,"item5",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(P.prototype,"nodes",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=P))||w));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./GameManager.ts","./Move.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Move.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,i,r,c,s,a,u,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,c=t._decorator,s=t.Collider2D,a=t.Contact2DType,u=t.RigidBody2D,p=t.Component}],execute:function(){var l,d,f,h,g;r._RF.push({},"b8fdc4nwH5PZ4TrjNfd4iSS","Move",void 0);var y=c.ccclass,C=c.property;t("Move",(l=y("Move"),d=C({type:Number}),l((g=e((h=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r))||this,o(e,"speed",g,i(e)),e}n(e,t);var r=e.prototype;return r.onLoad=function(){},r.start=function(){var t=this.getComponent(s);t&&(t.on(a.BEGIN_CONTACT,this.OnBeginContact,this),t.on(a.END_CONTACT,this.OnBeginContact,this))},r.update=function(t){this.getComponent(u)},r.OnBeginContact=function(t,e,n){console.log("onBeginContact"),this.node.destroy()},e}(p)).prototype,"speed",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),f=h))||f));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});