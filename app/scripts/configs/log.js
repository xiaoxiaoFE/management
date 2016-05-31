define(function(require, exports, module) {

	exports.targets = [{
		type: 'TEMPLATE',
		name: '微首页'
	}, {
		type: 'EVENT',
		name: '活动'
	}, {
		type: 'ARTICLE',
		name: '文章'
	}, {
		type: 'VOTE',
		name: '投票'
	}, {
		type: 'TICKET',
		name: '电子票'
	}, {
		type: 'WALL',
		name: '微信墙'
	}, {
		type: 'POLL',
		name: '问卷'
	}, {
		type: 'PROPOSAL',
		name: '提案'
	}, {
		type: 'LOST',
		name: '失物'
	}, {
		type: 'ORGANIZATION',
		name: '组织招新'
	}, {
		type: 'MEMBER',
		name: '成员'
	}, {
		type: 'FEEDBACK',
		name: '意见反馈'
	}, {
		type: 'MXZ',
		name: '教务'
	}, {
		type: 'RELATION',
		name: '关联组织'
	}, {
		type: 'USER',
		name: '用户'
	}, {
		type: 'COMMENT',
		name: '评论'
	}, {
		type: "PRAISE",
		name: "点赞"
	}, {
		type: "LOTTERY",
		name: "抽奖"
	}, {
		type: "PICTURE",
		name: "图片上传"
	}, {
		type: 'NOTICE',
		name: '组织公告'
	}, {
		type: 'NOTIFICATION',
		name: '通知'
	}, {
		type: 'RESUME',
		name: '简历'
	}, {
		type: 'HISTORY',
		name: '用户历史'
	}, {
		type: 'WECHAT',
		name: '微信文章'
	}];

	exports.operations = [{
		type: 'LIST',
		name: '查看列表'
	}, {
		type: 'GET',
		name: '查看详情'
	}, {
		type: 'GET_EDIT',
		name: '查看详情/编辑'
	}, {
		type: 'ADD',
		name: '新建'
	}, {
		type: 'UPDATE',
		name: '更新'
	}, {
		type: 'REMOVE',
		name: '删除'
	}, {
		type: 'SIGNUP',
		name: '报名'
	}, {
		type: 'CANCEL_SIGNUP',
		name: '取消报名'
	}, {
		type: 'PRAISE',
		name: '点赞'
	}, {
		type: 'CANCEL_PRAISE',
		name: '取消点赞'
	}];

});