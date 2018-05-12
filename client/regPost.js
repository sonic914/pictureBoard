Template.regPost.events ({
    "click button[name=writePost]" (evt, tmpl) {
        $(tmpl.findAll(".modal-dialog")).toggle();
    },
    "click button[name=save]" (evt, tmpl) {
        // 템플릿에서 데이터 가져오기
        var title = tmpl.find("input[type=text]").value;
        var context = tmpl.find("textarea").value;
        var atDate = new Date();
        var post = {
            title,
            context,
            atDate
        };
        console.log(post);

        // 서버 메소드 호출하기
        Meteor.call("savePost", post, (err,data)=> {
            if(err) {
                alert ("서버에러 => " + err.error);
            } else {
                console.log(data);
            }
        });
    }
});

Template.regPost.onRendered ( function () {
    var element = this.find(".editable");
    this.editor = new MediumEditor (element, {
        // 옵션등록부분
        spellcheck: false
    });
});