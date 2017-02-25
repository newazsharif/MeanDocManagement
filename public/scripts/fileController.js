angular.module('docManagement').controller('fileController',function(Upload)
{
	var vm = this;
	vm.submit = function(Upload)
	{
		if (vm.upload_form.file.$valid && vm.file) {
                vm.upload(vm.file); 
            }
	}
	vm.upload = function(file)
	{
		Upload.upload({url : 'http://localhost:3000/api/fileUpload', 
                data:{fields : vm.body,file:file}}).then(function(response)
                {
                	alert('uploaded......')
                })
	}
})