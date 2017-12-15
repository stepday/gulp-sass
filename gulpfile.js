var gulp = require("gulp"),
    sassminfy = require("gulp-sass"),
	sass = require('gulp-ruby-sass');//sass编译


//编译sass文件
gulp.task('sass', function () {
    return sass('./sass/*.scss')//编译文件
    .on('error', sass.logError)//错误信息
    .pipe(sassminfy({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./css'))////输出路径
});

//默认任务
gulp.task('default',function(){
   gulp.watch('./sass/*.scss',['sass']);// 监听的文件
});