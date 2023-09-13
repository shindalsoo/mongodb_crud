const express = require('express');

const app = express();

app.set("view engine", "ejs"); //렌더링 템플릿 엔진으로 ejs를 사용하겠다.

app.use("", require("./routes/routes"));

app.listen(3333,()=>{
    console.log('server started')
})