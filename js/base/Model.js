window.Model = function(options){
	let resourceName = options.resourceName
	return {
		init: function() {
            var APP_ID = 'xkEaHgwQriprwGMQ16trRlwn-gzGzoHsz';
            var APP_KEY = 'WXFE0MM9fM8g5cWrSQWSiTAr';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch: function() {
            var query = new AV.Query(resourceName);
            return query.find()
        },
        save: function(name,content) {
            var Project = AV.Object.extend(resourceName)
            var project = new Project()
            return project.save(object)
        }
	}
}