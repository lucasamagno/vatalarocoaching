(function(){"use strict";var e={8374:function(e,a,n){var t=n(9242),o=n(3396);function i(e,a,n,t,i,s){const r=(0,o.up)("AppHeader"),l=(0,o.up)("router-view"),c=(0,o.up)("AppFooter");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r),(0,o.Wm)(l),(0,o.Wm)(c)],64)}const s=e=>((0,o.dD)("data-v-331a554e"),e=e(),(0,o.Cn)(),e),r={class:"navbar"},l=s((()=>(0,o._)("div",{class:"navbar-brand"},[(0,o._)("a",{href:"/"}," VC ")],-1))),c={class:"navbar-menu"},d={class:"navbar-end"};function u(e,a){const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",r,[l,(0,o._)("div",c,[(0,o._)("ul",d,[(0,o._)("li",null,[(0,o.Wm)(n,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(n,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(n,{to:"/executive-coaching"},{default:(0,o.w5)((()=>[(0,o.Uk)("Executive Coaching")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(n,{to:"/consulting"},{default:(0,o.w5)((()=>[(0,o.Uk)("Consulting")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(n,{to:"/contact"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contact")])),_:1})])])])])}var p=n(89);const v={},h=(0,p.Z)(v,[["render",u],["__scopeId","data-v-331a554e"]]);var g=h;const f=e=>((0,o.dD)("data-v-0a9887ce"),e=e(),(0,o.Cn)(),e),m={class:"app-footer"},_={class:"container"},b={class:"footer-content"},y={class:"footer-links"},w=f((()=>(0,o._)("div",{class:"footer-info"},[(0,o._)("p",null,"© 2024 Vatalaro Coaching | All rights reserved."),(0,o._)("a",{href:"https://www.linkedin.com/in/kayla-vatalaro/",target:"_blank","aria-label":"LinkedIn"},[(0,o._)("i",{class:"fab fa-linkedin"})])],-1)));var k={__name:"AppFooter",setup(e){return(e,a)=>{const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("footer",m,[(0,o._)("div",_,[(0,o._)("div",b,[(0,o._)("div",y,[(0,o._)("p",null,[(0,o.Wm)(n,{to:"/",class:"footer-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1})]),(0,o._)("p",null,[(0,o.Wm)(n,{to:"/about",class:"footer-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})]),(0,o._)("p",null,[(0,o.Wm)(n,{to:"/executive-coaching",class:"footer-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("Executive Coaching")])),_:1})]),(0,o._)("p",null,[(0,o.Wm)(n,{to:"/consulting",class:"footer-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("Consulting")])),_:1})]),(0,o._)("p",null,[(0,o.Wm)(n,{to:"/contact",class:"footer-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contact")])),_:1})])]),w])])])}}};const C=(0,p.Z)(k,[["__scopeId","data-v-0a9887ce"]]);var D=C,x={name:"App",components:{AppHeader:g,AppFooter:D}};const I=(0,p.Z)(x,[["render",i]]);var W=I,A=n(2483);const H=e=>((0,o.dD)("data-v-3e63839e"),e=e(),(0,o.Cn)(),e),E={class:"hero-section"},T=H((()=>(0,o._)("h1",null,"VATALARO COACHING",-1))),O=H((()=>(0,o._)("p",{class:"motto"},"Executive Coaching and Consulting Services",-1))),S=[T,O];var U={__name:"HeroSection",setup(e){return(e,a)=>((0,o.wg)(),(0,o.iD)("section",E,S))}};const P=(0,p.Z)(U,[["__scopeId","data-v-3e63839e"]]);var Z=P;const L=e=>((0,o.dD)("data-v-4e3cc11e"),e=e(),(0,o.Cn)(),e),F={class:"experience-section"},j=L((()=>(0,o._)("h3",{class:"experience-header"},"Experience",-1))),K={class:"companies"},M=["src","alt"];var q={__name:"ExperienceSection",setup(e){const a=[{name:"Asana",imgSrc:"/assets/images/asanalogo.png"},{name:"The Trade Desk",imgSrc:"/assets/images/thetradedesk.png"},{name:"Flow Traders",imgSrc:"/assets/images/flowtraders.png"},{name:"Time Inc",imgSrc:"/assets/images/timeinc.png"}];return(e,n)=>((0,o.wg)(),(0,o.iD)("section",F,[j,(0,o._)("div",K,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(a,(e=>(0,o._)("div",{class:"company-logo",key:e.name},[(0,o._)("img",{src:e.imgSrc,alt:e.name},null,8,M)]))),64))])]))}};const z=(0,p.Z)(q,[["__scopeId","data-v-4e3cc11e"]]);var N=z;const Y={class:"page-navigation"},G={key:0};function V(e,a){const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",Y,["/about"!==e.$route.path&&"/"!==e.$route.path?((0,o.wg)(),(0,o.iD)("p",G,[(0,o.Wm)(n,{to:"/about",class:"nav-button",id:"about-button"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})])):(0,o.kq)("",!0),(0,o._)("p",null,["/executive-coaching"!==e.$route.path?((0,o.wg)(),(0,o.j4)(n,{key:0,to:"/executive-coaching",class:"nav-button",id:"executive-coaching-button"},{default:(0,o.w5)((()=>[(0,o.Uk)("Executive Coaching")])),_:1})):(0,o.kq)("",!0)]),(0,o._)("p",null,["/consulting"!==e.$route.path?((0,o.wg)(),(0,o.j4)(n,{key:0,to:"/consulting",class:"nav-button",id:"consulting-button"},{default:(0,o.w5)((()=>[(0,o.Uk)("Consulting")])),_:1})):(0,o.kq)("",!0)])])}const B={},R=(0,p.Z)(B,[["render",V],["__scopeId","data-v-7fc07d5b"]]);var $=R;const J=e=>((0,o.dD)("data-v-1bfa0f24"),e=e(),(0,o.Cn)(),e),Q={class:"testimonials-section"},X=J((()=>(0,o._)("div",{class:"content"},[(0,o._)("h3",null,"Testimonials:"),(0,o._)("p",null,[(0,o._)("strong",null,'"Kayla\'s coaching was transformative for me. Her holistic approach helped me align my personal and professional life, achieving a balance I thought was out of reach."'),(0,o.Uk)(" - Alex, Tech Startup Founder")]),(0,o._)("p",null,[(0,o._)("strong",null,"\"Through her guidance, I've become a more effective leader, embracing diversity and fostering an inclusive culture in my team. Kayla's impact has been profound and lasting.\""),(0,o.Uk)(" - Jordan, Senior Executive")])],-1))),ee=[X];function ae(e,a){return(0,o.wg)(),(0,o.iD)("section",Q,ee)}const ne={},te=(0,p.Z)(ne,[["render",ae],["__scopeId","data-v-1bfa0f24"]]);var oe=te;const ie=e=>((0,o.dD)("data-v-9b85eb3a"),e=e(),(0,o.Cn)(),e),se={class:"lets-chat"},re=ie((()=>(0,o._)("h3",null,"Let's Chat",-1))),le=ie((()=>(0,o._)("p",null,"Have questions or want to learn more? Get in touch with Kayla today!",-1)));var ce={__name:"LetsChat",setup(e){return(e,a)=>{const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",se,[re,le,(0,o._)("p",null,[(0,o.Wm)(n,{to:"/contact",class:"contact-button"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contact Kayla")])),_:1})])])}}};const de=(0,p.Z)(ce,[["__scopeId","data-v-9b85eb3a"]]);var ue=de;const pe={class:"about-page"},ve=(0,o.uE)('<h1 class="about-title" data-v-272cb330>About</h1><div class="split-section" data-v-272cb330><div class="left-side" data-v-272cb330><img src="/assets/images/IMG_1455.jpg" alt="Description of Image" data-v-272cb330></div><div class="right-side" data-v-272cb330><h3 data-v-272cb330>Kayla Vatalaro</h3><p data-v-272cb330>Kayla brings a decade of executive &amp; leadership experience spanning Talent &amp; Diversity, GTM (Go-To-Market), and Social Impact at some of the world’s foremost organizations. Her career includes roles across diverse industries, from startups to multi-billion-dollar companies (often building from early-stage to post-IPO) in software, pharma, biotech, media, trading, and adtech. Kayla holds degrees and certifications in neuroscience, gender studies, business, sustainability, strength finding, and coaching. Her leadership approach has been recognized in publications like The Muse, Forbes, Marie Claire, and DigiDay. She was also honored as a 2022 Woman of the Year by Pledge 1% for International Women&#39;s Day, with a feature on NASDAQ.</p><p data-v-272cb330>With a deep understanding of the challenges and opportunities faced by today&#39;s leaders, Kayla provides a holistic approach to empower them for success in the dynamic professional landscape.</p><p data-v-272cb330>Kayla also provides pro bono strategy support to nonprofits and NGOs working to build a better world.</p><p data-v-272cb330>Visit Kayla on her LinkedIn <a href="https://www.linkedin.com/in/kayla-vatalaro/" data-v-272cb330>here</a>.</p></div></div>',2),he=[ve];function ge(e,a){return(0,o.wg)(),(0,o.iD)("div",pe,he)}const fe={},me=(0,p.Z)(fe,[["render",ge],["__scopeId","data-v-272cb330"]]);var _e=me,be={__name:"HomePage",setup(e){return(e,a)=>((0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(Z),(0,o.Wm)(N),(0,o.Wm)(_e),(0,o.Wm)(oe),(0,o.Wm)($),(0,o.Wm)(ue)]))}};const ye=be;var we=ye;const ke=e=>((0,o.dD)("data-v-fd1e3814"),e=e(),(0,o.Cn)(),e),Ce={class:"asana-embed-container"},De=ke((()=>(0,o._)("div",{class:"responsive-iframe-container"},[(0,o._)("iframe",{class:"asana-embed-iframe",src:"https://form.asana.com/?k=sCaIxNnJY_UyeR42D7YLCw&d=1201846958216343&embed=true",frameborder:"0"})],-1))),xe=ke((()=>(0,o._)("div",{class:"asana-embed-footer"},[(0,o._)("a",{rel:"nofollow noopener",target:"_blank",class:"asana-embed-footer-link",href:"https://asana.com/?utm_source=embedded_form"},[(0,o._)("div",{class:"asana-embed-footer-logo",role:"img","aria-label":"Logo of Asana"})])],-1))),Ie=[De,xe];function We(e,a){return(0,o.wg)(),(0,o.iD)("div",Ce,Ie)}const Ae={},He=(0,p.Z)(Ae,[["render",We],["__scopeId","data-v-fd1e3814"]]);var Ee=He;const Te=e=>((0,o.dD)("data-v-207f506c"),e=e(),(0,o.Cn)(),e),Oe={class:"approach-section"},Se=Te((()=>(0,o._)("div",{class:"content"},[(0,o._)("h3",null,"My Approach:"),(0,o._)("p",null,"As a practitioner of holistic coaching methods, I place a strong emphasis on total well-being and the principles of strengths-based psychology. Achieving profound growth in leadership occurs when your state of being aligns seamlessly with your actions."),(0,o._)("p",null,[(0,o.Uk)("I work closely with high achieving executives and leaders to cultivate practices that promote diversity, inclusion, and a sense of belonging within their teams, build winning businesses, and chart a personal path towards fulfillment and lasting impact. My mission is to support the creation and scaling of equitable, sustainable solutions that drive positive societal change, "),(0,o._)("strong",null,[(0,o._)("em",null,"with you at the helm.")])])],-1))),Ue=[Se];function Pe(e,a){return(0,o.wg)(),(0,o.iD)("section",Oe,Ue)}const Ze={},Le=(0,p.Z)(Ze,[["render",Pe],["__scopeId","data-v-207f506c"]]);var Fe=Le;const je={class:"areas-of-collaboration"},Ke=(0,o.uE)("<h2 data-v-79523fe2>Some of the areas we can work together on:</h2><ul data-v-79523fe2><li data-v-79523fe2><strong data-v-79523fe2>Self-Discovery:</strong> Embark on a journey of self-discovery to understand your unique strengths, values, and aspirations. </li><li data-v-79523fe2><strong data-v-79523fe2>Authentic Leadership:</strong> Embrace authenticity as a leader, fostering trust and connection with your team and colleagues. </li><li data-v-79523fe2><strong data-v-79523fe2>Diverse and Inclusive Leadership:</strong> Prioritize diversity and inclusion in your organization, fostering a culture of belonging. </li><li data-v-79523fe2><strong data-v-79523fe2>Goal Setting &amp; Strategy Development:</strong> Craft clear objectives and goals, and then develop a strategic roadmap to realize them. </li><li data-v-79523fe2><strong data-v-79523fe2>Corporate Navigation:</strong> Learn the art of navigating corporate landscapes effectively. Cultivate effective relationships with key stakeholders, colleagues, and mentors to enhance collaboration and support. </li><li data-v-79523fe2><strong data-v-79523fe2>Self-Reflection:</strong> Cultivate the habit of self-reflection to continuously improve your personal and professional effectiveness. </li><li data-v-79523fe2><strong data-v-79523fe2>Personal Fulfillment &amp; Purpose:</strong> Uncover your true sources of motivation and inspiration, and align your career accordingly. </li><li data-v-79523fe2><strong data-v-79523fe2>Time Management &amp; Personal Effectiveness:</strong> Optimize your productivity and personal effectiveness to achieve your professional and personal goals. </li><li data-v-79523fe2><strong data-v-79523fe2>Finding Your Voice:</strong> Cultivate authentic self-expression and effective communication to enhance your leadership presence. </li><li data-v-79523fe2><strong data-v-79523fe2>For Teams:</strong> Team excellence workshops, strengths assessments, positive intelligence building, conflict resolution, talent planning, employee relations, fostering inclusion, and manager enablement. </li></ul>",2),Me=[Ke];function qe(e,a){return(0,o.wg)(),(0,o.iD)("div",je,Me)}const ze={},Ne=(0,p.Z)(ze,[["render",qe],["__scopeId","data-v-79523fe2"]]);var Ye=Ne;const Ge=e=>((0,o.dD)("data-v-30c26f32"),e=e(),(0,o.Cn)(),e),Ve={class:"inclusive-leadership"},Be=Ge((()=>(0,o._)("h2",null,"Leading Diverse Teams and Building Inclusive Environments",-1))),Re=Ge((()=>(0,o._)("p",null,"As a leader of a diverse team or someone aspiring to build an inclusive environment, understanding and addressing biases is pivotal for effectiveness and positive change. Recognizing the challenges faced by underrepresented groups in the professional landscape, including systemic and cultural biases in funding, opportunity, and access, is crucial. My coaching approach is designed to help you become aware, better understand, and take action in dismantling these biases. By embracing this awareness, you not only become a more effective leader but also contribute to making the world a better and more inclusive place. Together, let's create workplaces and a world where everyone has equal opportunities to thrive and succeed.",-1))),$e=[Be,Re];function Je(e,a){return(0,o.wg)(),(0,o.iD)("div",Ve,$e)}const Qe={},Xe=(0,p.Z)(Qe,[["render",Je],["__scopeId","data-v-30c26f32"]]);var ea=Xe;const aa=e=>((0,o.dD)("data-v-06993ebd"),e=e(),(0,o.Cn)(),e),na={class:"executive-coaching"},ta=aa((()=>(0,o._)("h1",null,"Executive Coaching for first-time founders & new leaders",-1))),oa=aa((()=>(0,o._)("p",null,[(0,o._)("em",null,"Why you need an Executive Coach [4 min read]")],-1))),ia=aa((()=>(0,o._)("p",null,"I’m here to provide the essential support entrepreneurs and new leaders need: encouragement, a reliable sounding board, honest self-reflection, and support in developing crucial leadership skills. I take a personalized and holistic approach to coaching, drawn from strengths-based psychology and my own hands-on experience in the startup trenches.",-1))),sa=aa((()=>(0,o._)("p",null,"I’ve guided leaders in building winning teams, inspiring and developing their employees, running effective meetings, public speaking, overcoming imposter syndrome, making confident decisions, navigating rejection, and ultimately fulfilling their full potential on their current journey and beyond.",-1))),ra=[ta,oa,ia,sa];var la={__name:"ExecutiveCoachingBlurb",setup(e){return(e,a)=>((0,o.wg)(),(0,o.iD)("div",na,ra))}};const ca=(0,p.Z)(la,[["__scopeId","data-v-06993ebd"]]);var da=ca;const ua=e=>((0,o.dD)("data-v-18ed97b9"),e=e(),(0,o.Cn)(),e),pa={className:"executive-coaching-page"},va=ua((()=>(0,o._)("h1",{className:"page-title"},"Vatalaro Executive and Leadership Coaching",-1))),ha=ua((()=>(0,o._)("h3",null,"Are you ready to step into your full potential?",-1))),ga=ua((()=>(0,o._)("p",null,"My practice is dedicated to empowering leaders to excel in the corporate world while championing outcomes that bring about transformative change to their lives and society.",-1)));var fa={__name:"ExecutiveCoaching",setup(e){return(e,a)=>((0,o.wg)(),(0,o.iD)("div",pa,[va,ha,ga,(0,o.Wm)(Fe),(0,o.Wm)(da),(0,o.Wm)(Ye),(0,o.Wm)(ea)]))}};const ma=(0,p.Z)(fa,[["__scopeId","data-v-18ed97b9"]]);var _a=ma;const ba=e=>((0,o.dD)("data-v-36d08021"),e=e(),(0,o.Cn)(),e),ya={class:"workshops-training"},wa=ba((()=>(0,o._)("h1",null,"Workshops & Training for managers and teams",-1))),ka=ba((()=>(0,o._)("section",null,[(0,o._)("h2",null,"Nurturing Growth: Performance Management & Feedback Essentials"),(0,o._)("p",null,"Learn how to set clear expectations, provide constructive feedback, and have performance conversations to drive employee growth and impact.")],-1))),Ca=ba((()=>(0,o._)("section",null,[(0,o._)("h2",null,"Fostering Inclusivity: A DEIB Training Workshop"),(0,o._)("p",null,"Delve into the nuanced world of diversity, equity, inclusion, and belonging (DEIB). We’ll explore unconscious bias, allyship, and the importance of inclusive hiring practices. If you have Employee Resource Groups, we can collaborate with them to add a dynamic, engaging, and impactful dimension to this training, showcasing from a personal lens why this work matters.")],-1))),Da=ba((()=>(0,o._)("section",null,[(0,o._)("h2",null,"Demystifying Equity Compensation"),(0,o._)("p",null,"This workshop provides startup founders, People professionals, and employees with a comprehensive understanding of equity compensation packages. It includes candidate calculator and internal equity templates you can take back to your teams.")],-1))),xa=[wa,ka,Ca,Da];var Ia={__name:"WorkshopsAndTrainings",setup(e){return(e,a)=>((0,o.wg)(),(0,o.iD)("div",ya,xa))}};const Wa=(0,p.Z)(Ia,[["__scopeId","data-v-36d08021"]]);var Aa=Wa;const Ha=e=>((0,o.dD)("data-v-3bec6f9a"),e=e(),(0,o.Cn)(),e),Ea={class:"people-operations"},Ta=Ha((()=>(0,o._)("h1",null,"On Demand & Full Service People Operations for Startups",-1))),Oa=Ha((()=>(0,o._)("p",null,[(0,o._)("em",null,"Why Every Startup Needs People Operations. Yes, Even You. [9 min read]")],-1))),Sa=Ha((()=>(0,o._)("p",null,"Navigating the complexities of People Operations (or HR) can be daunting for startups, but there are common pitfalls that can easily be avoided, and are sometimes critical to a company's survival. I’ve teamed up with heavy hitting People Leaders who laid the groundwork at Airbnb, Facebook, LinkedIn, and Asana.",-1))),Ua=Ha((()=>(0,o._)("p",null,"We provide critical people operations services that won’t break the bank. It's like having a team of in-house experts when you need them. We’ll start by conducting an honest assessment of your current state, and provide a few different solutions (we’ll never oversell you).",-1))),Pa=[Ta,Oa,Sa,Ua];var Za={__name:"PeopleOperations",setup(e){return(e,a)=>((0,o.wg)(),(0,o.iD)("div",Ea,Pa))}};const La=(0,p.Z)(Za,[["__scopeId","data-v-3bec6f9a"]]);var Fa=La,ja=n(7139),Ka=n(4870);const Ma={class:"grid-container"};var qa={__name:"AreasWeHelp",setup(e){const a=(0,Ka.iH)([{id:1,header:"Header 1",text:"Content..."},{id:2,header:"Header 2",text:"Content..."},{id:3,header:"Header 3",text:"Content..."},{id:4,header:"Header 4",text:"Content..."},{id:5,header:"Header 5",text:"Content..."},{id:6,header:"Header 6",text:"Content..."},{id:7,header:"Header 7",text:"Content..."},{id:8,header:"Header 8",text:"Content..."},{id:9,header:"Header 9",text:"Content..."},{id:10,header:"Header 10",text:"Content..."}]);return(e,n)=>((0,o.wg)(),(0,o.iD)("div",Ma,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.value,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"box",key:e.id},[(0,o._)("h2",null,(0,ja.zw)(e.header),1),(0,o._)("p",null,(0,ja.zw)(e.text),1)])))),128))]))}};const za=qa;var Na=za;const Ya=(0,o._)("h1",null,"Vatalaro Consulting",-1);var Ga={__name:"ConsultingPage",setup(e){return(e,a)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[Ya,(0,o.Wm)(Aa),(0,o.Wm)(Fa),(0,o.Wm)(Na)],64))}};const Va=Ga;var Ba=Va;const Ra=[{path:"/",component:we},{path:"/about",component:_e},{path:"/contact",component:Ee},{path:"/executive-coaching",component:_a},{path:"/consulting",component:Ba}],$a=(0,A.p7)({history:(0,A.PO)(),routes:Ra,scrollBehavior(e){return e.hash?{el:e.hash}:{top:0}}});var Ja=$a;(0,t.ri)(W).use(Ja).mount("#app")}},a={};function n(t){var o=a[t];if(void 0!==o)return o.exports;var i=a[t]={exports:{}};return e[t].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(a,t,o,i){if(!t){var s=1/0;for(d=0;d<e.length;d++){t=e[d][0],o=e[d][1],i=e[d][2];for(var r=!0,l=0;l<t.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](t[l])}))?t.splice(l--,1):(r=!1,i<s&&(s=i));if(r){e.splice(d--,1);var c=o();void 0!==c&&(a=c)}}return a}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[t,o,i]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,t){var o,i,s=t[0],r=t[1],l=t[2],c=0;if(s.some((function(a){return 0!==e[a]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(l)var d=l(n)}for(a&&a(t);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},t=self["webpackChunkvatalarocoaching"]=self["webpackChunkvatalarocoaching"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(8374)}));t=n.O(t)})();
//# sourceMappingURL=app.1d5c2120.js.map