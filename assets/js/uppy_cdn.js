import {
    Uppy,
    Dashboard,
    Webcam,
    Tus,
  } from "https://releases.transloadit.com/uppy/v3.15.0/uppy.min.mjs";
  
  let totJson = new Array();
  
  const uppy = new Uppy({ debug: true, autoProceed: false })
    .use(Dashboard, { 
      inline: true,
      target: '#AttachFiles'
    })
    .use(Webcam, { target: Dashboard })
    .use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" });
  
  // 파일마다 업로드 성공했을때 
  uppy.on('upload-success', (file, response) => {
    //console.log(file, response);
    totJson.push({
      fileid: file.id,
      filename: file.name,
      filesize: file.size,
      filetype: file.type,
      url: response.uploadURL
    })
    document.getElementById('AttachJsons').innerText = JSON.stringify(totJson);
  });  
  uppy.on("success", (fileCount) => {
    console.log(`${fileCount} files uploaded`);
  });
  