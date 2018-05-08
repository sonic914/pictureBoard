Template.regPost.events ({
    "click button[name=writePost]" (evt, tmpl) {
        $(tmpl.findAll(".modal-dialog")).toggle();
    }
})