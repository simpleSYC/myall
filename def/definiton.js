

var A0=document.getElementsByClassName("reading-button")[0];
var A1=document.getElementsByClassName("writing-button")[1];
var A2=document.getElementsByClassName("general-button")[0];
var arA=[[[false,null],A0],[[false,null],A1],[[false,null],A2]];

var S0=document.getElementsByClassName("testimonials-button")[0];
var S1=document.getElementsByClassName("portfolio-button")[0];
var S2=document.getElementsByClassName("contact-button")[0];
var arS=[[[false,null],S0],[[false,null],S1],[[false,null],S2]];

var P0=document.getElementsByClassName("new-button")[0];
var P1=document.getElementsByClassName("writing-button")[0];
var P2=document.getElementsByClassName("bin-button")[0];
var arP=[[[false,null],P0],[[false,null],P1],[[false,null],P2]];

var C0= document.getElementsByClassName("contact1-button")[0];
var C1= document.getElementsByClassName("security-button")[0];
var C2= document.getElementsByClassName("profile-button")[0];
var arC=[[[false,null],C0],[[false,null],C1],[[false,null],C2]];

var AR=[arA,arS,arP,arC];

///for(i=0;i<3;i++){
///	for(q=0;q<3;q++){
//	AR[i][]	
///	}
///}
var svg_A=[
'<g target="_blank" onclick="TTT=this.children[0].innerHTML;window.open(TTT);"><text x="0" y="25" style="font-size: 50px;fill: #5d8ffc;font-weight:bold;"></text></g>'
];

var svg_S=[ 
'<g class="Shape" fill="#fff" fill-rule="nonzero" style="scale: 1.5;transform: translate(7px,9px);"><path d="M34.094,8.688h4.756V0.005h-8.643c-0.721-0.03-9.51-0.198-11.788,8.489c-0.033,0.091-0.761,2.157-0.761,6.983l-7.903,0.024 v9.107l7.913-0.023v24.021h12.087v-24h8v-9.131h-8v-2.873C29.755,10.816,30.508,8.688,34.094,8.688z M35.755,17.474v5.131h-8v24 h-8.087V22.579l-7.913,0.023v-5.107l7.934-0.023l-0.021-1.017c-0.104-5.112,0.625-7.262,0.658-7.365 c1.966-7.482,9.473-7.106,9.795-7.086l6.729,0.002v4.683h-2.756c-4.673,0-6.338,3.054-6.338,5.912v4.873L35.755,17.474 L35.755,17.474z"/></g>',
'<g class="Shape" fill="#fff" fill-rule="nonzero" style="scale: 1.4;transform: translate(9px,9px);"><path d="M39.256,6.5H9.744C4.371,6.5,0,10.885,0,16.274v16.451c0,5.39,4.371,9.774,9.744,9.774h29.512c5.373,0,9.744-4.385,9.744-9.774V16.274C49,10.885,44.629,6.5,39.256,6.5z M47,32.726c0,4.287-3.474,7.774-7.744,7.774H9.744C5.474,40.5,2,37.012,2,32.726V16.274C2,11.988,5.474,8.5,9.744,8.5h29.512c4.27,0,7.744,3.488,7.744,7.774V32.726z"/><path d="M33.36,24.138l-13.855-8.115c-0.308-0.18-0.691-0.183-1.002-0.005S18,16.527,18,16.886v16.229c0,0.358,0.192,0.69,0.502,0.868c0.154,0.088,0.326,0.132,0.498,0.132c0.175,0,0.349-0.046,0.505-0.137l13.855-8.113c0.306-0.179,0.495-0.508,0.495-0.863S33.667,24.317,33.36,24.138z M20,31.37V18.63l10.876,6.371L20,31.37z"/></g>',
'<g class="Shape" fill="#fff" fill-rule="nonzero" style="scale: 0.14;transform: translate(100px,100px);"><g><path d="M507.77,96.789c-3.92-4.669-9.903-6.958-15.769-6.358c2.345-4.855,4.354-9.891,6.016-15.091 c2.279-7.127-0.123-15.046-5.97-19.699c-5.849-4.662-14.103-5.232-20.545-1.416c-14.758,8.753-30.599,15.287-47.157,19.455 c-21.035-18.575-48.714-29.128-76.82-29.128c-63.816,0-115.735,51.917-115.735,115.731c0,0.714,0.006,1.428,0.019,2.142 c-64.801-8.793-124.951-42.372-166.494-93.332c-3.765-4.618-9.554-7.099-15.467-6.617C43.922,62.94,38.597,66.283,35.6,71.42 c-10.258,17.603-15.68,37.727-15.68,58.199c0,18.054,4.218,35.74,12.145,51.67c-1.32,0.393-2.602,0.936-3.818,1.634 c-5.477,3.138-8.967,9.007-9.111,15.299c-0.013,0.551-0.014,1.102-0.014,1.659c0,32.878,14.268,64.167,38.287,85.933 c-3.841,4.722-5.072,11.157-3.206,16.976c9.946,31.053,32.666,56.265,61.702,69.726C92.746,383.153,67.381,388.7,41.425,388.7 c-7.086,0-14.204-0.416-21.147-1.238c-8.439-1.004-16.336,3.885-19.202,11.89c-2.863,8,0.132,16.789,7.282,21.373 c47.672,30.566,102.793,46.722,159.404,46.722c111.254,0,180.924-52.547,219.777-96.631 c48.338-54.836,76.06-127.446,76.06-199.211c0-1.265-0.008-2.537-0.024-3.811c17.576-13.928,32.828-30.48,45.386-49.265 C513.42,111.86,512.927,102.917,507.77,96.789z M447.131,154.728c-2.645,1.993-4.158,5.147-4.057,8.456 c0.086,2.799,0.129,5.633,0.129,8.425c0,66.867-25.866,134.561-70.965,185.723c-36.075,40.928-100.834,89.716-204.475,89.716 c-49.475,0-97.73-13.257-140.171-38.423c4.596,0.316,9.222,0.475,13.837,0.475c37.456,0,73.838-10.387,105.213-30.038 c3.502-2.195,5.335-6.287,4.64-10.361c-0.697-4.075-3.783-7.326-7.816-8.234c-31.581-7.104-57.553-30.05-68.608-60.322 c1.701,0.258,3.412,0.473,5.115,0.644c4.75,0.466,9.202-2.416,10.699-6.954c1.497-4.539-0.358-9.508-4.462-11.956 c-28.06-16.734-45.763-46.996-46.651-79.439c3.985,2.013,8.121,3.766,12.341,5.228c4.347,1.505,9.163-0.084,11.758-3.882 c2.597-3.797,2.33-8.861-0.651-12.365c-14.629-17.197-22.685-39.144-22.685-61.799c0-15.768,3.9-31.279,11.306-45.069 c47.495,56.842,116.675,93.062,190.337,99.529c3.076,0.267,6.105-0.866,8.244-3.091s3.155-5.3,2.764-8.36 c-0.519-4.065-0.782-8.219-0.782-12.344c0-52.566,42.768-95.332,95.336-95.332c24.725,0,49.052,9.914,66.741,27.198 c2.46,2.403,5.965,3.408,9.323,2.665c18.548-4.087,36.34-10.801,52.975-19.987c-4.049,10.366-9.853,19.856-17.303,28.281 c-3.006,3.399-3.405,8.376-0.978,12.211c2.426,3.835,7.097,5.607,11.453,4.344c6.018-1.74,11.985-3.781,17.819-6.092 C476.151,129.269,462.58,143.088,447.131,154.728z"/> </g> <g> <path d="M89.95,145.834c-2.153-1.605-4.298-3.258-6.377-4.91c-4.409-3.506-10.826-2.774-14.331,1.636 c-3.505,4.409-2.773,10.825,1.636,14.331c2.241,1.782,4.554,3.564,6.874,5.294c1.832,1.366,3.97,2.025,6.091,2.025 c3.11,0,6.182-1.418,8.183-4.102C95.394,155.592,94.465,149.203,89.95,145.834z"/>  </g> <g> <g> <path d="M222.328,196.399c-36.715-3.223-73.142-14.6-105.344-32.9c-4.898-2.783-11.123-1.07-13.907,3.828 c-2.783,4.898-1.07,11.123,3.828,13.907c34.73,19.738,74.026,32.009,113.639,35.487c0.304,0.026,0.605,0.04,0.904,0.04 c5.229,0,9.682-4,10.148-9.309C232.088,201.84,227.939,196.892,222.328,196.399z"/></g></g></g>',
'<g class="Shape" fill="#fff" fill-rule="nonzero" style="scale: 1.3;transform: translate(12px,12px);"><path d="M40.4,5.5H35.6c-1.434,0-2.6,1.166-2.6,2.6V12.9c0,1.434,1.166,2.6,2.6,2.6H40.4c1.434,0,2.6-1.166,2.6-2.6V8.1C43,6.666,41.834,5.5,40.4,5.5z M41,12.9c0,0.331-0.269,0.6-0.6,0.6H35.6c-0.331,0-0.6-0.269-0.6-0.6V8.1c0-0.331,0.269-0.6,0.6-0.6H40.4c0.331,0,0.6,0.269,0.6,0.6V12.9z"/><path d="M37.8,0.5H10.2C4.576,0.5,0,5.089,0,10.731V17.5v2v17.77C0,42.911,4.576,47.5,10.2,47.5h27.6c5.624,0,10.2-4.589,10.2-10.23V19.5v-2v-6.769C48,5.089,43.424,0.5,37.8,0.5z M46,37.27c0,4.538-3.679,8.23-8.2,8.23H10.2c-4.522,0-8.2-3.692-8.2-8.23V19.5h12.221C11.62,22.043,10,25.584,10,29.5c0,7.72,6.28,14,14,14s14-6.28,14-14c0-3.916-1.62-7.457-4.221-10H46V37.27z M36,29.5c0,6.617-5.383,12-12,12s-12-5.383-12-12s5.383-12,12-12S36,22.883,36,29.5zM31.174,17.5c-2.101-1.261-4.55-2-7.174-2s-5.073,0.739-7.174,2H2v-6.769C2,6.192,5.679,2.5,10.2,2.5h27.6c4.521,0,8.2,3.692,8.2,8.231V17.5H31.174z"/><path d="M15,29.5c0,4.962,4.037,9,9,9s9-4.038,9-9s-4.037-9-9-9S15,24.538,15,29.5z M31,29.5c0,3.86-3.141,7-7,7s-7-3.14-7-7s3.141-7,7-7S31,25.64,31,29.5z"/></g>'];

var svg_P=[
'<g class="Shape" fill="#fff" fill-rule="nonzero" style="scale: 0.14;transform: translate(100px,100px);" ><g><path d="M476.166,169.725c-9.687-35.524-34.838-60.946-72.909-73.865c-4.511-26.425-16.475-47.896-35.655-63.87 C342.131,10.778,304.354,0.022,255.321,0.022H143.825c-11.167-0.467-33.305,6.234-39.179,34.907L31.641,391.874 c-0.043,0.208-0.078,0.417-0.108,0.628c-0.22,1.572-1.905,15.638,6.632,25.457c3.382,3.889,9.651,8.525,20.308,8.525h49.602 c0.357,0.017,0.727,0.024,1.111,0.024c2.435,0,5.391-0.348,8.561-1.207L107.1,477.359c-0.043,0.208-0.079,0.417-0.108,0.628 c-0.22,1.572-1.905,15.639,6.632,25.457c3.382,3.889,9.651,8.525,20.308,8.525h49.593c0.407,0.02,0.828,0.03,1.261,0.03 c11.544,0,31.991-7.274,36.556-35.689l16.482-81.478c0.281-1.218,3.833-15.274,17.331-15.274c0.861,0,1.927,0.011,3.181,0.022 c16.557,0.162,60.545,0.605,105.734-14.622c25.951-8.744,48.038-21.327,65.645-37.4c21.542-19.664,36.531-44.676,44.549-74.336 C478.851,236.261,485.201,202.857,476.166,169.725z M379.115,162.413c-19.699,72.878-85.909,111.312-191.623,111.309 c-1.459,0-2.938-0.008-4.412-0.022c-1.335-0.013-2.469-0.023-3.384-0.023c-3.792,0-7.254,0.513-10.41,1.418l30.8-150.588 c3.589-17.517,15.475-18.609,18.368-18.609c0.042,0,0.083,0.001,0.121,0.001c0.217,0.017,0.208,0.009,0.474,0.009h111.73 c20.137,0,38.203,1.935,53.825,5.754C385.97,132.868,381.874,152.217,379.115,162.413z M108.925,406.101 c-0.263-0.023-0.269-0.014-0.577-0.014H58.474c-3.58,0-4.57-1.121-4.896-1.489c-1.735-1.961-2.128-6.501-1.869-9.045 l72.921-356.534c3.589-17.517,15.475-18.609,18.368-18.609c0.042,0,0.083,0.001,0.121,0.001c0.217,0.017,0.208,0.009,0.474,0.009 h111.728c71.327,0,113.574,23.397,125.842,69.599c-15.164-2.996-32.04-4.511-50.383-4.511H219.282 c-11.158-0.47-33.305,6.234-39.179,34.907l-55.935,273.485C120.005,405.589,110.961,406.17,108.925,406.101z M454.572,247.898 c-19.699,72.878-85.909,111.312-191.623,111.309c-1.459,0-2.938-0.008-4.412-0.022c-1.335-0.013-2.469-0.023-3.384-0.023 c-24.018,0-34.878,20.505-37.266,31.348c-0.013,0.057-0.024,0.113-0.037,0.171l-16.547,81.797 c-0.029,0.147-0.056,0.293-0.078,0.441c-2.808,17.886-14.247,18.699-16.838,18.668c-0.264-0.023-0.271-0.014-0.582-0.014h-49.874 c-3.58,0-4.57-1.121-4.896-1.489c-1.735-1.961-2.128-6.501-1.869-9.045l35.187-171.636c0.476-1.937,4.244-15.329,17.344-15.329 c0.861,0,1.927,0.011,3.181,0.022c16.558,0.163,60.545,0.605,105.734-14.622c25.951-8.744,48.038-21.327,65.645-37.4 c21.542-19.664,36.531-44.676,44.549-74.336c2.752-10.174,6.683-28.476,6.453-49.345 C473.273,147.034,462.784,217.544,454.572,247.898z"/> </g> <g> <path d="M111.82,210.263c-5.517-1.126-10.905,2.434-12.032,7.953l-0.97,4.753c-1.126,5.518,2.434,10.905,7.953,12.032 c0.688,0.141,1.375,0.208,2.051,0.208c4.745,0,8.995-3.331,9.981-8.161l0.97-4.753C120.899,216.777,117.338,211.39,111.82,210.263 z"/>  </g> <g> <path d="M104.062,248.28c-5.517-1.126-10.905,2.434-12.032,7.953L66.231,382.638c-1.126,5.518,2.434,10.905,7.953,12.032 c0.688,0.141,1.375,0.208,2.051,0.208c4.745,0,8.995-3.331,9.981-8.161l25.798-126.405 C113.14,254.793,109.58,249.406,104.062,248.28z"/></g></g>',
'<g class="Shape" fill="#fff" fill-rule="nonzero" style="transform: translate(10px,8px);scale: 2.5;"><path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003"/></g>',
'<g class="Shape" fill="#fff" fill-rule="nonzero" style="transform: translate(5px,4px); scale: 3.1;"><path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/></g>'];
var svg_C=[
'<g class="Shape" fill="#fff" fill-rule="nonzero" style="transform: translate(12px,12px); scale: 1.1;"><path d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6 h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017 L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003 L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14 C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z  M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401 c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981 l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"/><g>',
'<g class="Shape" fill="#fff" fill-rule="nonzero" style="transform: translate(16px,16px); scale: 0.4;"><path d="M200.65,105.892l-21.763-19.709V39.168c0-2.026-1.643-3.665-3.665-3.665h-19.158 c-0.973,0-1.908,0.383-2.598,1.074c-0.691,0.691-1.077,1.625-1.066,2.602l0.05,23.059l-47.466-42.993 c-1.389-1.256-3.482-1.267-4.889-0.032L1.247,106.278c-1.263,1.109-1.61,2.924-0.841,4.42c0.759,1.485,2.434,2.28,4.066,1.908 l21.971-4.96v67.758c-0.021,0.591-0.032,3.647,2.18,5.944c0.981,1.009,2.738,2.222,5.569,2.222c5.282,0,49.027-0.054,49.027-0.054 c2.029,0,3.661-1.643,3.665-3.665l0.057-40.509c-0.036-0.472,0.05-1.671,0.537-2.205c0.329-0.351,1.034-0.433,1.557-0.433h20.353 c0.913,0,2.147,0.147,2.781,0.805c0.698,0.716,0.687,1.961,0.676,2.154l-0.093,40.058c0,0.97,0.379,1.904,1.07,2.598 c0.687,0.687,1.632,1.081,2.598,1.081h48.003c3.264,0,5.268-1.378,6.363-2.527c2.559-2.663,2.473-6.313,2.459-6.564V106.54 l24.111,5.64c1.643,0.39,3.307-0.39,4.091-1.868C202.225,108.834,201.896,107.019,200.65,105.892z M159.744,42.836h11.817v36.705 l-11.76-10.651L159.744,42.836z M170.409,98.344c-1.081-0.258-2.24,0-3.11,0.698c-0.873,0.694-1.389,1.754-1.389,2.874v72.486 c0,0.394-0.143,1.12-0.419,1.403c-0.225,0.222-0.762,0.251-1.07,0.251h-44.328l0.079-36.129c0.032-0.44,0.218-4.366-2.609-7.401 c-1.356-1.435-3.858-3.153-8.181-3.153H89.029c-3.654,0-5.83,1.557-7.011,2.859c-2.516,2.788-2.473,6.524-2.409,7.573 l-0.057,36.383c-10.629,0.011-41.017,0.05-45.366,0.05c-0.132,0-0.215-0.007-0.268-0.007c-0.007,0-0.018,0-0.025,0 c-0.068-0.147-0.118-0.426-0.118-0.676v-72.493c0-1.113-0.515-2.169-1.381-2.867c-0.873-0.694-2.015-0.948-3.096-0.712 l-12.433,2.806l85.613-75.406l49.986,45.269v0.218h0.236l32.51,29.447L170.409,98.344z"/></g>',
'<g class="Shape" fill="#fff" fill-rule="nonzero" style="transform: translate(15px,20px);"><path d="M44.071,38.385c-1.275-0.728-2.597-0.958-3.721-0.646c-0.844,0.234-1.532,0.768-1.995,1.546 c-1.021,1.221-2.287,2.646-2.592,2.867c-2.371,1.604-4.252,1.414-6.295-0.629L17.982,30.037c-2.045-2.045-2.233-3.928-0.631-6.292 c0.224-0.31,1.649-1.575,2.869-2.595c0.778-0.464,1.312-1.151,1.546-1.996c0.311-1.123,0.081-2.444-0.653-3.731 c-0.173-0.296-4.289-7.27-8.085-9.277c-1.929-1.019-4.255-0.67-5.796,0.872L4.695,9.555c-7.401,7.402-6.031,16.596,3.962,26.588 l14.705,14.706c4.539,4.54,8.937,7.326,13.068,8.281c1.096,0.253,2.17,0.38,3.224,0.38c3.717,0,7.169-1.573,10.296-4.7l2.537-2.537 c1.541-1.541,1.892-3.87,0.872-5.796C51.351,42.682,44.378,38.564,44.071,38.385z M51.073,50.858l-2.537,2.537 c-6.568,6.568-14.563,5.237-23.76-3.961L10.071,34.728c-9.197-9.196-10.53-17.19-3.962-23.76l2.537-2.537 c0.566-0.566,1.313-0.862,2.07-0.862c0.467,0,0.939,0.112,1.376,0.344c3.294,1.743,7.256,8.454,7.289,8.511 c0.449,0.787,0.62,1.608,0.457,2.196c-0.1,0.36-0.323,0.634-0.684,0.836l-0.15,0.104c-0.853,0.712-2.883,2.434-3.308,3.061 c-0.612,0.904-1.018,1.792-1.231,2.665c-0.711-1.418-1.285-3.06-1.474-4.881c-0.058-0.549-0.547-0.94-1.099-0.892 c-0.549,0.058-0.948,0.549-0.892,1.099c0.722,6.953,6.13,11.479,6.359,11.668c0.025,0.021,0.055,0.028,0.081,0.046l10.612,10.612 c0.045,0.045,0.091,0.084,0.136,0.127c0.035,0.052,0.058,0.109,0.104,0.155c0.189,0.187,4.704,4.567,11.599,5.283 c0.035,0.003,0.07,0.005,0.104,0.005c0.506,0,0.94-0.383,0.994-0.896c0.057-0.55-0.343-1.041-0.892-1.099 c-2.115-0.219-3.988-0.839-5.549-1.558c0.766-0.23,1.545-0.612,2.334-1.147c0.627-0.426,2.349-2.454,3.06-3.307l0.104-0.151 c0.202-0.359,0.476-0.583,0.836-0.684c0.585-0.159,1.408,0.007,2.185,0.45c1.879,1.102,7.073,4.56,8.521,7.296 C52.197,48.558,51.989,49.942,51.073,50.858z"/> <path d="M27.362,0.487c-0.553,0-1,0.447-1,1s0.447,1,1,1c16.892,0,30.635,13.743,30.635,30.635c0,0.553,0.447,1,1,1s1-0.447,1-1 C59.997,15.127,45.357,0.487,27.362,0.487z"/> <path d="M27.362,9.517c13.016,0,23.604,10.589,23.604,23.604c0,0.553,0.447,1,1,1s1-0.447,1-1 c0-14.118-11.486-25.604-25.604-25.604c-0.553,0-1,0.447-1,1S26.809,9.517,27.362,9.517z"/> <path d="M27.362,16.547c9.14,0,16.575,7.436,16.575,16.575c0,0.553,0.447,1,1,1s1-0.447,1-1c0-10.242-8.333-18.575-18.575-18.575 c-0.553,0-1,0.447-1,1S26.809,16.547,27.362,16.547z"/></g>'];

var svg_ASPC=[svg_A,svg_S,svg_P,svg_C];

var DTA_A=["https://"];

var DTA_S=["https://www.facebook.com/","https://www.youtube.com/","https://twitter.com/","https://www.instagram.com/"];

var DTA_P=["https://www.paypal.me/","https://www.patreon.com/","https://ko-fi.com/",""];

var DTA_C=["Email : ","Adresse  : ","Phone : "];

var DTA=[DTA_A,DTA_S,DTA_P,DTA_C];


var F_A=["far fa-edit"];
var F_S=["fab fa-facebook-square","fab fa-youtube-square","fab fa-twitter-square","fab fa-instagram"];
var F_P=["fab fa-paypal","fab fa-patreon","fas fa-coffee"];
var F_C=["fas fa-envelope-square","fas fa-home","fas fa-phone-square-alt"];
var F_Logo=[F_A,F_S,F_P,F_C];





////////////////////


function PAR(b){a=b.classList.value;
if(a.includes("faq-button")){R_1="Activity";parCAT=0;}else  //  Activity
if(a.includes("home-button")){R_1="Social";parCAT=1;}else //Social
if(a.includes("more-button")){R_1="Peyment";parCAT=2;}else // Peyment
if(a.includes("settings-button")){R_1="Contact";parCAT=3;}} //Contact

var proz1=["Activity","Social","Peyment","Contact"];	
var proz2=["L0","L1","L2"];


var z23=document.getElementById("z_23");
var z13=document.getElementById("z_13");
var z32=document.getElementById("z_32");
var ZZ=[z23,z13,z32];

function updZvzda(a){
	if(a==0){for(i=0;i<ZZ.length;i++){ZZ[i].remove();}}else
	if(a==1){
		ZZ[0].remove();
		ZZ[1].style="opacity:1;scale:3;fill:gold;transform:translate(2px,25px);";
		ZZ[2].remove();}else
	if(a==2){
		ZZ[0].style="opacity:1;scale:3;fill:gold;transform:translate(-10px,25px);";
		ZZ[1].remove();
		ZZ[2].style="opacity:1;scale:3;fill:gold;transform:translate(15px,25px);";}else
	if(a==3){
		ZZ[0].style="opacity:1;scale:3;fill:gold;transform:translate(-15px,22px);";
		ZZ[1].style="opacity:1;scale:3;fill:gold;transform:translate(2px,25px);";
		ZZ[2].style="opacity:1;scale:3;fill:gold;transform:translate(19px,22px);";}
}



function UPDATE(a,b){
if(a==0){ updZvzda(parseInt(b)); puniLokalno();
}else{a.innerHTML=b;}}


