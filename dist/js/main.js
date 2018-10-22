!function(t){var e={};function r(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=0)}([function(t,e,r){t.exports=r(5)},function(t,e,r){},,,function(t,e,r){t.exports=r.p+"index.html"},function(t,e,r){"use strict";r.r(e);var i=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class s{static attachTo(t){return new s(t,new i)}constructor(t,e,...r){this.root_=t,this.initialize(...r),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,r=!1){let i;"function"==typeof CustomEvent?i=new CustomEvent(t,{detail:e,bubbles:r}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,r,!1,e),this.root_.dispatchEvent(i)}}var a=s;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const n={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete",HAS_TRACK_MARKER:"mdc-slider--display-markers"},o={TRACK_SELECTOR:".mdc-slider__track",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",LAST_TRACK_MARKER_SELECTOR:".mdc-slider__track-marker:last-child",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUENOW:"aria-valuenow",ARIA_DISABLED:"aria-disabled",STEP_DATA_ATTR:"data-step",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input"},d={PAGE_FACTOR:4};const h={animationstart:{noPrefix:"animationstart",webkitPrefix:"webkitAnimationStart",styleProperty:"animation"},animationend:{noPrefix:"animationend",webkitPrefix:"webkitAnimationEnd",styleProperty:"animation"},animationiteration:{noPrefix:"animationiteration",webkitPrefix:"webkitAnimationIteration",styleProperty:"animation"},transitionend:{noPrefix:"transitionend",webkitPrefix:"webkitTransitionEnd",styleProperty:"transition"}},_={animation:{noPrefix:"animation",webkitPrefix:"-webkit-animation"},transform:{noPrefix:"transform",webkitPrefix:"-webkit-transform"},transition:{noPrefix:"transition",webkitPrefix:"-webkit-transition"}};function u(t,e){if(!function(t){return void 0!==t.document&&"function"==typeof t.document.createElement}(t)||!function(t){return t in h||t in _}(e))return e;const r=e in h?h:_,i=t.document.createElement("div");let s="";return s=r===h?function(t,e,r){return e[t].styleProperty in r.style?e[t].noPrefix:e[t].webkitPrefix}(e,r,i):r[e].noPrefix in i.style?r[e].noPrefix:r[e].webkitPrefix}function l(t,e){return u(t,e)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const c={ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",HOME:"Home",END:"End",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},p={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"pointermove"},m=["mousedown","pointerdown","touchstart"],A=["mouseup","pointerup","touchend"];class g extends i{static get cssClasses(){return n}static get strings(){return o}static get numbers(){return d}static get defaultAdapter(){return{hasClass:()=>!1,addClass:()=>{},removeClass:()=>{},getAttribute:()=>null,setAttribute:()=>{},removeAttribute:()=>{},computeBoundingRect:()=>({top:0,right:0,bottom:0,left:0,width:0,height:0}),getTabIndex:()=>0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerThumbContainerInteractionHandler:()=>{},deregisterThumbContainerInteractionHandler:()=>{},registerBodyInteractionHandler:()=>{},deregisterBodyInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},notifyInput:()=>{},notifyChange:()=>{},setThumbContainerStyleProperty:()=>{},setTrackStyleProperty:()=>{},setMarkerValue:()=>{},appendTrackMarkers:()=>{},removeTrackMarkers:()=>{},setLastTrackMarkersStyleProperty:()=>{},isRTL:()=>!1}}constructor(t){super(Object.assign(g.defaultAdapter,t)),this.rect_=null,this.savedTabIndex_=NaN,this.active_=!1,this.inTransit_=!1,this.isDiscrete_=!1,this.hasTrackMarker_=!1,this.handlingThumbTargetEvt_=!1,this.min_=0,this.max_=100,this.step_=0,this.value_=0,this.disabled_=!1,this.preventFocusState_=!1,this.updateUIFrame_=0,this.thumbContainerPointerHandler_=(()=>{this.handlingThumbTargetEvt_=!0}),this.interactionStartHandler_=(t=>this.handleDown_(t)),this.keydownHandler_=(t=>this.handleKeydown_(t)),this.focusHandler_=(()=>this.handleFocus_()),this.blurHandler_=(()=>this.handleBlur_()),this.resizeHandler_=(()=>this.layout())}init(){this.isDiscrete_=this.adapter_.hasClass(n.IS_DISCRETE),this.hasTrackMarker_=this.adapter_.hasClass(n.HAS_TRACK_MARKER),m.forEach(t=>this.adapter_.registerInteractionHandler(t,this.interactionStartHandler_)),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),m.forEach(t=>{this.adapter_.registerThumbContainerInteractionHandler(t,this.thumbContainerPointerHandler_)}),this.adapter_.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0==this.getStep()&&(this.step_=1)}destroy(){m.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.interactionStartHandler_)}),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),m.forEach(t=>{this.adapter_.deregisterThumbContainerInteractionHandler(t,this.thumbContainerPointerHandler_)}),this.adapter_.deregisterResizeHandler(this.resizeHandler_)}setupTrackMarker(){if(this.isDiscrete_&&this.hasTrackMarker_&&0!=this.getStep()){const t=this.getMin(),e=this.getMax(),r=this.getStep();let i=(e-t)/r;const s=Math.ceil(i)!==i;if(s&&(i=Math.ceil(i)),this.adapter_.removeTrackMarkers(),this.adapter_.appendTrackMarkers(i),s){const t=(e-i*r)/r+1,s=l(window,"flex");this.adapter_.setLastTrackMarkersStyleProperty(s,String(t))}}}layout(){this.rect_=this.adapter_.computeBoundingRect(),this.updateUIForCurrentValue_()}getValue(){return this.value_}setValue(t){this.setValue_(t,!1)}getMax(){return this.max_}setMax(t){if(t<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(o.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()}getMin(){return this.min_}setMin(t){if(t>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(o.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()}getStep(){return this.step_}setStep(t){if(t<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof t||t<1)&&(t=1),this.step_=t,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()}isDisabled(){return this.disabled_}setDisabled(t){this.disabled_=t,this.toggleClass_(n.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setAttribute(o.ARIA_DISABLED,"true"),this.adapter_.removeAttribute("tabindex")):(this.adapter_.removeAttribute(o.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter_.setAttribute("tabindex",String(this.savedTabIndex_)))}handleDown_(t){if(this.disabled_)return;this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);const e=t=>{this.handleMove_(t)},r=()=>{this.handleUp_(),this.adapter_.deregisterBodyInteractionHandler(p[t.type],e),A.forEach(t=>this.adapter_.deregisterBodyInteractionHandler(t,r))};this.adapter_.registerBodyInteractionHandler(p[t.type],e),A.forEach(t=>this.adapter_.registerBodyInteractionHandler(t,r)),this.setValueFromEvt_(t)}handleMove_(t){t.preventDefault(),this.setValueFromEvt_(t)}handleUp_(){this.setActive_(!1),this.adapter_.notifyChange()}getPageX_(t){return t.targetTouches&&t.targetTouches.length>0?t.targetTouches[0].pageX:t.pageX}setValueFromEvt_(t){const e=this.getPageX_(t),r=this.computeValueFromPageX_(e);this.setValue_(r,!0)}computeValueFromPageX_(t){const{max_:e,min_:r}=this;let i=(t-this.rect_.left)/this.rect_.width;return this.adapter_.isRTL()&&(i=1-i),r+i*(e-r)}handleKeydown_(t){const e=this.getKeyId_(t),r=this.getValueForKeyId_(e);isNaN(r)||(t.preventDefault(),this.adapter_.addClass(n.FOCUS),this.setValue_(r,!0),this.adapter_.notifyChange())}getKeyId_(t){return t.key===c.ARROW_LEFT||37===t.keyCode?c.ARROW_LEFT:t.key===c.ARROW_RIGHT||39===t.keyCode?c.ARROW_RIGHT:t.key===c.ARROW_UP||38===t.keyCode?c.ARROW_UP:t.key===c.ARROW_DOWN||40===t.keyCode?c.ARROW_DOWN:t.key===c.HOME||36===t.keyCode?c.HOME:t.key===c.END||35===t.keyCode?c.END:t.key===c.PAGE_UP||33===t.keyCode?c.PAGE_UP:t.key===c.PAGE_DOWN||34===t.keyCode?c.PAGE_DOWN:""}getValueForKeyId_(t){const{max_:e,min_:r,step_:i}=this;let s=i||(e-r)/100;switch(this.adapter_.isRTL()&&(t===c.ARROW_LEFT||t===c.ARROW_RIGHT)&&(s=-s),t){case c.ARROW_LEFT:case c.ARROW_DOWN:return this.value_-s;case c.ARROW_RIGHT:case c.ARROW_UP:return this.value_+s;case c.HOME:return this.min_;case c.END:return this.max_;case c.PAGE_UP:return this.value_+s*d.PAGE_FACTOR;case c.PAGE_DOWN:return this.value_-s*d.PAGE_FACTOR;default:return NaN}}handleFocus_(){this.preventFocusState_||this.adapter_.addClass(n.FOCUS)}handleBlur_(){this.preventFocusState_=!1,this.adapter_.removeClass(n.FOCUS)}setValue_(t,e,r=!1){if(t===this.value_&&!r)return;const{min_:i,max_:s}=this,a=t===i||t===s;this.step_&&!a&&(t=this.quantize_(t)),t<i?t=i:t>s&&(t=s),this.value_=t,this.adapter_.setAttribute(o.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),e&&(this.adapter_.notifyInput(),this.isDiscrete_&&this.adapter_.setMarkerValue(t))}quantize_(t){return Math.round(t/this.step_)*this.step_}updateUIForCurrentValue_(){const{max_:t,min_:e,value_:r}=this,i=(r-e)/(t-e);let s=i*this.rect_.width;this.adapter_.isRTL()&&(s=this.rect_.width-s);const a=l(window,"transform"),n=function(t,e){return u(t,e)}(window,"transitionend");if(this.inTransit_){const t=()=>{this.setInTransit_(!1),this.adapter_.deregisterThumbContainerInteractionHandler(n,t)};this.adapter_.registerThumbContainerInteractionHandler(n,t)}this.updateUIFrame_=requestAnimationFrame(()=>{this.adapter_.setThumbContainerStyleProperty(a,`translateX(${s}px) translateX(-50%)`),this.adapter_.setTrackStyleProperty(a,`scaleX(${i})`)})}setActive_(t){this.active_=t,this.toggleClass_(n.ACTIVE,this.active_)}setInTransit_(t){this.inTransit_=t,this.toggleClass_(n.IN_TRANSIT,this.inTransit_)}toggleClass_(t,e){e?this.adapter_.addClass(t):this.adapter_.removeClass(t)}}var E=g;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class f extends a{static attachTo(t){return new f(t)}constructor(...t){super(...t),this.thumbContainer_,this.track_,this.pinValueMarker_,this.trackMarkerContainer_}get value(){return this.foundation_.getValue()}set value(t){this.foundation_.setValue(t)}get min(){return this.foundation_.getMin()}set min(t){this.foundation_.setMin(t)}get max(){return this.foundation_.getMax()}set max(t){this.foundation_.setMax(t)}get step(){return this.foundation_.getStep()}set step(t){this.foundation_.setStep(t)}get disabled(){return this.foundation_.isDisabled()}set disabled(t){this.foundation_.setDisabled(t)}initialize(){this.thumbContainer_=this.root_.querySelector(o.THUMB_CONTAINER_SELECTOR),this.track_=this.root_.querySelector(o.TRACK_SELECTOR),this.pinValueMarker_=this.root_.querySelector(o.PIN_VALUE_MARKER_SELECTOR),this.trackMarkerContainer_=this.root_.querySelector(o.TRACK_MARKER_CONTAINER_SELECTOR)}getDefaultFoundation(){return new E({hasClass:t=>this.root_.classList.contains(t),addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),getAttribute:t=>this.root_.getAttribute(t),setAttribute:(t,e)=>this.root_.setAttribute(t,e),removeAttribute:t=>this.root_.removeAttribute(t),computeBoundingRect:()=>this.root_.getBoundingClientRect(),getTabIndex:()=>this.root_.tabIndex,registerInteractionHandler:(t,e)=>{this.root_.addEventListener(t,e)},deregisterInteractionHandler:(t,e)=>{this.root_.removeEventListener(t,e)},registerThumbContainerInteractionHandler:(t,e)=>{this.thumbContainer_.addEventListener(t,e)},deregisterThumbContainerInteractionHandler:(t,e)=>{this.thumbContainer_.removeEventListener(t,e)},registerBodyInteractionHandler:(t,e)=>{document.body.addEventListener(t,e)},deregisterBodyInteractionHandler:(t,e)=>{document.body.removeEventListener(t,e)},registerResizeHandler:t=>{window.addEventListener("resize",t)},deregisterResizeHandler:t=>{window.removeEventListener("resize",t)},notifyInput:()=>{this.emit(o.INPUT_EVENT,this)},notifyChange:()=>{this.emit(o.CHANGE_EVENT,this)},setThumbContainerStyleProperty:(t,e)=>{this.thumbContainer_.style.setProperty(t,e)},setTrackStyleProperty:(t,e)=>{this.track_.style.setProperty(t,e)},setMarkerValue:t=>{this.pinValueMarker_.innerText=t},appendTrackMarkers:t=>{const e=document.createDocumentFragment();for(let r=0;r<t;r++){const t=document.createElement("div");t.classList.add("mdc-slider__track-marker"),e.appendChild(t)}this.trackMarkerContainer_.appendChild(e)},removeTrackMarkers:()=>{for(;this.trackMarkerContainer_.firstChild;)this.trackMarkerContainer_.removeChild(this.trackMarkerContainer_.firstChild)},setLastTrackMarkersStyleProperty:(t,e)=>{this.root_.querySelector(o.LAST_TRACK_MARKER_SELECTOR).style.setProperty(t,e)},isRTL:()=>"rtl"===getComputedStyle(this.root_).direction})}initialSyncWithDOM(){const t=parseFloat(this.root_.getAttribute(o.ARIA_VALUENOW));this.min=parseFloat(this.root_.getAttribute(o.ARIA_VALUEMIN))||this.min,this.max=parseFloat(this.root_.getAttribute(o.ARIA_VALUEMAX))||this.max,this.step=parseFloat(this.root_.getAttribute(o.STEP_DATA_ATTR))||this.step,this.value=t||this.value,this.disabled=this.root_.hasAttribute(o.ARIA_DISABLED)&&"false"!==this.root_.getAttribute(o.ARIA_DISABLED),this.foundation_.setupTrackMarker()}layout(){this.foundation_.layout()}stepUp(t=this.step||1){this.value+=t}stepDown(t=this.step||1){this.value-=t}}r(1),r(4);const T=document.querySelectorAll(".mdc-slider");for(let t of T){let e=new f(t);e.listen("MDCSlider:change",function(){console.log(`value changed to ${e.value}`)})}}]);