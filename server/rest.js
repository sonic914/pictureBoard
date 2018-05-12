// file 객체 활용
import fs from 'fs';

WebApp.connectHandlers.use ("/temp", (req, res, next) => {
    // file명 추출
    var filename = req.originalUrl.split("/")[2];
    // 이미지 절대경로 생성
    filename = "/Projects/img_temp/" + filename;
    console.log(filename);
    // 이미지 읽기
    var fsReadFile = Meteor.wrapAsync(fs.readFile);
    var img = fsReadFile(filename);
    res.writeHead(200);
    res.end(img, 'binary');
});