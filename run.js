
const path = require('path');


//const url = 'Users/cliffordcrerar/letsplay/NativefyWorkshop/localApps/sqlite-viewer/';
//const url = 'file:///Users/cliffordcrerar/letsplay/NativefyWorkshop/localApps/sqlite-viewer/index.html';
//const url = 'https://nodejs.org/en/'
//const url = 'https://materializecss.com/'
//const url = 'https://portal.azure.com/#@cliffcrerargmail.onmicrosoft.com/dashboard/private/e361c483-2557-4033-b373-3315e527a00f'
//const url="https://login.microsoftonline.com/"
//const url="https://github.com/CliffCrerar?tab=repositories"
const url = 'https://nextjs.org/docs'
const appName = 'Next.js-Docs'
const savePath = path.join(__dirname, "nativefied", appName);


require('./nativefy')(appName, url, savePath);
