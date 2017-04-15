var gulp=require('gulp');
var gulpuglify=require('gulp-uglify');
var babel=require('gulp-babel');
var concat=require('gulp-concat');
 gulp.task('dist',function(){
 return 	gulp.src('TestApp/**/*.js').pipe(babel({
            ignore: 'gulpfile.babel.js'
        }))
	.pipe(gulpuglify())
	 .pipe(concat('all.js'))
	.pipe(gulp.dest('dist/js/'));
	
	
	});
