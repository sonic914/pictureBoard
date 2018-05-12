Meteor.methods ({
    savePost(post) {
        if(!post) {
            throw new Meteor.error("입력값이 없습니다.");
        }
        return Posts.insert(post);
    },
    removePost(postId) {
        if(!postId) {
            throw new Meteor.error("입력값이 없습니다.");
        }
        return Posts.remove( {_id: postId });
    },
    updatePost(post={}) {
        if(!post._id || !post.context) {
            throw new Meteor.error("데이터를 확인하세요");
        }
        return Posts.update({_id: post._id}, {$set: {context: post.context}});
    }
});