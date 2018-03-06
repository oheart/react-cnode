let Service = {
    //项目接口请求的基准url
    BaseURL: '/api/v1',

    // 获取接口请求的url地址
    getReqUrl: function(){
        return {
            signin: this.BaseURL + "/accesstoken",     //登录 (post) 
            getTopics: this.BaseURL + "/topics",     //获取首页主题 (get)
            getUnreadCount: this.BaseURL + "/message/count", //获取未读消息数 (get)
            getUserDetail: this.BaseURL + "/user/",  //获取用户详情 (post)
            getMsg: this.BaseURL + "/messages" ,     // 获取已读和未读消息 (get)
            createTopics: this.BaseURL + "/topics", //新建主题 (post)
            topicDetail: this.BaseURL + "/topic/", //主题详情 (get)
            createComment: (topicId) => this.BaseURL + `/topic/${topicId}/replies`, //新建评论 (post)
            clickLike: (replyId) => this.BaseURL + `/reply/${replyId}/ups`  //为评论点赞 (post)
        }
    },

    // 本地数据存储或者读取
    localItem: function (key, value) {
        if (arguments.length == 1) {
            return localStorage.getItem(key);
        } else {
            return localStorage.setItem(key, value);
        }
    },

    //删除某项本地存储
    removeLocalItem: function (key) {
        if (key) {
            return localStorage.removeItem(key);
        }
        return localStorage.removeItem();
    },

    //清空所有本地存储
    clearAllLocal: function(){
        return localStorage.clear();
    },

    //格式化时间
    formatDate: function (str) {
        var date = new Date(str);
        var time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
        if (time < 0) {
            return '';
        } else if (time / 1000 < 60) {
            return '刚刚';
        } else if ((time / 60000) < 60) {
            return parseInt((time / 60000)) + '分钟前';
        } else if ((time / 3600000) < 24) {
            return parseInt(time / 3600000) + '小时前';
        } else if ((time / 86400000) < 31) {
            return parseInt(time / 86400000) + '天前';
        } else if ((time / 2592000000) < 12) {
            return parseInt(time / 2592000000) + '月前';
        } else {
            return parseInt(time / 31536000000) + '年前';
        }
    },

    //判断是否是空对象
    isEmptyObj(obj){
     // because Object.keys(new Date()).length === 0;
     // we have to do some additional check
       return Object.keys(obj).length === 0 && obj.constructor === Object;
    }

};

export default Service;
