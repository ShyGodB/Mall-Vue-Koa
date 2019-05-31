// upload() {
//     const files = document.getElementById('file-upload').files;
//     if(files.length === 0) return;
//     const form = new FormData();
//     const url = '/api/view/addgood';  //服务器上传地址
//     const file = files[0];
//     console.log(file.size);
//     var read = new FileReader();
//     read.readAsArrayBuffer(file);
//     read.onload = function () {
//         console.log(this.result);
//         console.log(new Blob([this.result]))
//     }
//     form.append('file', file);
//     axios({
//         url: url,
//         method: 'post',
//         data: form
//     }).then(res => {
//         console.log(res)
//     })
// },
