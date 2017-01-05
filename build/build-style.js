/**
 * Created by chengfei on 2017/1/5.
 */
var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	less = require('gulp-less'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer');
// 编译less
gulp.task('css', function () {
	gulp.src('../src/styles/index.less')
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'ie > 8']
		}))
		.pipe(cleanCSS())
		.pipe(rename('cview.css'))
		.pipe(gulp.dest('../dist/styles'));
});
// 拷贝字体文件
gulp.task('fonts', function () {
	gulp.src('../src/styles/common/iconfont/fonts/*.*')
		.pipe(gulp.dest('../dist/styles/fonts'));
});
gulp.task('default', ['css', 'fonts']);